import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import CmtButtons from './';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default {
  component: CmtButtons,
  title: 'Cmt Buttons',
  decorators: [withKnobs, withA11y],
};

const buttons = [
  { label: 'Album', icon: <MoreVertIcon />, color: 'primary', tooltip: 'Album' },
  { label: 'Movie', icon: <MoreVertIcon />, color: 'red' },
  { label: 'Collage', icon: <MoreVertIcon />, color: 'secondary' },
  { label: 'Album Animation', icon: <MoreVertIcon />, color: 'yellow' },
  { label: 'Album', icon: <MoreVertIcon />, color: 'amber', tooltip: 'Album' },
  { label: 'Movie', icon: <MoreVertIcon />, color: 'brown' },
  { label: 'Collage', icon: <MoreVertIcon />, color: 'green' },
  { label: 'Animation', icon: <MoreVertIcon />, color: 'blue' },
  { label: 'Animation', icon: <MoreVertIcon />, color: 'grey' },
  { label: 'Animation', icon: <MoreVertIcon />, color: 'purple' },
];

export const Default = () => (
  <React.Fragment>
    <CmtButtons items={buttons} variant={'contained'} color={'primary'} />
    <CmtButtons items={buttons} type={'icon-button'} color={'primary'} />
    <CmtButtons items={buttons} type={'icon-button'} color={'primary'} justifyContent="space-between" enableTooltip />
  </React.Fragment>
);
