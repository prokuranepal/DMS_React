import React from 'react';
import { array, boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { actions } from '@storybook/addon-actions';
import DummyItem from './DummyItem';
import ListEmptyResult from './ListEmptyResult';
import CmtListPagination from './CmtListPagination';

export default {
  title: 'CmtListPagination',
  component: CmtListPagination,
  decorators: [withKnobs, withA11y],
};
const renderRow = item => {
  return <DummyItem key={'key-' + item} item={item} />;
};

const events = actions('onEndReached', 'onPageChange');
export const Default = () => (
  <CmtListPagination
    paginationProps={object('paginationProps', { page: 1, count: 5 })}
    position={text('position', 'left')}
    ListEmptyComponent={
      <ListEmptyResult
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
  <CmtListPagination
    paginationProps={object('paginationProps', { page: 1, count: 5 })}
    data={array('data', [])}
    position={text('position', 'left')}
    ListEmptyComponent={
      <ListEmptyResult
        loader={boolean('loader', false)}
        title={text('title', 'Container Title')}
        content={text('content', 'Container content')}
        actionTitle={text('actionTitle', 'Action Title')}
      />
    }
    renderRow={renderRow}
    {...events}
  />
);
