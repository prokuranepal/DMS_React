import React, { useEffect, useState } from 'react';
import { Box, Button, InputLabel, makeStyles, Popover } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { noSpaceMessage, requiredMessage } from '../../../constants/ErrorMessages';
import AppTextInput from '../formElements/AppTextInput';
import ColorPickerPopup from '../ColorPickerPopup';

const useStyles = makeStyles(theme => ({
  inputBoxRoot: {
    '& .MuiInputBase-input': {
      paddingBottom: 12,
      fontSize: 14,
      letterSpacing: 0.25,
      color: theme.palette.common.dark,
    },
  },
}));

const LabelForm = ({ title, anchorEl, onClose, label, saveLabel }) => {
  const classes = useStyles();
  const [color, setColor] = useState(label ? label.color : '#333333');
  const [name, setName] = useState(label ? label.name : '');
  const [nameError, setNameError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (label) {
      setName(label.name);
      setColor(label.color);
    }
  }, [label]);

  const validateForm = labelName => {
    if (!labelName) {
      setNameError(requiredMessage);
    } else {
      setNameError('');
    }
  };

  const onLabelChange = event => {
    const label = event.target.value;
    setName(label);
    validateForm(label);
  };

  const submitForm = () => {
    validateForm(name);
    if (name) {
      handleSubmitLabel();
    }
  };

  const closeFormPopup = () => {
    setColor('#333333');
    setName('');
    if (onClose) onClose();
  };

  const handleSubmitLabel = () => {
    dispatch(
      saveLabel({
        ...label,
        name,
        color,
      }),
    );
    closeFormPopup();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}>
      <Box p={4}>
        <Box fontSize={12} color="text.secondary" mb={2} clone>
          <InputLabel htmlFor="my-input">{title || 'Label Name'}</InputLabel>
        </Box>
        <Box display="flex" alignItems="center" mb={5}>
          <AppTextInput
            className={classes.inputBoxRoot}
            value={name}
            onChange={onLabelChange}
            required
            helperText={nameError}
          />

          <Box ml={4} pb={nameError ? '23px' : ''}>
            <ColorPickerPopup color={color} setColor={setColor} />
          </Box>
        </Box>

        <Box>
          <Box mr={3} clone>
            <Button size="small" variant="contained" color="primary" onClick={submitForm}>
              Apply
            </Button>
          </Box>
          <Button size="small" onClick={closeFormPopup}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Popover>
  );
};

export default LabelForm;
