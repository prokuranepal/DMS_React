import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './CmtTimelineContent.style';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const CmtTimelineContent = ({ children, isWrapper }) => {
  const classes = useStyles();

  return isWrapper ? (
    <Box className={clsx(classes.timelineCard, 'Cmt-timeline-root')}>
      <Box className="Cmt-timeline-root-inner">{children}</Box>
    </Box>
  ) : (
    <Box className="Cmt-timeline-root-inner">{children}</Box>
  );
};

CmtTimelineContent.propTypes = {
  isWrapper: PropTypes.bool,
};

CmtTimelineContent.defaultProps = {
  isWrapper: false,
};

export default CmtTimelineContent;
