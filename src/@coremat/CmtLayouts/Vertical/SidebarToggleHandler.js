import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LayoutContext from './LayoutContext/LayoutContext';

const SidebarToggleHandler = ({ children, ...restProps }) => {
  const { isOpen, setOpen } = useContext(LayoutContext);

  return (
    <IconButton className="Cmt-toggle-menu" onClick={() => setOpen(!isOpen)} {...restProps}>
      {children || <MenuIcon />}
    </IconButton>
  );
};

export default SidebarToggleHandler;
