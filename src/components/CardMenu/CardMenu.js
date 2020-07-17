import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IntlMessages from '../../util/IntlMessages';

const CardMenu = (props) => {

  const options = [
    // <IntlMessages id="popup.updateData"/>,
    // <IntlMessages id="popup.detailedLog"/>,
    // <IntlMessages id="popup.statistics"/>,
    // <IntlMessages id="popup.clearData"/>
    "Update Data",
    "Detailed Log"
  ];
  const {menuState, anchorEl, handleRequestClose} = props;
  return (
    <Menu id="long-menu"
          anchorEl={anchorEl}
          open={menuState}
          onClose={handleRequestClose}

          MenuListProps={{
            style: {
              width: 150,
              paddingTop: 0,
              paddingBottom: 0
            },
          }}>
      {options.map(option =>
        <MenuItem key={option} onClick={() => handleRequestClose(option)}>
          {option}
        </MenuItem>,
      )}
    </Menu>
  );
};

export default CardMenu;