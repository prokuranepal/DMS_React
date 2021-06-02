import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { actions } from '@storybook/addon-actions';
import CmtGroupList from './index';

const tasks = [
  {
    title: "Write the documentation for Cmt's new features",
    status: 'completed',
  },
  {
    title: 'Write REST API doc for MediFellows',
    status: 'not-started',
  },
  {
    title: 'Prepare a checklist for the release',
    status: 'completed',
  },
  {
    title: 'Talk to the potential customer',
    status: 'completed',
  },
  {
    title: 'Build a component to showcase a group listing',
    status: 'in-progress',
  },
  {
    title: 'Run a full test throughout the app',
    status: 'not-started',
  },
  {
    title: 'Prepare test cases for the payment module',
    status: 'in-progress',
  },
  {
    title: 'Perform a unit testing on subscription module',
    status: 'completed',
  },
];

export default {
  title: 'CmtGroupList',
  component: CmtGroupList,
  decorators: [withKnobs, withA11y],
};

const groupIdentifier = dataItem => {
  return { id: dataItem.status, label: dataItem.status.toUpperCase() };
};

const renderHeader = group => {
  return <h3>{group.label}</h3>;
};

const renderItem = item => {
  return (
    <p>
      {item.title} : ({item.status})
    </p>
  );
};

const events = actions('onEndReached', 'onPageChange');
export const Default = () => (
  <CmtGroupList
    data={tasks}
    renderItem={renderItem}
    renderHeader={renderHeader}
    groupIdentifier={groupIdentifier}
    {...events}
  />
);

export const DefaultWithGrid = () => (
  <CmtGroupList
    data={tasks}
    isGrid
    renderItem={renderItem}
    renderHeader={renderHeader}
    groupIdentifier={groupIdentifier}
    {...events}
  />
);

export const ExpandableWithList = () => (
  <CmtGroupList
    data={tasks}
    isExpandable
    renderItem={renderItem}
    renderHeader={renderHeader}
    groupIdentifier={groupIdentifier}
    {...events}
  />
);

export const ExpandableWithGrid = () => (
  <CmtGroupList
    data={tasks}
    isExpandable
    isGrid
    renderItem={renderItem}
    renderHeader={renderHeader}
    groupIdentifier={groupIdentifier}
    {...events}
  />
);
