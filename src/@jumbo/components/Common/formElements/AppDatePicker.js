import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardDatePicker } from '@material-ui/pickers';

const AppDatePicker = ({
  name,
  id,
  fullWidth,
  size,
  value,
  onChange,
  helperText,
  variant,
  format,
  inputVariant,
  error,
  ...rest
}) => {
  return (
    <KeyboardDatePicker
      variant={variant}
      inputVariant={inputVariant}
      format={format}
      name={name}
      id={id || name}
      fullWidth={fullWidth}
      size={size}
      value={value}
      onChange={onChange}
      helperText={helperText}
      error={error || helperText !== ''}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
      {...rest}
      className="form-control"
    />
  );
};

AppDatePicker.prototype = {
  name: PropTypes.string,
  id: PropTypes.string,
  fullWidth: PropTypes.bool,
  value: PropTypes.string,
  variant: PropTypes.string,
  format: PropTypes.string,
  inputVariant: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.bool,
};

AppDatePicker.defaultProps = {
  fullWidth: true,
  variant: 'dialog',
  inputVariant: 'standard',
  format: 'YYYY-MM-DD',
  size: 'small',
  error: false,
  helperText: '',
};

export default AppDatePicker;
