import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import CmtContentHead from '../CmtTypography/CmtContentHead';
import useStyles from './CmtAdvCardContent.style';
import clsx from 'clsx';
import { getBackgroundStyle, getOverLayStyle } from '../CmtHelpers/JssHelper';

const CmtAdvCardContent = ({
  icon,
  avatar,
  title,
  titleProps,
  subTitle,
  subTitleProps,
  extraContent,
  backgroundColor,
  backgroundImage,
  gradientDirection,
  overlay,
  columnSizes,
  alignCenter,
  reverseDir,
  children,
  className,
  ...rest
}) => {
  const backgroundStyles = getBackgroundStyle(backgroundColor, backgroundImage, gradientDirection);
  const overlayStyles = getOverLayStyle(overlay);

  const classes = useStyles({ overlayStyles, backgroundStyles, alignCenter });
  const alignCenterClass = alignCenter ? classes.alignCenter : {};
  const blockClasses = reverseDir ? [classes.gridOrder1, classes.gridOrder2] : [classes.gridOrder2, classes.gridOrder1];
  const [blockFirst, blockSecond] = blockClasses;

  let extraContentRender = null;
  if (extraContent) {
    extraContentRender = typeof extraContent === 'function' ? extraContent() : extraContent;
  }

  return (
    <Box className={clsx(classes.advCardContent, 'Cmt-card-content', 'CmtAdvCard-Content', className)} {...rest}>
      {extraContentRender || icon || avatar || title || subTitle ? (
        <Grid container spacing={6}>
          <Grid
            item
            xs={alignCenter ? 12 : 12}
            sm={alignCenter ? 12 : columnSizes[0] === 12 ? 12 : 6}
            md={alignCenter ? 12 : columnSizes[0]}
            className={clsx(blockFirst, alignCenterClass)}>
            <Box>
              <CmtContentHead
                icon={icon}
                avatar={avatar}
                title={title}
                titleProps={titleProps}
                subTitle={subTitle}
                subTitleProps={subTitleProps}
              />
            </Box>
            {extraContentRender && <Box>{extraContentRender}</Box>}
          </Grid>
          {children && (
            <Grid
              item
              xs={alignCenter ? 12 : columnSizes[1] === 0 ? 0 : 12}
              sm={alignCenter ? 12 : columnSizes[1] === 0 ? 0 : 6}
              md={alignCenter ? 12 : columnSizes[1]}
              className={blockSecond}>
              <Box width={1}>{children}</Box>
            </Grid>
          )}
        </Grid>
      ) : (
        <Grid container spacing={6}>
          <Grid item xs={12} md={12}>
            <Box width={1}>{children}</Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

CmtAdvCardContent.propTypes = {
  icon: PropTypes.element,
  avatar: PropTypes.element,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleProps: PropTypes.object,
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subTitleProps: PropTypes.object,
  extraContent: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  backgroundColor: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  backgroundImage: PropTypes.string,
  gradientDirection: PropTypes.string,
  overlay: PropTypes.object,
  reverseDir: PropTypes.bool,
  columnSizes: PropTypes.array,
  alignCenter: PropTypes.bool,
  className: PropTypes.string,
};

CmtAdvCardContent.defaultProps = {
  title: '',
  subTitle: '',
  overlay: { colors: '', opacity: 0, direction: '' },
  reverseDir: false,
  columnSizes: [6, 6],
  alignCenter: false,
  className: '',
};

export default CmtAdvCardContent;
