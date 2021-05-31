import React, { useContext } from 'react';
import SideBar from '../../partials/SideBar';
import CmtHorizontalLayout from '../../../../../@coremat/CmtLayouts/Horizontal';
import CmtHeaderNav from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderNav';
import CmtHeaderTop from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderTop';
import CmtHeaderMain from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderMain';
import HeaderLogin from '../../partials/Header/HeaderLogin';
import HeaderTop from '../../partials/Header/HeaderTop';
import CmtHeader from '../../../../../@coremat/CmtLayouts/Horizontal/Header';
import CmtSidebar from '../../../../../@coremat/CmtLayouts/Horizontal/Sidebar';
import ContentLoader from '../../../ContentLoader';
import CmtContent from '../../../../../@coremat/CmtLayouts/Horizontal/Content';
import Hidden from '@material-ui/core/Hidden';
import HeaderMenus from './HeaderMenus';
import clsx from 'clsx';
import AppContext from '../../../contextProvider/AppContextProvider/AppContext';
import CmtFooter from '../../../../../@coremat/CmtLayouts/Horizontal/Footer';
import Footer from '../../partials/Footer';

const HorizontalDefault = ({ className, children }) => {
  const { drawerBreakPoint, sidebarSize, sidebarStyle, showFooter } = useContext(AppContext);

  return (
    <CmtHorizontalLayout drawerBreakPoint={drawerBreakPoint} className={clsx('Cmt-horizontalDefaultLayout', className)}>
      <CmtHeader>
        <CmtHeaderNav>
          <HeaderLogin />
        </CmtHeaderNav>
        <CmtHeaderTop>
          <HeaderTop />
        </CmtHeaderTop>
        <Hidden mdDown>
          <CmtHeaderMain bgcolor="primary.main" color="white">
            <HeaderMenus />
          </CmtHeaderMain>
        </Hidden>
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

export default HorizontalDefault;
