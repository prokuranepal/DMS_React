import React, { useContext, useImperativeHandle } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LayoutContext from './LayoutContext/LayoutContext';

const SidebarToggleHandler = React.forwardRef(function SidebarToggleHandler(props, ref) {
  const { isOpen, setOpen } = useContext(LayoutContext);

  useImperativeHandle(ref, () => ({
    isOpen: isOpen,
  }));

  const contentRef = React.createRef();

  return (
    <IconButton className="Cmt-toggle-menu" ref={contentRef} onClick={() => setOpen(!isOpen)} {...props}>
      <MenuIcon />
    </IconButton>
  );
});

export default SidebarToggleHandler;
