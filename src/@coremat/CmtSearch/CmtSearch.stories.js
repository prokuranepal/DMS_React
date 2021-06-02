import React from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import CmtSearch from './index';

export default {
  component: CmtSearch,
  title: 'CmtSearch',
  decorators: [withKnobs, withA11y],
};

export const Default = () => (
  <CmtSearch
    onlyIcon={boolean('onlyIcon', false)}
    iconPosition={text('iconPosition', 'left')}
    align={text('align', 'left')}
  />
);
