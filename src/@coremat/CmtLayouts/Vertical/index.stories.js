import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import CmtHeader from './Header';
import Toolbar from '@material-ui/core/Toolbar';
import CmtSidebar from './Sidebar';
import CmtContent from './Content';
import CmtVerticalLayout from './index';
import SidebarToggleHandler from './SidebarToggleHandler';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SidebarContent from '../../data-and-content/SidebarContent';
import Box from '@material-ui/core/Box';
import { select, boolean } from '@storybook/addon-knobs';

export default {
  title: 'CmtVerticalLayout',
  component: CmtVerticalLayout,
  decorators: [withKnobs, withA11y],
};

export const Default = () => (
  <CmtVerticalLayout drawerBreakPoint={select('type', ['xs', 'sm', 'md'], 'sm', 'drawerBreakPoint')}>
    <CmtHeader
      type={select('type', ['fixed', 'static'], 'fixed', 'LayoutHeader')}
      fullHeader={boolean('fullHeader', false, 'fullHeader')}>
      <Toolbar>
        <SidebarToggleHandler edge="start" color="inherit" aria-label="menu" />
        <Typography variant="h6">News</Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </CmtHeader>
    <CmtSidebar type={select('type', ['full', 'mini', 'drawer'], 'full', 'LayoutSidebar')}>
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
  </CmtVerticalLayout>
);
