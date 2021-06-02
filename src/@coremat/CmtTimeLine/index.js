import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './CmtTimeLine.style';
import clsx from 'clsx';

const CmtTimeLine = ({ children, align }) => {
  const classes = useStyles();
  return <Box className={clsx(classes.timelineRoot, 'Cmt-timeline-root', align)}>{children}</Box>;
};

export default CmtTimeLine;

CmtTimeLine.defaultProps = {
  align: 'right', //left, right, center, zigzag
};
