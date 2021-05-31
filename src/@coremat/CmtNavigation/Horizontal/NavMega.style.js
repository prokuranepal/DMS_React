import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  '@keyframes slideIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  '@keyframes moveUp': {
    from: {
      marginTop: 20,
    },
    to: {
      marginTop: 0,
    },
  },
  navMega: {
    position: 'static',
    '&.Cmt-navMega-5': {
      '& .Cmt-navMegaColumnsWrapper': {
        width: '100%',
        '& .Cmt-navMega-column': {
          width: 'calc(100% / 5)',
        },
      },
    },
    '&.Cmt-navMega-4': {
      '& .Cmt-navMegaColumnsWrapper': {
        width: '100%',
        '& .Cmt-navMega-column': {
          width: 'calc(100% / 4)',
        },
      },
    },
    '&.Cmt-navMega-3': {
      position: 'relative',
      '& .Cmt-navMegaColumnsWrapper': {
        width: '100%',
        minWidth: 530,
        right: 'auto',
        marginLeft: 0,
        marginRight: 0,
        '& .Cmt-navMega-column': {
          width: 'calc(100% / 3)',
        },
      },
      '&:last-child': {
        '& .Cmt-navMegaColumnsWrapper': {
          right: 0,
          left: 'auto',
        },
      },
    },
    '&.Cmt-navMega-2': {
      position: 'relative',
      '& .Cmt-navMegaColumnsWrapper': {
        width: '100%',
        minWidth: 460,
        right: 'auto',
        marginLeft: 0,
        marginRight: 0,
        '& .Cmt-navMega-column': {
          width: 'calc(100% / 2)',
        },
      },
      '&:last-child': {
        '& .Cmt-navMegaColumnsWrapper': {
          right: 0,
          left: 'auto',
        },
      },
    },
  },
  navMegaBtn: {
    position: 'static',
    padding: '11px 14px',
    cursor: 'pointer',
    color: theme.palette.horizontalNav.navigationColor,
    '&:hover, &:focus, &.active': {
      color: theme.palette.horizontalNav.navigationActiveColor,
    },

    '&:hover > $navMegaColumnsWrapper': {
      display: 'flex',
      top: '100%',
      opacity: 1,
      visibility: 'visible',
      animationName: '$slideIn, $moveUp',
      animationTimingFunction: 'ease, ease',
      animationDuration: '0.4s, 0.4s',
    },
  },
  navMegaBtnInner: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  navMegaColumnsWrapper: {
    display: 'none',
    opacity: 0,
    visibility: 'hidden',
    minWidth: 600,
    width: '100%',
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    zIndex: 2,
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.horizontalNav.textColor,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)',
  },
  navMegaColumn: {
    width: 'calc(100% / 3)',
  },
  navMegaColumnInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'unset',
  },
  navMegaColumnLabel: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 10px 10px 20px',
    color: theme.palette.text.primary,

    '& .Cmt-icon-root': {
      marginRight: 16,
      fontSize: 20,
    },
  },
}));

export default useStyles;
