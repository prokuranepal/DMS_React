import React, { useContext, useState } from 'react';
import AppContext from '../../../contextProvider/AppContextProvider/AppContext';
import CmtVerticalLayout from '../../../../../@coremat/CmtLayouts/Vertical';
import CmtSidebar from '../../../../../@coremat/CmtLayouts/Vertical/Sidebar';
import SideBar from '../../partials/SideBar';
import CmtContent from '../../../../../@coremat/CmtLayouts/Vertical/Content';
import ContentLoader from '../../../ContentLoader';
import ActionSideBar from './ActionSideBar';
import Logo from '../../partials/Logo';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';
import { SIDEBAR_TYPE } from '../../../../constants/ThemeOptions';

const useStyles = makeStyles(theme => ({
  sidebarHeader: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px',
      height: 72,
    },
  },
}));

const ModernSideBar = ({ children, className }) => {
  const classes = useStyles();
  const { drawerBreakPoint, sidebarSize, sidebarStyle } = useContext(AppContext);
  const [sidebarWidth, setSidebarWidth] = useState(sidebarSize);

  return (
    <CmtVerticalLayout
      drawerBreakPoint={drawerBreakPoint}
      className={clsx('Cmt-modernLayout', className)}
      sidebarWidth={sidebarWidth > 0 ? sidebarSize : sidebarWidth}>
      <CmtSidebar
        type={SIDEBAR_TYPE.FULL}
        isSidebarFixed={true}
        actionBar={<ActionSideBar setSidebarWidth={setSidebarWidth} />}
        {...sidebarStyle}>
        <Hidden mdDown>
          <Logo className={classes.sidebarHeader} />
        </Hidden>
        <SideBar />
      </CmtSidebar>
      <CmtContent>
        {children}
        <ContentLoader />
      </CmtContent>
    </CmtVerticalLayout>
  );
};

export default ModernSideBar;
