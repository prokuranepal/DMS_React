import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  timelineItem: {
    position: 'relative',
    paddingLeft: 80,
    '&:not(:last-child)': {
      paddingBottom: 25,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 25,
      top: 36,
      bottom: -38,
      zIndex: 1,
      width: 2,
      borderLeft: '2px solid #dee2e6',
      '.right &': {
        left: 'auto',
        right: 22,
      },
    },
    '&:first-child::before, &:last-child::before': {
      borderLeftStyle: 'dashed',
    },
    '&:last-child::before': {
      bottom: 0,
    },
    '.right &': {
      paddingLeft: 0,
      paddingRight: 80,
    },
    '.zigzag &': {
      [theme.breakpoints.up('sm')]: {
        paddingLeft: 100,
        '&:before': {
          left: 0,
          top: 20,
          bottom: -26,
          transform: 'rotate(25deg)',
        },
        '&:nth-child(2n)': {
          paddingLeft: 0,
          paddingRight: 100,
          '&:before': {
            transform: 'rotate(-25deg)',
          },
          '& $timelineBadge': {
            right: 25,
          },
        },
        '&:last-child::before': {
          bottom: -5,
        },
        '& .Cmt-timeline-root-inner': {
          maxHeight: 150,
          overflowY: 'auto',
          paddingRight: 7,
        },
      },
      [theme.breakpoints.up('md')]: {
        paddingLeft: 150,
        '&:nth-child(2n)': {
          paddingLeft: 0,
          paddingRight: 150,
        },
      },
    },
    '.center &, .zigzag &': {
      [theme.breakpoints.up('sm')]: {
        paddingLeft: 55,
        width: '50%',
        left: '50%',
        boxSizing: 'border-box',
        '&:before': {
          left: -1,
        },
        '& $makeDot': {
          left: -7,
        },
        '& .Cmt-timeline-time > div': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        },
        '&:nth-child(2n)': {
          left: 0,
          textAlign: 'right',
          paddingLeft: 0,
          paddingRight: 55,
          '&:before': {
            left: 'auto',
            right: -3,
          },
          '& $timelineBadge': {
            left: 'auto',
            right: -25,
          },
          '& .Cmt-timeline-root': {
            '&:before': {
              left: 'auto',
              right: -15,
              borderWidth: '15px 0 15px 15px',
            },
            '&:after': {
              left: 'auto',
              right: -14,
              borderWidth: '14px 0 14px 14px',
            },
          },
          '& $timelineTime': {
            left: 'auto',
            right: -152,
          },
          '& $makeDot': {
            left: 'auto',
            right: -7,
          },
          '& .Cmt-timeline-time > div': {
            alignItems: 'flex-start',
          },
        },
      },
    },
  },
  timelineBadge: {
    width: 50,
    height: 50,
    // backgroundColor: '#dee2e6',
    // color: '#fff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    top: 16,
    zIndex: 2,
    '& img': {
      maxWidth: '100%',
    },
    '.right &': {
      left: 'auto',
      right: 0,
    },
    '.zigzag &': {
      [theme.breakpoints.up('sm')]: {
        left: 25,
      },
    },
    '.center &, .zigzag &': {
      [theme.breakpoints.up('sm')]: {
        left: -25,
      },
    },
  },
  timelineTime: {
    fontSize: 14,
    marginTop: 10,
    '.center &, .zigzag &': {
      [theme.breakpoints.up('sm')]: {
        fontSize: 16,
        position: 'absolute',
        top: 18,
        left: -150,
        zIndex: 2,
        marginTop: 0,
      },
    },
    '.right &': {
      '& > div': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      },
    },
  },
  makeDot: {
    height: 14,
    width: 14,
    borderRadius: '50%',
    display: 'block',
    position: 'absolute',
    left: 19,
    top: 35,
    zIndex: 1,
    boxShadow: '0px 4px 4px -1px rgba(0,0,0,.25)',
    border: '2px solid white',
    boxSizing: 'border-box',
    '.right &': {
      left: 'auto',
      right: 19,
    },
  },
}));
