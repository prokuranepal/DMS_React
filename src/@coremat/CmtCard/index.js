import React, { Children, cloneElement, isValidElement, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import { getBackgroundStyle, getOverLayStyle } from '../CmtHelpers/JssHelper';
import { Box } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    '& .Cmt-card-content': {
      position: 'relative',
      zIndex: 1,
    },
  },
  cardOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
}));

const CmtCard = ({ backgroundColor, backgroundImage, gradientDirection, overlay, className, children, ...cardProps }) => {
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
      className={clsx(classes.root, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={backgroundStyles}
      {...cardProps}>
      {childrenWithProps}
      {overlay.colors && <Box className={classes.cardOverlay} style={overlayStyles} />}
    </Card>
  );
};

CmtCard.propTypes = {
  backgroundColor: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  backgroundImage: PropTypes.string,
  gradientDirection: PropTypes.string,
  overlay: PropTypes.object,
};

CmtCard.defaultProps = {
  overlay: { colors: '', opacity: 0, direction: '' },
};

export default CmtCard;
