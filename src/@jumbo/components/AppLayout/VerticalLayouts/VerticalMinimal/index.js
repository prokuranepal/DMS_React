import React, { useContext } from 'react';
import AppContext from '../../../contextProvider/AppContextProvider/AppContext';
import CmtVerticalLayout from '../../../../../@coremat/CmtLayouts/Vertical';
import CmtHeader from '../../../../../@coremat/CmtLayouts/Vertical/Header';
import Header from '../../partials/Header';
import CmtSidebar from '../../../../../@coremat/CmtLayouts/Vertical/Sidebar';
import SidebarHeader from '../../partials/SidebarHeader';
import SideBar from '../../partials/SideBar';
import CmtContent from '../../../../../@coremat/CmtLayouts/Vertical/Content';
import ContentLoader from '../../../ContentLoader';
import { SIDEBAR_TYPE } from '../../../../constants/ThemeOptions';
import clsx from 'clsx';
import CmtFooter from '../../../../../@coremat/CmtLayouts/Vertical/Footer';
import Footer from '../../partials/Footer';

const VerticalMinimal = ({ className, children }) => {
  const { drawerBreakPoint, headerType, isSidebarFixed, sidebarStyle, sidebarSize, showFooter } = useContext(AppContext);

  return (
    <CmtVerticalLayout
      drawerBreakPoint={drawerBreakPoint}
      sidebarWidth={sidebarSize}
      className={clsx('verticalMinimalLayout', className)}>
      <CmtHeader type={headerType}>
        <Header />
      </CmtHeader>
      <CmtSidebar type={SIDEBAR_TYPE.MINI} isSidebarFixed={isSidebarFixed} {...sidebarStyle}>
        <SidebarHeader />
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
    </CmtVerticalLayout>
  );
};

export default VerticalMinimal;
