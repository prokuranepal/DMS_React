import React, { useContext } from 'react';
import { Hidden } from '@material-ui/core';
import clsx from 'clsx';

import AppContext from '../../../contextProvider/AppContextProvider/AppContext';
import CmtVerticalLayout from '../../../../../@coremat/CmtLayouts/Vertical';
import CmtSidebar from '../../../../../@coremat/CmtLayouts/Vertical/Sidebar';
import SidebarHeader from '../../partials/SidebarHeader';
import SideBar from '../../partials/SideBar';
import CmtContent from '../../../../../@coremat/CmtLayouts/Vertical/Content';
import ContentLoader from '../../../ContentLoader';
import Alerts from './Alerts';
import { HEADER_TYPE, SIDEBAR_TYPE } from '../../../../constants/ThemeOptions';
import CmtHeader from '../../../../../@coremat/CmtLayouts/Vertical/Header';
import makeStyles from '@material-ui/core/styles/makeStyles';
import SidebarToggleHandler from '../../../../../@coremat/CmtLayouts/Vertical/SidebarToggleHandler';

const useStyles = makeStyles(theme => ({
  minimalNoHeader: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '& .Cmt-toggle-menu': {
      color: theme.palette.text.primary,
      marginLeft: 15,
    },
  },
}));

const MinimalNoHeader = ({ className, children }) => {
  const classes = useStyles();
  const { drawerBreakPoint, isSidebarFixed, sidebarStyle, sidebarSize } = useContext(AppContext);

  return (
    <CmtVerticalLayout
      drawerBreakPoint={drawerBreakPoint}
      className={clsx('verticalMinimalNoHeaderLayout', className)}
      sidebarWidth={sidebarSize}>
      <CmtHeader className={classes.minimalNoHeader} type={HEADER_TYPE.STATIC}>
        <Hidden lgUp>
          <SidebarToggleHandler edge="start" color="inherit" aria-label="menu" />
        </Hidden>
        <Alerts />
      </CmtHeader>
      <CmtSidebar type={SIDEBAR_TYPE.MINI} isSidebarFixed={isSidebarFixed} {...sidebarStyle}>
        <SidebarHeader />
        <SideBar />
      </CmtSidebar>
      <CmtContent>
        {children}
        <ContentLoader />
      </CmtContent>
    </CmtVerticalLayout>
  );
};

export default MinimalNoHeader;
