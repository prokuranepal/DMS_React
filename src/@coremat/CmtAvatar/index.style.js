import { makeStyles } from '@material-ui/core';
import { amber, blue, brown, deepOrange, green, grey, purple, red, yellow } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
  },
  primary: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
  },
  secondary: {
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    backgroundColor: theme.palette.secondary.main,
  },
  amber: {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: amber[500],
  },
  brown: {
    color: '#ffffff',
    backgroundColor: brown[500],
  },
  red: {
    color: '#ffffff',
    backgroundColor: red[500],
  },
  green: {
    color: '#ffffff',
    backgroundColor: green[500],
  },
  blue: {
    color: '#ffffff',
    backgroundColor: blue[500],
  },
  yellow: {
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: yellow[500],
  },
  grey: {
    color: '#ffffff',
    backgroundColor: grey[400],
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  },
  customSize: props => ({
    height: props.size,
    width: props.size,
  }),
  small: {
    height: 40,
    width: 40,
  },
  medium: {
    height: 48,
    width: 48,
  },
  large: {
    height: 56,
    width: 56,
  },
}));
export default useStyles;
