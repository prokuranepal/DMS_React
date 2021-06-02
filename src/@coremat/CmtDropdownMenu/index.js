import React, { useState } from 'react';
import { Box, Menu, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const CmtDropdownMenu = ({ TriggerComponent, items, onItemClick }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuItems, setMenuItems] = useState(items);
  const open = Boolean(anchorEl);

  const openMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item, selectedIndex) => {
    let updatedItem = { ...item };

    if (item.onClick && typeof item.onClick === 'function') {
      updatedItem = item.onClick(item);
    } else if (onItemClick && typeof onItemClick === 'function') {
      updatedItem = onItemClick(item);
    }

    setMenuItems(
      menuItems.map((item, index) => {
        if (updatedItem && selectedIndex === index) {
          item = updatedItem;
        }
        return item;
      }),
    );

    closeMenu();
  };

  return (
    <React.Fragment>
      <Box className="pointer">
        <TriggerComponent.type {...TriggerComponent.props} onClick={openMenu} />
      </Box>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={closeMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
        {menuItems.map((item, index) => {
          return (
            <MenuItem key={index} disabled={item.disabled} onClick={() => handleMenuItemClick({ ...item }, index)}>
              {item.icon}
              <Box ml={2}>{item.label}</Box>
            </MenuItem>
          );
        })}
      </Menu>
    </React.Fragment>
  );
};

CmtDropdownMenu.propTypes = {
  items: PropTypes.array.isRequired,
  TriggerComponent: PropTypes.element.isRequired,
  onItemClick: PropTypes.func,
};

export default CmtDropdownMenu;
