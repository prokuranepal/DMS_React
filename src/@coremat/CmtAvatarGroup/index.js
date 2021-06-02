import React, { useMemo, useState } from 'react';
import { AvatarGroup } from '@material-ui/lab';
import PropTypes from 'prop-types';
import { makeStyles, Tooltip } from '@material-ui/core';
import CmtAvatar from '../CmtAvatar';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  rootAvatarGroup: props => ({
    '& .MuiAvatar-root': {
      borderColor: props.avatarStyle.outlineColor,
      borderWidth: props.avatarStyle.outlineThickness,
      marginLeft: -props.spacing,
      transition: 'all 0.30s ease',
      '&:first-child': {
        marginLeft: 0,
      },
      '&:hover': {
        borderColor: props.avatarActiveStyle.outlineColor
          ? props.avatarActiveStyle.outlineColor
          : theme.palette.primary.main,
        borderWidth: props.avatarActiveStyle.outlineThickness,
        boxShadow: `rgba(0,0,0,0.2) 0px 2px ${props.avatarActiveStyle.elevation}px -1px`,
        zIndex: `${props.totalRecords} !important`,
      },
    },
    '&:hover .Cmt-hoverEffect': {
      marginLeft: 0,
    },
  }),
}));

const CmtAvatarGroup = ({
  items,
  max,
  srcKey,
  titleKey,
  phCharLength,
  avatarSize,
  onItemClick,
  onMoreClick,
  spacing,
  expandable,
  renderItemSummary,
  renderMore,
  moreVisibleOn,
  itemStyle,
  activeItemStyle,
  tooltipProps,
  ...rest
}) => {
  const avatarStyle = {
    outlineColor: '#fafafa',
    outlineThickness: 2,
    ...itemStyle,
  };

  const avatarActiveStyle = {
    outlineColor: '',
    outlineThickness: 2,
    elevation: 3,
    ...activeItemStyle,
  };

  const totalRecords = useMemo(() => items.length, [items]);
  const visibleItems = useMemo(() => items.slice(0, max < totalRecords ? max - 1 : max), [items, max, totalRecords]);
  const classes = useStyles({
    spacing,
    avatarStyle,
    avatarActiveStyle,
    totalRecords,
  });
  const [itemTooltipContent, setItemTooltipContent] = useState('');
  const [moreTooltipContent, setMoreTooltipContent] = useState('');
  const [moreTooltip, setMoreTooltip] = useState(false);

  const handleItemMouseOver = (item, index) => {
    if (renderItemSummary) {
      setItemTooltipContent(renderItemSummary(item, index));
    }
  };

  const handleItemMouseLeave = () => {
    setItemTooltipContent('');
  };

  const handleMoreMouseOver = () => {
    if (!onMoreClick && moreVisibleOn === 'hover' && renderMore) {
      const restItems = items.slice(max - 1, totalRecords);
      setMoreTooltipContent(renderMore(restItems));
      setMoreTooltip(true);
    }
  };

  const handleMoreMouseLeave = () => {
    if (!onMoreClick && moreVisibleOn === 'hover' && renderMore) {
      setMoreTooltip(false);
      setTimeout(() => {
        setMoreTooltipContent('');
      }, 100);
    }
  };

  const handleItemClick = (item, index) => {
    if (onItemClick) onItemClick(item, index);
  };

  const handleMoreClick = () => {
    const restItems = items.slice(max - 1, totalRecords);
    if (onMoreClick) {
      onMoreClick(restItems);
    } else if (moreVisibleOn === 'click' && renderMore) {
      if (moreTooltipContent) {
        setMoreTooltip(false);
        setTimeout(() => {
          setMoreTooltipContent('');
        }, 100);
      } else {
        setMoreTooltipContent(renderMore(restItems));
        setMoreTooltip(true);
      }
    }
  };

  const getPlaceholderChar = str => {
    if (str && phCharLength > 0) {
      return str.substr(0, phCharLength).toUpperCase();
    }
  };

  return (
    <AvatarGroup className={clsx(classes.rootAvatarGroup, 'Cmt-root-avatar-group')} max={max} {...rest}>
      {visibleItems.map((item, index) => (
        <Tooltip title={itemTooltipContent} key={index} {...tooltipProps}>
          <CmtAvatar
            onMouseEnter={() => handleItemMouseOver(item, index)}
            onMouseLeave={handleItemMouseLeave}
            className={expandable ? 'Cmt-hoverEffect' : ''}
            alt={item[titleKey]}
            src={item[srcKey]}
            size={avatarSize}
            onClick={() => handleItemClick(item, index)}
            style={{ cursor: 'pointer', zIndex: index }}>
            {getPlaceholderChar(item[titleKey])}
          </CmtAvatar>
        </Tooltip>
      ))}

      {max < totalRecords && (
        <Tooltip title={moreTooltipContent} open={moreTooltip}>
          <CmtAvatar
            onMouseEnter={handleMoreMouseOver}
            onMouseLeave={handleMoreMouseLeave}
            className={clsx('Cmt-avatar-more', expandable ? 'Cmt-hoverEffect' : '')}
            alt={(totalRecords - max + 1).toString()}
            size={avatarSize}
            style={{ cursor: 'pointer', zIndex: max }}
            onClick={handleMoreClick}>
            +{totalRecords - max + 1}
          </CmtAvatar>
        </Tooltip>
      )}
    </AvatarGroup>
  );
};

CmtAvatarGroup.prototype = {
  items: PropTypes.array.isRequired,
  max: PropTypes.number,
  spacing: PropTypes.number,
  srcKey: PropTypes.string,
  titleKey: PropTypes.string,
  phCharLength: PropTypes.number,
  avatarSize: PropTypes.oneOfType([PropTypes.oneOf(['small', 'medium', 'large']), PropTypes.number]),
  onItemClick: PropTypes.func,
  onMoreClick: PropTypes.func,
  expandable: PropTypes.bool,
  renderItemSummary: PropTypes.func,
  renderMore: PropTypes.func,
  moreVisibleOn: PropTypes.oneOf(['hover', 'click']),
  itemStyle: PropTypes.object,
  activeItemStyle: PropTypes.object,
  tooltipProps: PropTypes.object,
};

CmtAvatarGroup.defaultProps = {
  items: [],
  max: 5,
  spacing: 8,
  srcKey: 'src',
  titleKey: 'title',
  phCharLength: 1,
  avatarSize: 'medium',
  expandable: false,
  moreVisibleOn: 'hover',
  itemStyle: { outlineColor: '#fafafa', outlineThickness: 2 },
  activeItemStyle: { outlineColor: '', outlineThickness: 2, elevation: 1 },
};

export default CmtAvatarGroup;
