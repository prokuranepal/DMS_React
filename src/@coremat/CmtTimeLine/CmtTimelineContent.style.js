import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core';

export default makeStyles(theme => ({
  timelineCard: {
    padding: '22px 26px 26px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 1px 8px -1px rgba(0,0,0,.2)',
    borderRadius: 6,
    position: 'relative',
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      borderStyle: 'solid',
      display: 'inline-flex',
    },
    '&:before': {
      borderColor: `transparent ${fade(theme.palette.divider, 0.1)}`,
      borderWidth: '15px 15px 15px 0',
      left: -15,
      top: 27,
      '.right &': {
        left: 'auto',
        right: -15,
        borderWidth: '15px 0 15px 15px',
      },
    },
    '&:after': {
      borderColor: `transparent ${theme.palette.background.paper}`,
      borderWidth: '14px 14px 14px 0',
      left: -14,
      top: 27,
      '.right &': {
        left: 'auto',
        right: -14,
        borderWidth: '14px 0 14px 14px',
      },
    },
    '& .Cmt-timeline-root-inner': {
      '& > :last-child': {
        marginBottom: 0,
      },
    },
  },
}));
