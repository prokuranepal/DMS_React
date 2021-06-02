import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { Avatar } from '@material-ui/core';
import { componentColors } from '../CmtHelpers/JssHelper';
import useStyles from './index.style';

const colorOptions = [...componentColors, 'random'];

const getRandomColor = () => {
  return colorOptions[Math.floor(Math.random() * 11)];
};

const getColorClass = (color, classes) => {
  if (color === 'random') {
    return classes[getRandomColor()];
  }
  return classes[color];
};

const getAvatarSizeClass = (size, classes) => {
  if (typeof size === 'number') {
    return classes.customSize;
  }
  return classes[size];
};

const CmtAvatar = React.forwardRef(({ src, alt, className, color, size, phCharLength, children, ...rest }, ref) => {
  const classes = useStyles({ size: typeof size === 'number' ? size : 0 });
  const colorClass = getColorClass(color, classes);
  const sizeClass = getAvatarSizeClass(size, classes);

  const getPlaceholderChar = str => {
    if (str && phCharLength > 0) {
      return str.substr(0, phCharLength).toUpperCase();
    }
  };

  return (
    <Avatar
      ref={ref}
      className={clsx(classes.root, colorClass, 'Cmt-avatar-size', sizeClass, className && className)}
      src={src}
      alt={alt}
      {...rest}>
      {!src && !children && alt ? getPlaceholderChar(alt) : children}
    </Avatar>
  );
});

CmtAvatar.propTypes = {
  color: PropTypes.oneOf(colorOptions),
  phCharLength: PropTypes.number,
  size: PropTypes.oneOfType([PropTypes.oneOf(['small', 'medium', 'large']), PropTypes.number]),
};

CmtAvatar.defaultProps = {
  color: 'grey',
  phCharLength: 1,
  size: 'medium',
};

export default CmtAvatar;
