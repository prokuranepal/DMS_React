import React, { isValidElement } from 'react';
import { Fab, makeStyles, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  media: {
    position: 'relative',
    zIndex: 2,
    height: 0,
    paddingTop: '56.25%', // 16:9
    '&.Cmt-media-children': {
      height: 'auto',
      minHeight: 150,
      paddingTop: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '& $mediaTitle': {
        position: 'relative',
        bottom: 'auto',
        left: 'auto',
      },
    },
  },
  mediaTitle: {
    fontSize: 24,
    fontWeight: 300,
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 16,
    maxWidth: '100%',
  },
  fabButton: {
    cursor: 'pointer',
    position: 'absolute',
    right: theme.spacing(4),
    zIndex: 1,
  },
  smallSizeFabButton: {
    height: 40,
    width: 40,
    bottom: -20,
  },
  mediumSizeFabButton: {
    height: 48,
    width: 48,
    bottom: -24,
  },
  largeSizeFabButton: {
    height: 56,
    width: 56,
    bottom: -28,
  },
}));

const RenderFabButton = ({ fabButton }) => {
  const classes = useStyles();

  if (!fabButton) return null;
  if (isValidElement(fabButton)) return fabButton;

  const { icon, size, ...rest } = fabButton;
  const btnSize = size ? size : 'small';

  return icon ? (
    <Fab className={clsx(classes.fabButton, 'fab-button', classes[`${btnSize}SizeFabButton`])} color="secondary" {...rest}>
      {icon}
    </Fab>
  ) : null;
};

const CmtCardMedia = ({ cardTitle, cardTitleProps, fabButton, className, children, ...rest }) => {
  const classes = useStyles();

  return (
    <CardMedia
      className={clsx(classes.media, children ? 'Cmt-media-children' : '', className, 'Cmt-card-media')}
      children={
        <React.Fragment>
          {cardTitle && (
            <Typography component="h3" className={clsx(classes.mediaTitle)} color="primary" {...cardTitleProps}>
              {cardTitle}
            </Typography>
          )}
          {<RenderFabButton fabButton={fabButton} />}
          {children}
        </React.Fragment>
      }
      {...rest}
    />
  );
};

CmtCardMedia.propTypes = {
  cardTitle: PropTypes.string,
  cardTitleProps: PropTypes.object,
  fabButton: PropTypes.oneOfType([PropTypes.object, PropTypes.node]),
  className: PropTypes.string,
};

CmtCardMedia.defaultProps = {
  cardTitleProps: {},
  fabButton: null,
};

export default CmtCardMedia;
