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
import CmtFooter from '../../../../../@coremat/CmtLayouts/Vertical/Footer';
import Footer from '../../partials/Footer';
import clsx from 'clsx';

const VerticalDefault = ({ className, children }) => {
  const { drawerBreakPoint, headerType, isSidebarFixed, sidebarType, sidebarStyle, sidebarSize, showFooter } = useContext(
    AppContext,
  );

  return (
    <CmtVerticalLayout
      drawerBreakPoint={drawerBreakPoint}
      className={clsx('verticalDefaultLayout', className)}
      sidebarWidth={sidebarSize}>
      <CmtHeader type={headerType}>
        <Header />
      </CmtHeader>
      <CmtSidebar isSidebarFixed={isSidebarFixed} type={sidebarType} {...sidebarStyle}>
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

export default VerticalDefault;
