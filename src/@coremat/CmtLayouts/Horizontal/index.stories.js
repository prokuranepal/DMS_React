import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import CmtSidebar from './Sidebar';
import CmtContent from './Content';
import SidebarToggleHandler from './SidebarToggleHandler';
import SidebarContent from '../../data-and-content/SidebarContent';
import Box from '@material-ui/core/Box';
import CmtHeader from './Header';
import CmtHeaderNav from './Header/HeaderNav';
import CmtHeaderTop from './Header/HeaderTop';
import CmtHeaderMain from './Header/HeaderMain';
import CmtHorizontalLayout from './index';

export default {
  title: 'HorizontalLayout',
  component: CmtHorizontalLayout,
  decorators: [withKnobs, withA11y],
};

export const Default = () => (
  <CmtHorizontalLayout drawerBreakPoint={select('drawerBreakPoint', ['xs', 'sm', 'md'], 'md', 'groupId4')}>
    <CmtHeader>
      <CmtHeaderNav bgcolor="warning.main" color="white">
        <Box>HeaderNav</Box>
      </CmtHeaderNav>
      <CmtHeaderTop bgcolor="secondary.main" color="white">
        <Box>HeaderTop</Box>
      </CmtHeaderTop>
      <CmtHeaderMain bgcolor="primary.main" color="white">
        <SidebarToggleHandler edge="start" color="inherit" aria-label="menu" />
        <Box>HeaderMain</Box>
      </CmtHeaderMain>
    </CmtHeader>
    <CmtSidebar>
      <SidebarContent />
    </CmtSidebar>
    <CmtContent>
      <Box> Content Area</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box mb={3}>Hello Team</Box>
      <Box>Hello Team</Box>
    </CmtContent>
  </CmtHorizontalLayout>
);
