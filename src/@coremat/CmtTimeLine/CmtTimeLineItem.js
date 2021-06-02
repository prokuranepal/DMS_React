import React from 'react';
import useStyles from './CmtTimeLineItem.style';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const CmtTimeLineItem = ({ point, pointColor, head, content }) => {
  const classes = useStyles();
  const pointColorStyle = pointColor ? { backgroundColor: pointColor } : {};

  return (
    <Box className={clsx(classes.timelineItem, 'Cmt-timeline-item')}>
      {point ? (
        <Box className={clsx(classes.timelineBadge, 'Cmt-timeline-badge')} style={pointColorStyle}>
          {point}
        </Box>
      ) : (
        <Box component="span" className={clsx(classes.makeDot, 'CmtTimeline-dot')} style={{ backgroundColor: pointColor }} />
      )}
      {content}
      {head ? <Box className={clsx(classes.timelineTime, 'Cmt-timeline-time')}>{head}</Box> : null}
    </Box>
  );
};

CmtTimeLineItem.propTypes = {
  point: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  pointColor: PropTypes.string,
  head: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
};

export default CmtTimeLineItem;
