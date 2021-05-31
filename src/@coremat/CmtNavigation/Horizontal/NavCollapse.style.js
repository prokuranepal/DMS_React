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
  navCollapse: {
    position: 'relative',

    '&.active > .Cmt-navCollapseBtn': {
      color: theme.palette.horizontalNav.navigationActiveColor,
    },

    '&.active > .Cmt-navCollapseBtn $subCollapse .Cmt-navCollapseBtn.active': {
      color: theme.palette.horizontalNav.textDarkColor,
      '& $navCollapseBtnInner  .Cmt-icon-root': {
        color: theme.palette.horizontalNav.textActiveColor,
      },
      '&:hover, &:focus': {
        color: theme.palette.horizontalNav.textDarkColor,
        backgroundColor: theme.palette.horizontalNav.menuHoverBgColor,
        '& $navCollapseBtnInner > .Cmt-icon-root': {
          color: theme.palette.horizontalNav.textDarkColor,
        },
      },
    },
  },
  navCollapseItem: {
    position: 'absolute',
    display: 'none',
    top: 80,
    left: 0,
    zIndex: 2,
    opacity: 0,
    visibility: 'hidden',
    minWidth: 200,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.horizontalNav.textColor,
    borderRadius: theme.shape.borderRadius,
    boxShadow: '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)',

    '& $navCollapseItem': {
      top: 50,
      left: '100%',
      right: 'auto',
    },
  },
  navCollapseBtn: {
    position: 'relative',
    padding: '11px 14px',
    cursor: 'pointer',
    color: theme.palette.horizontalNav.navigationColor,
    '&:hover, &:focus': {
      color: theme.palette.horizontalNav.navigationActiveColor,
    },

    '&:hover > $navCollapseItem': {
      display: 'block',
      top: '100%',
      opacity: 1,
      visibility: 'visible',
      animationName: '$slideIn, $moveUp',
      animationTimingFunction: 'ease, ease',
      animationDuration: '0.4s, 0.4s',
    },

    '& > $navCollapseItem $navCollapseBtn:hover > $navCollapseItem': {
      display: 'block',
      top: 0,
      opacity: 1,
      visibility: 'visible',
      animationName: '$slideIn, $moveUp',
      animationTimingFunction: 'ease, ease',
      animationDuration: '0.4s, 0.4s',
    },
  },
  navCollapseBtnInner: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  navText: {
    flex: 1,
    fontSize: 14,
    letterSpacing: 0.25,
  },
  iconRoot: {
    marginRight: 16,
    fontSize: 20,
  },
  subCollapse: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.horizontalNav.textColor,
    '& .Cmt-navCollapseBtn': {
      color: theme.palette.horizontalNav.textColor,
      '&:hover, &:focus': {
        color: theme.palette.horizontalNav.textDarkColor,
        backgroundColor: theme.palette.horizontalNav.menuHoverBgColor,
        '& .Cmt-icon-root': {
          color: theme.palette.horizontalNav.textDarkColor,
        },
      },
    },
    '&.active .Cmt-nav-menu-link.active': {
      color: theme.palette.horizontalNav.textActiveColor,
      backgroundColor: theme.palette.horizontalNav.menuActiveBgColor,
      '& .Cmt-icon-root': {
        color: theme.palette.horizontalNav.textActiveColor,
      },
      '&:hover, &:focus': {
        '& .Cmt-icon-root': {
          color: theme.palette.horizontalNav.textActiveColor,
        },
      },
    },
  },
}));

export default useStyles;
