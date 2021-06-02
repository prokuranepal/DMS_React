import { makeStyles } from '@material-ui/core';
import { hexToRgba } from '../CmtHelpers/JssHelper';
import { deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles({
  advCardRoot: {
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
    height: '100%',
  },
  cardOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
  actionMenu: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 4,
    '& button': {
      backgroundColor: 'rgba(' + hexToRgba(deepPurple[500]) + ', 0.5)',
      padding: 0,
      height: 40,
      width: 40,
      minWidth: 'auto',
      fontSize: 10,
      '&:hover': {
        backgroundColor: 'rgba(' + hexToRgba(deepPurple[500]) + ', 0.7)',
      },
    },
  },
});

export default useStyles;
