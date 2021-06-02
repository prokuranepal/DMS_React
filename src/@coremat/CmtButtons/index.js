import React from 'react';
import { Box, Button, IconButton, Tooltip } from '@material-ui/core';
import { componentColors } from '../CmtHelpers/JssHelper';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useStyles from './index.style';

const RenderTooltip = ({ enableTooltip, tooltipProps, item, children }) => {
  const tooltipShow = item.tooltip ? true : enableTooltip;
  const tooltipText = item.tooltip ? item.tooltip : item.label;

  return tooltipShow && tooltipText ? (
    <Tooltip title={tooltipText} aria-label={tooltipText} arrow {...(item.tooltipProps ? item.tooltipProps : tooltipProps)}>
      {children}
    </Tooltip>
  ) : (
    children
  );
};

const RenderDefaultButton = ({
  size,
  colorClass,
  variant,
  itemProps,
  enableTooltip,
  tooltipProps,
  item,
  handleOnButtonClick,
}) => {
  return (
    <RenderTooltip item={item} enableTooltip={enableTooltip} tooltipProps={tooltipProps}>
      <Button
        className={colorClass}
        onClick={handleOnButtonClick}
        variant={item.variant ? item.variant : variant}
        size={item.size ? item.size : size}
        {...(item.itemProps ? item.itemProps : itemProps)}>
        {item.label}
      </Button>
    </RenderTooltip>
  );
};

const RenderIconButton = ({ size, colorClass, itemProps, enableTooltip, tooltipProps, item, handleOnButtonClick }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <RenderTooltip item={item} enableTooltip={enableTooltip} tooltipProps={tooltipProps}>
        <IconButton
          className={colorClass}
          aria-label={item.label}
          onClick={handleOnButtonClick}
          size={item.size ? item.size : size}
          {...(item.itemProps ? item.itemProps : itemProps)}>
          {item.icon}
        </IconButton>
      </RenderTooltip>
      {item.label && (
        <Box mt={2} className={clsx(classes.labelRoot, 'Cmt-Buttons-label')}>
          {item.label}
        </Box>
      )}
    </React.Fragment>
  );
};

const buttonTypes = {
  default: RenderDefaultButton,
  'icon-button': RenderIconButton,
};

const getWrapperProps = (buttonType, size) => {
  if (buttonType === 'icon-button') {
    return {
      minWidth: size === 'small' ? 40 : 60,
      width: size === 'small' ? 40 : 60,
    };
  }
};

const RenderButton = ({ index, type, size, color, variant, onItemClick, itemProps, enableTooltip, tooltipProps, item }) => {
  const classes = useStyles();
  const buttonColor = item.color ? item.color : color;
  const colorClass = buttonColor && classes[buttonColor] ? classes[buttonColor] : '';
  const buttonType = item.type ? item.type : type;

  const handleOnButtonClick = () => {
    if (item.onClick) {
      item.onClick(item);
    } else if (onItemClick) {
      onItemClick(item);
    }
  };

  const wrapperProps = getWrapperProps(buttonType, size);
  const RequestedButton = buttonTypes[buttonType];

  return (
    <Box mr={2} mb={2} {...wrapperProps} className={clsx(classes.buttonRoot, 'CmtButtons-wrapper')}>
      <RequestedButton
        {...{
          size,
          colorClass,
          variant,
          handleOnButtonClick,
          itemProps,
          enableTooltip,
          tooltipProps,
          item,
        }}
      />
    </Box>
  );
};

const CmtButtons = ({
  items,
  type,
  size,
  color,
  variant,
  onItemClick,
  itemProps,
  enableTooltip,
  tooltipProps,
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.root, className)} {...rest}>
      {items.map((item, index) => (
        <RenderButton
          key={index}
          index={index}
          item={item}
          {...{
            type,
            size,
            color,
            variant,
            onItemClick,
            itemProps,
            enableTooltip,
            tooltipProps,
          }}
        />
      ))}
    </Box>
  );
};

CmtButtons.prototype = {
  items: PropTypes.array.isRequired,
  type: PropTypes.oneOf(['default', 'icon-button']),
  itemProps: PropTypes.object,
  onItemClick: PropTypes.func,
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(componentColors),
  enableTooltip: PropTypes.bool,
  tooltipProps: PropTypes.object,
};

CmtButtons.defaultProps = {
  items: [], // format: [{icon: "text or node", label: "button name", onClick: functionHandler, tooltip, ...}]
  type: 'default',
  variant: 'text',
  size: 'medium',
  color: '',
  enableTooltip: false,
};

export default CmtButtons;
