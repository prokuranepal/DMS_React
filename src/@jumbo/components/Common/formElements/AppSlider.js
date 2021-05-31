import React from 'react';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const boxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const useStyles = makeStyles(() => ({
  root: {
    height: 8,
  },
  thumb: {
    height: 18,
    width: 18,
    backgroundColor: '#fff',
    boxShadow: boxShadow,
    marginTop: -9,
    marginLeft: -9,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: boxShadow,
      },
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 3,
    borderRadius: 7,
  },
  rail: {
    height: 3,
    borderRadius: 7,
    marginLeft: 4,
  },
}));

const AppSlider = props => {
  const classes = useStyles();

  return (
    <Slider
      classes={{
        root: classes.root,
        thumb: classes.thumb,
        valueLabel: classes.valueLabel,
        track: classes.track,
        rail: classes.rail,
      }}
      {...props}
    />
  );
};

export default AppSlider;
