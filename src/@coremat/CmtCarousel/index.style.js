import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 66px 8px 18px',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  btnRoot: {
    textTransform: 'capitalize',
    padding: '5px 8px',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 1,
  },
  sliderRoot: props => ({
    position: 'relative',
    '&.top': {
      paddingTop: 25,
      '& .slick-dots': {
        bottom: 'auto',
        left: 0,
        right: 0,
        top: 0,
        zIndex: 2,
      },
    },
    '&.top-left': {
      paddingTop: 25,
      '& .slick-dots': {
        width: 'auto',
        left: 0,
        bottom: 'auto',
        right: 'auto',
        top: 0,
        zIndex: 2,
      },
    },
    '&.top-right': {
      paddingTop: 25,
      '& .slick-dots': {
        left: 'auto',
        width: 'auto',
        bottom: 'auto',
        right: 0,
        top: 0,
        zIndex: 2,
      },
    },
    '&.bottom': {
      '& .slick-dots': {
        left: 0,
        right: 0,
        zIndex: 2,
      },
    },
    '&.bottom-left': {
      '& .slick-dots': {
        left: 0,
        right: 'auto',
        width: 'auto',
        zIndex: 2,
      },
    },
    '&.bottom-right': {
      '& .slick-dots': {
        left: 'auto',
        width: 'auto',
        right: 0,
        zIndex: 2,
      },
    },
    '& .slick-prev': {
      left: 20,
      zIndex: 10,
    },
    '& .slick-next': {
      right: 20,
    },
    '& .slick-prev:before, & .slick-next:before': {
      color: theme.palette.text.primary,
    },
    '& .slick-dots': {
      '& li, & li button, & li button:before': {
        width: props.dotSize,
        height: props.dotSize,
        lineHeight: 1,
      },
      '& li button:before': {
        fontSize: 0,
        content: '""',
        backgroundColor: props.color,
        borderRadius: '50%',
        boxSizing: 'border-box',
      },
      '& li.slick-active button:before': {
        backgroundColor: props.activeColor,
      },
    },
    '&.outline': {
      '& .slick-dots': {
        '& li button:before': {
          backgroundColor: 'transparent',
          border: `2px solid ${props.color}`,
        },
        '& li.slick-active button:before': {
          backgroundColor: 'transparent',
          borderColor: props.activeColor,
        },
      },
    },
  }),
}));
export default useStyles;
