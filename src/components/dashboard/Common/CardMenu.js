import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IntlMessages from '../../../util/IntlMessages';

export const options = [
  <IntlMessages id="popup.updateData"/>,
  <IntlMessages id="popup.detailedLog"/>,
  <IntlMessages id="popup.statistics"/>,
  <IntlMessages id="popup.clearData"/>
];
const CardMenu = (props) => {


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
          }} data-test="container-component">
      {options.map((option,index) =>
        <MenuItem key={option} onClick={handleRequestClose} data-test={`menu-component${index}`}>
          {option}
        </MenuItem>,
      )}
    </Menu>
  );
};

export default CardMenu;