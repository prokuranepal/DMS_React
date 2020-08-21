import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IntlMessages from '../../util/IntlMessages';

export const options = [
  // <IntlMessages id="popup.updateData"/>,
  // <IntlMessages id="popup.detailedLog"/>,
  // <IntlMessages id="popup.statistics"/>,
  // <IntlMessages id="popup.clearData"/>
  "Update Data",
  "Detailed Log"
];
const CardMenu = (props) => {

  const {menuState, anchorEl, handleRequestClose} = props;
  return (
    <Menu id="long-menu" data-test="Menu-component"
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
        <MenuItem key={option} data-tests={option} onClick={() => handleRequestClose(option)} data-test="MenuItem-component">
          {option}
        </MenuItem>,
      )}
    </Menu>
  );
};

export default CardMenu;