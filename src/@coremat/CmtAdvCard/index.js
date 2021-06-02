import React, { Children, cloneElement, isValidElement, useRef } from 'react';
import { Box, Card } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CmtDropdownMenu from '../CmtDropdownMenu';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useStyles from './index.style';
import { getBackgroundStyle, getOverLayStyle } from '../CmtHelpers/JssHelper';
import IconButton from '@material-ui/core/IconButton';

const CmtAdvCard = ({
  className,
  actions,
  actionHandleIcon,
  actionHandler,
  actionMenuClassName,
  backgroundColor,
  backgroundImage,
  gradientDirection,
  overlay,
  children,
}) => {
  const backgroundStyles = getBackgroundStyle(backgroundColor, backgroundImage, gradientDirection);
  const overlayStyles = getOverLayStyle(overlay);

  const classes = useStyles();

  const headerRef = useRef(null);

  const handleMouseEnter = () => {
    if (headerRef.current) headerRef.current.onHeaderMouseEntered();
  };

  const handleMouseLeave = () => {
    if (headerRef.current) headerRef.current.onHeaderMouseLeft();
  };

  const childrenWithProps = Children.map(children, child => {
    // Checking isValidElement is the safe way and avoids a TS error too.
    if (isValidElement(child)) {
      if (child.type.render && child.type.render.name) {
        if (child.type.render.name === 'CmtCardHeader') {
          return cloneElement(child, { ref: headerRef });
        }
      } else {
        return cloneElement(child);
      }
    }

    return child;
  });

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(classes.advCardRoot, className)}
      style={backgroundStyles}>
      {actions.length > 0 && (
        <Box ml={2} className={clsx(classes.actionMenu, actionMenuClassName)}>
          <CmtDropdownMenu
            TriggerComponent={<IconButton size="small">{actionHandleIcon || <MoreVertIcon fontSize="small" />}</IconButton>}
            items={actions}
            onItemClick={actionHandler}
          />
        </Box>
      )}
      {childrenWithProps}
      {overlay.colors && <Box className={classes.cardOverlay} style={overlayStyles} />}
    </Card>
  );
};

CmtAdvCard.propTypes = {
  actions: PropTypes.array,
  actionHandleIcon: PropTypes.element,
  actionHandler: PropTypes.func,
  actionMenuClassName: PropTypes.string,
  backgroundColor: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  backgroundImage: PropTypes.string,
  gradientDirection: PropTypes.string,
  overlay: PropTypes.object,
};

CmtAdvCard.defaultProps = {
  overlay: { colors: '', opacity: 0, direction: '' },
  actions: [],
  actionMenuClassName: '',
  actionHandler: null,
};

export default CmtAdvCard;
