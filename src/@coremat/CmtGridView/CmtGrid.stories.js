import React from 'react';
import { array, boolean, number, object, text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { actions } from '@storybook/addon-actions';
import DummyItem from './DummyItem';
import GridEmptyResult from './GridEmptyResult';
import CmtGridView from './index';

export default {
  title: 'CmtGridView',
  component: CmtGridView,
  decorators: [withKnobs, withA11y],
};

const renderRow = item => {
  return <DummyItem key={'key-' + item} item={item} />;
};

const events = actions('onEndReached', 'onClick');
export const Default = () => (
  <CmtGridView
    border={boolean('border', false)}
    responsive={object('responsive', {
      xs: 1,
      sm: 2,
      md: 2,
      lg: 4,
      xl: 3,
    })}
    itemPadding={number('padding', 10)}
    column={number('column', 3)}
    data={array('data', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])}
    renderRow={renderRow}
    {...events}
  />
);
export const EmptyGrid = () => (
  <CmtGridView
    data={array('data', [])}
    column={number('column', 3)}
    itemPadding={number('padding', 10)}
    renderRow={renderRow}
    border={boolean('border', true)}
    {...events}
    ListEmptyComponent={
      <GridEmptyResult
        loader={boolean('loader', false)}
        title={text('title', 'Container Title')}
        content={text('content', 'Container content')}
        actionTitle={text('actionTitle', 'Action Title')}
      />
    }
  />
);
export const GridWithFooter = () => (
  <CmtGridView
    data={array('data', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])}
    column={number('column', 3)}
    itemPadding={number('padding', 10)}
    responsive={object('responsive', {
      xs: 1,
      sm: 2,
      md: 2,
      lg: 3,
      xl: 3,
    })}
    renderRow={renderRow}
    border={boolean('border', true)}
    {...events}
    ListEmptyComponent={
      <GridEmptyResult
        loader={boolean('loader', false)}
        title={text('title', 'Container Title')}
        content={text('content', 'Container content')}
        actionTitle={text('actionTitle', 'Action Title')}
      />
    }
    footerProps={object('footerProps', {
      loading: false,
      footerText: 'No more content',
    })}
  />
);
