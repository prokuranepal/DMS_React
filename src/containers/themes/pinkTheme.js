import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';

export default {
  palette: {
    primary: {
      light: pink[300],
      main: pink[500],
      dark: pink[700],
      contrastText: '#fff'
    },
    secondary: {
      light: teal[300],
      main: teal['A700'],
      dark: teal[700],
      contrastText: '#fff'
    }
  },
  status: {
    danger: 'orange',
  },
  typography: {
    button: {
      fontWeight: 400,
      textAlign: 'capitalize'
    },
  },
};
