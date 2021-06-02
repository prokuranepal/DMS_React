import React, { isValidElement } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { CmtSubTitle, CmtTitle } from '../index';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  headRoot: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 15,
  },
  headerContent: {
    flex: 1,
  },
}));

/**
 * @return {null} or CmtContentHead Component
 */
function CmtContentHead({
  icon,
  avatar,
  title,
  titleProps,
  subTitle,
  subTitleProps,
  titleStyle,
  subTitleStyle,
  ...restProps
}) {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.headRoot, 'Cmt-content-head')} {...restProps}>
      {avatar && isValidElement(avatar) ? (
        <Box className={clsx(classes.avatar, 'Cmt-avatar')}>{avatar}</Box>
      ) : (
        icon && <Box className={clsx(classes.avatar, 'Cmt-avatar')}>{icon}</Box>
      )}
      <Box className={clsx(classes.headerContent, 'Cmt-header-content')}>
        {title && <CmtTitle className={clsx(titleStyle, 'Cmt-title')} content={title} {...titleProps} />}

        {subTitle && <CmtSubTitle className={clsx(subTitleStyle, 'Cmt-sub-title')} content={subTitle} {...subTitleProps} />}
      </Box>
    </Box>
  );
}

CmtContentHead.propTypes = {
  icon: PropTypes.element,
  avatar: PropTypes.element,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleProps: PropTypes.object,
  subTitleProps: PropTypes.object,
  titleStyle: PropTypes.string,
  subTitleStyle: PropTypes.string,
};

CmtContentHead.defaultProps = {
  icon: null,
  avatar: null,
  title: null,
  subTitle: null,
  titleStyle: null,
  subTitleStyle: null,
  titleProps: { variant: 'h6', component: 'div' },
  subTitleProps: { variant: 'subtitle2', component: 'p', gutterBottom: false },
};

export default CmtContentHead;
