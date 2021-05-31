import React, { useContext } from 'react';
import AppContext from '../../../contextProvider/AppContextProvider/AppContext';
import SideBar from '../../partials/SideBar';
import CmtHorizontalLayout from '../../../../../@coremat/CmtLayouts/Horizontal';
import CmtHeaderNav from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderNav';
import CmtHeaderTop from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderTop';
import CmtHeaderMain from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderMain';
import HeaderLogin from '../../partials/Header/HeaderLogin';
import ContentLoader from '../../../ContentLoader';
import CmtHeader from '../../../../../@coremat/CmtLayouts/Horizontal/Header';
import CmtSidebar from '../../../../../@coremat/CmtLayouts/Horizontal/Sidebar';
import CmtContent from '../../../../../@coremat/CmtLayouts/Horizontal/Content';
import HeaderMain from './HeaderMain';
import HeaderTopMenus from './HeaderTopMenus';
import Hidden from '@material-ui/core/Hidden';
import useStyles from './index.style';
import clsx from 'clsx';
import CmtFooter from '../../../../../@coremat/CmtLayouts/Horizontal/Footer';
import Footer from '../../partials/Footer';

const HorizontalTopMenu = ({ className, children }) => {
  const classes = useStyles();
  const { drawerBreakPoint, sidebarSize, sidebarStyle, showFooter } = useContext(AppContext);

  return (
    <CmtHorizontalLayout drawerBreakPoint={drawerBreakPoint} className={clsx('Cmt-horizontalTopMenuLayout', className)}>
      <CmtHeader className={classes.appHeaderDark}>
        <Hidden mdDown>
          <CmtHeaderMain>
            <HeaderTopMenus />
          </CmtHeaderMain>
        </Hidden>
        <CmtHeaderNav>
          <HeaderLogin />
        </CmtHeaderNav>
        <CmtHeaderTop>
          <HeaderMain />
        </CmtHeaderTop>
      </CmtHeader>
      <CmtSidebar sidebarWidth={sidebarSize} {...sidebarStyle}>
        <SideBar />
      </CmtSidebar>
      <CmtContent>
        {children}
        <ContentLoader />
      </CmtContent>
      {showFooter && (
        <CmtFooter type="static">
          <Footer />
        </CmtFooter>
      )}
    </CmtHorizontalLayout>
  );
};

export default HorizontalTopMenu;
