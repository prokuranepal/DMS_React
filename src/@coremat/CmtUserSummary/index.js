import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

import CmtContentHead from '../CmtTypography/CmtContentHead';
import CmtAvatar from '../CmtAvatar';

const CmtUserSummary = ({ avatar, title, subTitle, titleProps, subTitleProps, ...restProps }) => {
  return (
    <Box {...restProps}>
      {avatar && (
        <Box>
          <CmtAvatar {...avatar} />
        </Box>
      )}
      {title && <CmtContentHead title={title} subTitle={subTitle} titleProps={titleProps} subTitleProps={subTitleProps} />}
    </Box>
  );
};

CmtUserSummary.propTypes = {
  avatar: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleProps: PropTypes.object,
  subTitleProps: PropTypes.object,
};

CmtUserSummary.defaultProps = {
  titleProps: {},
  subTitleProps: {},
};

export default CmtUserSummary;
