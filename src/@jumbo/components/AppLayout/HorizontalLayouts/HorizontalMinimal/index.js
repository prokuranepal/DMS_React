import React, { useContext } from 'react';
import clsx from 'clsx';
import SideBar from '../../partials/SideBar';
import CmtHorizontalLayout from '../../../../../@coremat/CmtLayouts/Horizontal';
import CmtHeaderNav from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderNav';
import CmtHeaderMain from '../../../../../@coremat/CmtLayouts/Horizontal/Header/HeaderMain';
import HeaderLogin from '../../partials/Header/HeaderLogin';
import ContentLoader from '../../../ContentLoader';
import CmtHeader from '../../../../../@coremat/CmtLayouts/Horizontal/Header';
import CmtSidebar from '../../../../../@coremat/CmtLayouts/Horizontal/Sidebar';
import CmtContent from '../../../../../@coremat/CmtLayouts/Horizontal/Content';
import MainHeader from './MainHeader';
import useStyles from './index.style';
import AppContext from '../../../contextProvider/AppContextProvider/AppContext';
import CmtFooter from '../../../../../@coremat/CmtLayouts/Horizontal/Footer';
import Footer from '../../partials/Footer';

const HorizontalMinimal = ({ className, children }) => {
  const classes = useStyles();
  const { drawerBreakPoint, sidebarSize, sidebarStyle, showFooter } = useContext(AppContext);

  return (
    <CmtHorizontalLayout drawerBreakPoint={drawerBreakPoint} className={clsx('Cmt-horizontalMinimalLayout', className)}>
      <CmtHeader className={classes.appHeaderDark}>
        <CmtHeaderNav>
          <HeaderLogin />
        </CmtHeaderNav>
        <CmtHeaderMain>
          <MainHeader />
        </CmtHeaderMain>
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

export default HorizontalMinimal;
