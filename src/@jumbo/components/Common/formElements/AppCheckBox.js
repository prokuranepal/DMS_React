import React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@material-ui/core';
import PropTypes from 'prop-types';

const AppCheckbox = ({
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
  icon,
  checkedIcon,
  ...rest
}) => {
  return (
    <FormControl required={required} error={error} component="fieldset" {...rest}>
      <FormControlLabel
        value={value}
        control={
          <Checkbox
            checked={checked}
            name={name}
            id={id || name}
            onChange={onChange}
            color={color}
            icon={icon}
            checkedIcon={checkedIcon}
          />
        }
        label={label}
        labelPlacement={labelPlacement}
      />

      {helperText && <FormHelperText error={error || helperText !== ''}>{helperText}</FormHelperText>}
    </FormControl>
  );
};

AppCheckbox.prototype = {
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
  icon: PropTypes.element,
  checkedIcon: PropTypes.element,
};

AppCheckbox.defaultProps = {
  checked: false,
  color: 'primary',
  labelPlacement: 'end',
  error: false,
  helperText: '',
};

export default AppCheckbox;
