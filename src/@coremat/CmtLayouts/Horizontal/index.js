import React from 'react';
import LayoutContextProvider from './LayoutContext';
import MainContainer from './MainContainer';

const CmtHorizontalLayout = props => {
  return (
    <LayoutContextProvider>
      <MainContainer {...props} />
    </LayoutContextProvider>
  );
};

export default CmtHorizontalLayout;
