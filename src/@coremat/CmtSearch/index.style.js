import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: props => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginLeft: props.align === 'right' ? 'auto' : 0,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  }),
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&.right': {
      left: 'auto',
      right: 0,
      '& + $inputRoot $inputInput': {
        paddingLeft: theme.spacing(2),
        paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
      },
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(2, 2, 2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
    transition: theme.transitions.create('width'),
    width: 162,
    height: 35,
    borderRadius: 4,
    boxSizing: 'border-box',
    '&:focus': {
      backgroundColor: fade(theme.palette.background.paper, 0.5),
      width: 235,
    },
  },
  searchIconBox: {
    position: 'relative',
    '& $inputInput': {
      width: 35,
      borderRadius: 4,
      paddingLeft: 27,
      '&:focus': {
        width: 150,
        borderRadius: 4,
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        [theme.breakpoints.up('sm')]: {
          width: 235,
        },
      },
    },
    '& $searchIcon': {
      paddingLeft: 6,
      paddingRight: 6,
    },
  },
}));
export default useStyles;
