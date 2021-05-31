import React, { useState } from 'react';
import LayoutContext from './LayoutContext';

const LayoutContextProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <LayoutContext.Provider
      value={{
        isOpen,
        setOpen,
      }}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContextProvider;
