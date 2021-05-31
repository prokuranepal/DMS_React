import React from 'react';
import { array, boolean, number, object, text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { actions } from '@storybook/addon-actions';
import DummyItem from './DummyItem';
import GridEmptyResult from './GridEmptyResult';
import CmtGridPagination from './CmtGridPagination';

export default {
  title: 'CmtGridPagination',
  component: CmtGridPagination,
  decorators: [withKnobs, withA11y],
};
const renderRow = item => {
  return <DummyItem key={'key-' + item} item={item} />;
};

const events = actions('onEndReached', 'onPageChange');
export const Default = () => (
  <CmtGridPagination
    paginationProps={object('paginationProps', { page: 1, count: 5 })}
    position={text('position', 'left')}
    border={boolean('border', false)}
    itemPadding={number('padding', 10)}
    ListEmptyComponent={
      <GridEmptyResult
        loader={boolean('loader', true)}
        title={text('title', 'Container Title')}
        content={text('content', 'Container content')}
        actionTitle={text('actionTitle', 'Action Title')}
      />
    }
    data={array('data', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])}
    renderRow={renderRow}
    {...events}
  />
);
export const EmptyList = () => (
  <CmtGridPagination
    paginationProps={object('paginationProps', { page: 1, count: 5 })}
    data={array('data', [])}
    itemPadding={number('padding', 10)}
    position={text('position', 'left')}
    ListEmptyComponent={
      <GridEmptyResult
        loader={boolean('loader', false)}
        title={text('title', 'Container Title')}
        content={text('content', 'Container content')}
        actionTitle={text('actionTitle', 'Action Title')}
      />
    }
    renderRow={renderRow}
    border={boolean('border', true)}
    {...events}
  />
);
