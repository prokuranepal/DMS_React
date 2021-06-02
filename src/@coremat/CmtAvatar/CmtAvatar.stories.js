import React from 'react';
import { number, select, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import CmtAvatar from './';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default {
  component: CmtAvatar,
  title: 'Cmt Avatar',
  decorators: [withKnobs, withA11y],
};

const colorOptions = [
  'amber',
  'brown',
  'orange',
  'purple',
  'primary',
  'red',
  'green',
  'blue',
  'grey',
  'yellow',
  'secondary',
  'random',
];
const imageUrl = 'https://material-ui.com/static/images/avatar/2.jpg';
export const Default = () => (
  <React.Fragment>
    <CmtAvatar src={imageUrl} alt="avatar" />
    <CmtAvatar color="primary">NP</CmtAvatar>
    <CmtAvatar color="primary">
      <FavoriteIcon />
    </CmtAvatar>
    <CmtAvatar />
  </React.Fragment>
);
export const WithColor = () => <CmtAvatar color={select('Color', colorOptions, 'random')} />;
export const WithIcon = () => (
  <CmtAvatar color={select('Color', colorOptions, 'random')}>
    <FavoriteIcon />
  </CmtAvatar>
);
export const WithSize = () => <CmtAvatar size={select('Size', ['small', 'medium', 'large'], 'medium')} />;
export const WithCustomSize = () => <CmtAvatar size={number('Size', 50)} />;
