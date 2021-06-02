import { darken, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appRoot: props => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100vh',
    boxSizing: 'border-box',
    position: 'relative',
    transition: 'all 0.3s ease',
    '& .Cmt-header': {
      '& .Cmt-toggle-menu': {
        display: 'none',
        marginRight: 10,
        [theme.breakpoints.down(props.drawerBreakPoint)]: {
          display: 'block',
        },
      },
      '& .Cmt-header-nav': {
        [theme.breakpoints.down(props.drawerBreakPoint)]: {
          display: 'none',
        },
      },
    },
  }),
  appMain: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    transition: 'all 0.3s ease',
    '& .Cmt-customizerBtn': {
      top: 220,
    },
  },
  appInnerRoot: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  appMainContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
  },
  '@global': {
    '.layout-type-framed': {
      '@media screen and (min-width: 1366px)': {
        padding: 20,
        backgroundColor: darken(theme.palette.primary.main, 0.6),
        overflow: 'hidden',
        '& > #root': {
          height: 'calc(100vh - 40px)',
          borderRadius: 12,
          backgroundColor: theme.palette.background.default,
          overflow: 'hidden',
        },
        '& $appRoot': {
          overflowY: 'auto',
          height: '100%',
        },
      },
      [theme.breakpoints.up('xl')]: {
        padding: 50,
        '& > #root': {
          height: 'calc(100vh - 100px)',
        },
      },
    },
    '.layout-type-boxed': {
      '@media screen and (min-width: 1366px)': {
        backgroundColor: darken(theme.palette.primary.main, 0.6),
        overflow: 'hidden',
        '& > #root': {
          width: 1300,
          marginRight: 'auto',
          marginLeft: 'auto',
          backgroundColor: theme.palette.background.default,
          overflow: 'hidden',
        },
        '& $appRoot': {
          overflowY: 'auto',
        },
      },
      [theme.breakpoints.up('xl')]: {
        '& > #root': {
          width: 1740,
        },
      },
    },
  },
}));

export default useStyles;
