import makeStyles from '@material-ui/core/styles/makeStyles';
import { fade } from '@material-ui/core';
const bgImage = '/images/horizontal-header-bg-pattern.png';

const useStyles = makeStyles(theme => ({
  appHeaderDark: {
    backgroundImage: `URL(${bgImage})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    color: theme.palette.common.white,
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: fade(theme.palette.primary.main, 0.47),
    },
    '& > *': {
      position: 'relative',
      zIndex: 3,
    },
    '& > .Cmt-headerMain': {
      backgroundColor: theme.palette.background.paper,
      zIndex: 4,

      '& .Cmt-navCollapseBtn': {
        paddingTop: 10,
        paddingBottom: 10,
      },
      '& .Cmt-navCollapseBtn, & .Cmt-appIcon': {
        color: theme.palette.horizontalNav.textColor,
        '&:hover, &:focus': {
          color: theme.palette.horizontalNav.textDarkColor,
        },
        '&.active': {
          color: theme.palette.horizontalNav.textActiveColor,
        },
      },
    },
    '& > .Cmt-header-nav': {
      minHeight: 54,
    },
    '& .Cmt-btn': {
      color: theme.palette.common.white,
      '&:hover, &:focus': {
        backgroundColor: fade(theme.palette.common.white, 0.04),
        color: theme.palette.common.white,
      },
    },
    '& .Cmt-divider': {
      backgroundColor: theme.palette.background.paper,
    },
    '& .Cmt-appIcon, & .Cmt-searchIcon': {
      color: theme.palette.common.white,
      '&:hover, &:focus': {
        backgroundColor: fade(theme.palette.common.white, 0.04),
        color: theme.palette.common.white,
      },
    },
    '& .Cmt-lang-switch, & .Cmt-profile-pic': {
      '&:before': {
        backgroundColor: fade(theme.palette.common.white, 0.38),
      },
    },
  },
}));

export default useStyles;
