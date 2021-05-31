import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Popover } from '@material-ui/core';
import CmtSearch from '../../../../@coremat/CmtSearch';

const SearchPopover = ({ iconClassName, popoverClassName }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenSearchBar = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSearchBar = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <React.Fragment>
      <IconButton className={iconClassName} onClick={handleOpenSearchBar}>
        <SearchIcon />
      </IconButton>
      <Popover
        className={popoverClassName}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseSearchBar}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <CmtSearch placeholder={'Search here...'} />
      </Popover>
    </React.Fragment>
  );
};

export default SearchPopover;
