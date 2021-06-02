import React from 'react';
import { Radio, FormControl, FormControlLabel, FormHelperText } from '@material-ui/core';
import PropTypes from 'prop-types';

const AppRadioButton = ({
  name,
  id,
  value,
  label,
  labelPlacement,
  checked,
  onChange,
  color,
  required,
  error,
  helperText,
  ...rest
}) => {
  return (
    <FormControl required={required} error={error} component="fieldset" {...rest}>
      <FormControlLabel
        value={value}
        control={<Radio checked={checked} name={name} id={id || name} onChange={onChange} color={color} />}
        label={label}
        labelPlacement={labelPlacement}
      />

      <FormHelperText error={error || helperText !== ''}>{helperText}</FormHelperText>
    </FormControl>
  );
};

AppRadioButton.prototype = {
  name: PropTypes.string,
  id: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
  labelPlacement: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.bool,
};

AppRadioButton.defaultProps = {
  type: 'text',
  checked: false,
  color: 'primary',
  labelPlacement: 'end',
  error: false,
  helperText: '',
};

export default AppRadioButton;
