import { makeStyles } from '@material-ui/core';
import { hexToRgba } from '../CmtHelpers/JssHelper';
import { amber, blue, brown, deepOrange, green, grey, purple, red, yellow } from '@material-ui/core/colors';

const hoverOpacity = 0.7;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  buttonRoot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelRoot: {
    width: '100%',
    overflow: 'hidden',
    textAlign: 'center',
  },
  primary: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: 'rgba(' + hexToRgba(theme.palette.primary.main) + ', ' + hoverOpacity + ')',
    },
  },
  secondary: {
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: 'rgba(' + hexToRgba(theme.palette.secondary.main) + ', ' + hoverOpacity + ')',
    },
  },
  amber: {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: amber[500],
    '&:hover': {
      backgroundColor: 'rgba(' + hexToRgba(amber[500]) + ', ' + hoverOpacity + ')',
    },
  },
  brown: {
    color: '#ffffff',
    backgroundColor: brown[500],
    '&:hover': {
      backgroundColor: 'rgba(' + hexToRgba(brown[500]) + ', ' + hoverOpacity + ')',
    },
  },
  red: {
    color: '#ffffff',
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: 'rgba(' + hexToRgba(red[500]) + ', ' + hoverOpacity + ')',
    },
  },
  green: {
    color: '#ffffff',
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: 'rgba(' + hexToRgba(green[500]) + ', ' + hoverOpacity + ')',
    },
  },
  blue: {
    color: '#ffffff',
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: 'rgba(' + hexToRgba(blue[500]) + ', ' + hoverOpacity + ')',
    },
  },
  yellow: {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: yellow[500],
    '&:hover': {
      backgroundColor: 'rgba(' + hexToRgba(yellow[500]) + ', ' + hoverOpacity + ')',
    },
  },
  grey: {
    color: '#ffffff',
    backgroundColor: grey[400],
    '&:hover': {
      backgroundColor: 'rgba(' + hexToRgba(grey[400]) + ', ' + hoverOpacity + ')',
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    '&:hover': {
      backgroundColor: 'rgba(' + hexToRgba(deepOrange[500]) + ', ' + hoverOpacity + ')',
    },
  },
  purple: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: 'rgba(' + hexToRgba(purple[500]) + ', ' + hoverOpacity + ')',
    },
  },
}));
export default useStyles;
