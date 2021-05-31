import React from 'react';
import { Box, InputBase, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  searchRoot: {
    position: 'relative',
    width: '100%',
    marginBottom: 35,
    '& .MuiSvgIcon-root': {
      position: 'absolute',
      left: 18,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1,
    },
    '& .MuiInputBase-root': {
      width: '100%',
    },
    '& .MuiInputBase-input': {
      height: 48,
      borderRadius: 30,
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${theme.palette.divider}`,
      boxSizing: 'border-box',
      padding: '5px 15px 5px 50px',
      transition: 'all 0.3s ease',
    },
  },
}));

const SearchBox = ({ searchKeyword, onSearch, onBlur, placeholder }) => {
  const classes = useStyles();

  return (
    <Box pr={3} className={classes.searchRoot}>
      <SearchIcon />
      <InputBase
        placeholder={placeholder || 'Search here...'}
        inputProps={{ 'aria-label': 'search' }}
        value={searchKeyword}
        onChange={onSearch}
        onBlur={onBlur}
      />
    </Box>
  );
};

export default SearchBox;
