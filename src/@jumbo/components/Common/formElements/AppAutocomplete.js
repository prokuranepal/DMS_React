import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CmtImage from '../../../../@coremat/CmtImage';

const useStyles = makeStyles(theme => ({
  option: {
    borderTop: `1px solid ${theme.palette.borderColor.main}`,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    fontWeight: '300',
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
    minHeight: 'auto',
    alignItems: 'flex-start',
    padding: 8,
    '&[aria-selected="true"]': {
      backgroundColor: 'transparent',
    },
    '&[data-focus="true"]': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  AutocompleteRoot: {
    backgroundColor: theme.palette.background.paper,
    '& .MuiFormControl-root > label': {
      paddingLeft: 28,
    },
    '& .MuiFormControl-root > label.MuiInputLabel-shrink': {
      paddingLeft: 0,
    },
  },
  inputRoot: {
    paddingLeft: '35px !important',
  },
  avatar: {
    position: 'absolute',
    margin: 5,
    width: 30,
    height: 30,
    borderRadius: '50%',
  },
  textFieldRoot: {
    backgroundColor: props => props.backgroundColor,
  },
}));

const AppAutocomplete = React.forwardRef((props, ref) => {
  const classes = useStyles(props);
  const {
    options,
    renderOption,
    getOptionLabel,
    name,
    id,
    backgroundColor,
    fullWidth,
    size,
    placeholder,
    variant,
    value,
    avatar,
    onChange,
    helperText,
    error,
    multiple,
    textValue,
    onChangeText,
    label,
    required,
    ...rest
  } = props;
  return (
    <Box ref={ref}>
      <Autocomplete
        id={id || name}
        options={options}
        multiple={multiple}
        style={{ width: '100%' }}
        classes={{
          option: classes.option,
          root: avatar ? classes.AutocompleteRoot : null,
          inputRoot: avatar ? classes.inputRoot : null,
        }}
        value={value}
        onChange={onChange}
        getOptionLabel={getOptionLabel}
        renderOption={renderOption}
        renderInput={params => (
          <React.Fragment>
            {avatar && typeof avatar === 'string' ? (
              <CmtImage className={classes.avatar} src={avatar} alt="Avatar" />
            ) : (
              avatar
            )}
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'disabled',
              }}
              name={name}
              value={textValue}
              onChange={e => (onChangeText ? onChangeText(e.target.value) : {})}
              className={classes.textFieldRoot}
              label={label}
              placeholder={placeholder}
              id={'input-' + (id || name)}
              size={size}
              fullWidth={fullWidth}
              variant={variant}
              error={error || helperText !== ''}
              helperText={helperText}
              required={required}
            />
          </React.Fragment>
        )}
        {...rest}
      />
    </Box>
  );
});

AppAutocomplete.prototype = {
  options: PropTypes.array,
  name: PropTypes.string,
  id: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  renderOption: PropTypes.func,
  getOptionLabel: PropTypes.func,
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  avatar: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  backgroundColor: PropTypes.string,
  multiple: PropTypes.bool,
  required: PropTypes.bool,
};

AppAutocomplete.defaultProps = {
  options: [],
  fullWidth: true,
  size: 'small',
  error: false,
  placeholder: '',
  helperText: '',
  avatar: '',
  backgroundColor: 'transparent',
  multiple: false,
  label: '',
  required: false,
};

export default AppAutocomplete;
