import React from 'react';
import PropTypes from 'prop-types';
import LayoutContextProvider from './LayoutContext';
import MainContainer from './MainContainer';

const CmtVerticalLayout = ({ miniSidebarWidth, sidebarWidth, drawerBreakPoint, actionSidebarWidth, ...restProps }) => {
  return (
    <LayoutContextProvider>
      <MainContainer
        miniSidebarWidth={miniSidebarWidth}
        sidebarWidth={sidebarWidth}
        actionSidebarWidth={actionSidebarWidth}
        drawerBreakPoint={drawerBreakPoint}
        {...restProps}
      />
    </LayoutContextProvider>
  );
};

CmtVerticalLayout.prototype = {
  miniSidebarWidth: PropTypes.number,
  sidebarWidth: PropTypes.number,
  drawerBreakPoint: PropTypes.oneOf(['xs', 'sm', 'md']),
};

CmtVerticalLayout.defaultProps = {
  sidebarWidth: 304,
  miniSidebarWidth: 80,
  drawerBreakPoint: 'sm',
  actionSidebarWidth: 72,
};

export default CmtVerticalLayout;
