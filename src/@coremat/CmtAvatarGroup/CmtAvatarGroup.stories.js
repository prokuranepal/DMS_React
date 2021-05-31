import React from 'react';
import { boolean, color, number, select, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import CmtAvatarGroup from './';
import { actions } from '@storybook/addon-actions';
import { Typography } from '@material-ui/core';
import CmtImage from '../CmtImage';

export default {
  component: CmtAvatarGroup,
  title: 'Cmt Avatar Group',
  decorators: [withKnobs, withA11y],
};

const data = [
  {
    title: 'User One',
    profile_pic: 'https://material-ui.com/static/images/avatar/1.jpg',
  },
  {
    title: 'User One',
    profile_pic: '',
  },
  {
    title: '',
    profile_pic: '',
  },
  {
    title: 'User One',
    profile_pic: 'https://material-ui.com/static/images/avatar/4.jpg',
  },
  {
    title: 'User One',
    profile_pic: 'https://material-ui.com/static/images/avatar/5.jpg',
  },
  {
    title: 'User One',
    profile_pic: 'https://material-ui.com/static/images/avatar/6.jpg',
  },
  {
    title: 'User One',
    profile_pic: 'https://material-ui.com/static/images/avatar/7.jpg',
  },
];

const events = actions('onItemClick', 'onMoreClick', 'renderMore');

export const Default = () => (
  <CmtAvatarGroup
    items={data}
    srcKey="profile_pic"
    spacing={number('Spacing', 10)}
    expandable={boolean('Expandable', false)}
    itemStyle={{
      outlineColor: color('Outline Color', '#fafafa'),
      outlineThickness: number('Outline Thickness', 3),
    }}
    activeItemStyle={{
      outlineColor: color('Active Outline Color', 'blue'),
      outlineThickness: number('Active Outline Thickness', 3),
    }}
    {...events}
  />
);

export const WithTooltip = () => (
  <CmtAvatarGroup
    items={data}
    srcKey="profile_pic"
    spacing={number('Spacing', 10)}
    expandable={boolean('Expandable', false)}
    itemStyle={{
      outlineColor: color('Outline Color', '#fafafa'),
      outlineThickness: number('Outline Thickness', 3),
    }}
    activeItemStyle={{
      outlineColor: color('Active Outline Color', 'blue'),
      outlineThickness: number('Active Outline Thickness', 3),
      elevation: number('Active elevation', 10),
    }}
    moreVisibleOn={select('More Visible On', ['hover', 'click'], 'hover')}
    onItemClick={(item, index) => console.log('onItemClick', item, index)}
    renderMore={restItems => (
      <React.Fragment>
        <Typography color="inherit">Tooltip with HTML</Typography>
        <p>{"It's very engaging. Right?"}</p>
      </React.Fragment>
    )}
    renderItemSummary={(item, index) => (
      <React.Fragment>
        <Typography color="inherit">{item.title}</Typography>
        <p>{"It's very engaging. Right?"}</p>
        <CmtImage src={item.profile_pic} alt={item.title} />
      </React.Fragment>
    )}
  />
);
