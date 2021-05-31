import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  advCardContent: props => ({
    ...props.backgroundStyles,
    padding: 24,
    position: 'relative',
    '& > *': {
      position: 'relative',
      zIndex: 3,
    },
    '&:before': props.overlayStyles
      ? {
          ...props.overlayStyles,
          content: "''",
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
        }
      : {},
  }),
  alignCenter: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    '& .Cmt-content-head': {
      flexDirection: 'column',
    },
    '& .Cmt-avatar': {
      marginRight: 0,
      marginBottom: 15,
    },
  },
  gridOrder1: {
    order: 1,
  },
  gridOrder2: {
    order: 2,
  },
}));

export default useStyles;
