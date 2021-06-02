import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 8,
  },
  flexRoot: {
    display: 'flex',
    alignItems: 'center',
  },
  barContainer: props => ({
    borderRadius: props.thickness,
    height: props.thickness,
  }),
  fillStyle: props => ({
    position: 'relative',
    borderRadius: props.thickness,
    height: props.thickness,
    transition: 'width 1s ease-in-out',
    '&:after': props.pointer
      ? {
          content: '""',
          height: props.pointerSize ? props.pointerSize : props.thickness + 4,
          width: props.pointerSize ? props.pointerSize : props.thickness + 4,
          position: 'absolute',
          right: 0,
          left: 'auto',
          top: '50%',
          transform: 'translateY(-50%)',
          backgroundColor: props.pointerColor,
          borderRadius: '50%',
        }
      : {
          height: 0,
          width: 0,
        },
  }),
  textContainer: {
    textAlign: 'left',
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
  textContainerCenter: {
    textAlign: 'center',
  },
  textContainerRight: {
    textAlign: 'right',
  },
  labelContainer: {
    textAlign: 'left',
  },
  labelContainerCenter: {
    textAlign: 'center',
  },
  labelContainerRight: {
    textAlign: 'right',
  },
}));
export default useStyles;
