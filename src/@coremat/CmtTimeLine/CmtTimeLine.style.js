import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  timelineRoot: {
    position: 'relative',
    '&.right': {
      textAlign: 'right',
    },
  },
}));
