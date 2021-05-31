import React from 'react';
import { array, boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { actions } from '@storybook/addon-actions';
import DummyItem from './DummyItem';
import ListEmptyResult from './ListEmptyResult';
import CmtList from './index';

export default {
  title: 'CmtList',
  component: CmtList,
  decorators: [withKnobs, withA11y],
};
const renderRow = item => {
  return <DummyItem key={'key-' + item} item={item} />;
};

const events = actions('onEndReached', 'onClick');
export const Default = () => (
  <CmtList
    data={array('data', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])}
    renderRow={renderRow}
    {...events}
  />
);
export const EmptyList = () => (
  <CmtList
    data={array('data', [])}
    renderRow={renderRow}
    {...events}
    ListEmptyComponent={
      <ListEmptyResult
        loader={boolean('loader', false)}
        title={text('title', 'Container Title')}
        content={text('content', 'Container content')}
        actionTitle={text('actionTitle', 'Action Title')}
      />
    }
  />
);

export const ListWithFooter = () => (
  <CmtList
    data={array('data', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19])}
    renderRow={renderRow}
    {...events}
    ListEmptyComponent={
      <ListEmptyResult
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
