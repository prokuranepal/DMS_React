import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import { Box, Button, Popover } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    '& .sketch-picker': {
      boxShadow: 'none !important',
    },
  },
  actionRoot: {
    padding: 10,
    '& .MuiButton-root:not(:last-child)': {
      marginRight: 8,
    },
  },
});

const ColorPickerPopup = ({ color, setColor }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [tempColor, setTempColor] = useState(color ? color : '#333333');

  const openPicker = event => {
    setAnchorEl(event.currentTarget);
  };

  const onCancel = () => {
    setAnchorEl(null);
  };

  const onColorSelect = color => {
    setTempColor(color.hex);
  };

  const onUpdate = () => {
    setColor(tempColor);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <React.Fragment>
      <Box display="inline-block" p="3px" border={1} onClick={openPicker}>
        <Box height={27} width={27} style={{ backgroundColor: color }} />
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        className={classes.root}
        onClose={onCancel}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        <SketchPicker color={tempColor} onChange={onColorSelect} />

        <Box className={classes.actionRoot}>
          <Button size="small" variant="contained" color="primary" onClick={onUpdate}>
            Done
          </Button>
          <Button size="small" onClick={onCancel}>
            Cancel
          </Button>
        </Box>
      </Popover>
    </React.Fragment>
  );
};

export default ColorPickerPopup;
