import React from 'react';
import clsx from 'clsx';
import { Box, Button, fade, InputBase, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  searchRoot: {
    position: 'relative',
    width: 260,
    [theme.breakpoints.up('md')]: {
      width: 450,
    },
    '& .Cmt-icon': {
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
      position: 'relative',
      flex: '1 1 auto',
      width: '1%',
      minWidth: 0,
      height: 48,
      borderRadius: '30px 0 0  30px',
      backgroundColor: fade(theme.palette.common.dark, 0.08),
      color: theme.palette.text.secondary,
      boxSizing: 'border-box',
      padding: '5px 15px 5px 50px',
      transition: 'all 0.3s ease',

      '&:not(:last-child) .MuiOutlinedInput-root': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.common.dark, 0.12),
      },
    },
  },
  inputGroup: {
    position: 'relative',
    display: 'flex',
    alignItems: 'stretch',
  },
  inputGroupAppend: {
    marginRight: '-1px',
  },
  button: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    borderRadius: '0 30px 30px 0',
    height: '100%',
    minWidth: 100,
  },
}));

const GlobalSearchForm = () => {
  const classes = useStyles();
  const [showCategories, setShowCategories] = React.useState(null);

  const onShowCategories = event => {
    setShowCategories(event.currentTarget);
  };

  const onHideCategories = () => {
    setShowCategories(null);
  };

  return (
    <Box pr={3} className={clsx(classes.searchRoot, 'Cmt-search')}>
      <Box className={classes.inputGroup}>
        <InputBase className={classes.inputText} placeholder={'Search here...'} inputProps={{ 'aria-label': 'search' }} />
        <SearchIcon className={clsx('Cmt-icon')} />
        <Box className={clsx(classes.inputGroupAppend, 'Cmt-inputGroupAppend')}>
          <Button variant="outlined" className={classes.button} endIcon={<ArrowDropDownIcon />} onClick={onShowCategories}>
            Categories
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={showCategories}
            keepMounted
            open={Boolean(showCategories)}
            onClose={onHideCategories}>
            <MenuItem onClick={onHideCategories}>Option 1</MenuItem>
            <MenuItem onClick={onHideCategories}>Option 2</MenuItem>
            <MenuItem onClick={onHideCategories}>Option 3</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default GlobalSearchForm;
