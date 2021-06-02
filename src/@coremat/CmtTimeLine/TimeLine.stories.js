import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import data from './data';
import CmtTimeLine from './index';
import CmtTimeLineItem from './CmtTimeLineItem';
import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CmtTimelineContent from './CmtTimelineContent';

export default {
  title: 'CmtTimeLine',
  component: CmtTimeLine,
  decorators: [withKnobs, withA11y],
};

export const TimeLineLeft = () => (
  <CmtTimeLine align={text('align', 'left')}>
    {data.map(data => (
      <CmtTimeLineItem
        head={
          <Box>
            <Avatar src="https://via.placeholder.com/150" />
            <Box component="p" mb={0} mt={2}>
              {data.time}
            </Box>
          </Box>
        }
        point={<img src={require('./pentagon.png')} />}
        content={
          <CmtTimelineContent isWrapper={true}>
            <Box component="h2" fontSize={20} mt={0} mb={3}>
              {data.title}
            </Box>
            <Box component="p" mt={0}>
              {data.description}
            </Box>
          </CmtTimelineContent>
        }
      />
    ))}
  </CmtTimeLine>
);
export const TimeLineRight = () => (
  <CmtTimeLine align={text('align', 'right')}>
    {data.map(data => (
      <CmtTimeLineItem
        head={
          <Box>
            <Avatar src="https://via.placeholder.com/150" />
            <Box component="p" mb={0} mt={2}>
              {data.time}
            </Box>
          </Box>
        }
        point={<img src={require('./pentagon.png')} />}
        content={
          <CmtTimelineContent isWrapper={true}>
            <Box component="h2" fontSize={20} mt={0} mb={3}>
              {data.title}
            </Box>
            <Box component="p" mt={0}>
              {data.description}
            </Box>
          </CmtTimelineContent>
        }
      />
    ))}
  </CmtTimeLine>
);
export const TimeLineCenter = () => (
  <CmtTimeLine align={text('align', 'center')}>
    {data.map(data => (
      <CmtTimeLineItem
        head={
          <Box>
            <Avatar src="https://via.placeholder.com/150" />
            <Box component="p" mb={0} mt={2}>
              {data.time}
            </Box>
          </Box>
        }
        point={<img src={require('./pentagon.png')} />}
        content={
          <CmtTimelineContent isWrapper={true}>
            <Box component="h2" fontSize={20} mt={0} mb={3}>
              {data.title}
            </Box>
            <Box component="p" mt={0}>
              {data.description}
            </Box>
          </CmtTimelineContent>
        }
      />
    ))}
  </CmtTimeLine>
);
export const TimeLineZigzag = () => (
  <CmtTimeLine align={text('align', 'zigzag')}>
    {data.map(data => (
      <CmtTimeLineItem
        head={
          <Box>
            <Avatar src="https://via.placeholder.com/150" />
            <Box component="p" mb={0} mt={2}>
              {data.time}
            </Box>
          </Box>
        }
        point={<img src={require('./pentagon.png')} />}
        content={
          <CmtTimelineContent isWrapper={true}>
            <Box component="h2" fontSize={20} mt={0} mb={3}>
              {data.title}
            </Box>
            <Box component="p" mt={0}>
              {data.description}
            </Box>
          </CmtTimelineContent>
        }
      />
    ))}
  </CmtTimeLine>
);
