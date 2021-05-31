import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './index.style';

const CmtSearch = ({
  border,
  placeholder,
  iconPosition,
  align,
  onlyIcon,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...rest
}) => {
  const classes = useStyles({ align });
  const inputBaseStyle = {
    border: border ? '1px solid' : '0 none',
    ...inputStyle,
  };

  return (
    <Box className={clsx(classes.root, 'CmtSearch-root', className)} style={containerStyle}>
      <Box className={clsx(classes.search, onlyIcon ? classes.searchIconBox : null)}>
        <Box
          className={clsx(classes.searchIcon, 'CmtSearch-icon-wrapper', {
            right: iconPosition === 'right',
          })}
          style={iconStyle}>
          <SearchIcon style={iconStyle} />
        </Box>
        <InputBase
          placeholder={placeholder || 'Search…'}
          style={inputBaseStyle}
          classes={{
            root: clsx(classes.inputRoot, 'CmtSearch-input-root'),
            input: clsx(classes.inputInput, 'CmtSearch-input'),
          }}
          inputProps={{ 'aria-label': 'search' }}
          {...rest}
        />
      </Box>
    </Box>
  );
};

export default CmtSearch;

CmtSearch.prototype = {
  border: PropTypes.bool,
  iconPosition: PropTypes.string,
  align: PropTypes.string,
  onlyIcon: PropTypes.bool,
  containerStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  className: PropTypes.string,
};

CmtSearch.defaultProps = {
  border: true,
  containerStyle: {},
  inputStyle: {
    backgroundColor: 'transparent',
    borderColor: 'grey',
    color: 'grey',
    borderRadius: 4,
  },
  iconPosition: 'left',
  onlyIcon: false,
  align: 'left',
  iconStyle: {
    color: 'grey',
  },
};
