import React, { cloneElement, isValidElement, useEffect, useMemo } from 'react';
import { Collapse, List, ListItem } from '@material-ui/core';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';
import NavSection from './NavSection';
import NavMenuItem from './NavMenuItem';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import { semiDarkTheme } from '../../../containers/themes/themeColors';
const useStyles = makeStyles(theme => ({
  navCollapse: {
    position: 'relative',
    '&.open': {
      '& $navCollapseBtn': {
        color: theme.palette.sidebar.textDarkColor,
      },
      '& $iconRoot': {
        color: theme.palette.primary.main,
      },
    },
    '& .Cmt-navHeader': {
      paddingLeft: 36,
    },
  },
  navCollapseBtn: {
    position: 'relative',
    padding: '0 16px 0 0',
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
    '&:hover, &:focus': {
      backgroundColor: 'transparent',
    },
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      paddingLeft: 16,
    },
  },
  navCollapseBtnInner: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '9px 16px 9px 32px',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    '&:hover, &:focus': {
      color: theme.palette.sidebar.textDarkColor,
      backgroundColor: theme.palette.sidebar.navHoverBgColor,
      '& $iconRoot': {
        color: theme.palette.sidebar.textDarkColor,
      },
    },
    '.Cmt-miniLayout &': {
      paddingRight: 13,
      paddingLeft: 13,
    },
    '.Cmt-miniLayout .Cmt-sidebar-content:hover &': {
      paddingRight: 16,
      paddingLeft: 32,
    },
  },
  navText: {
    flex: 1,
    fontSize: 14,
    letterSpacing: 0.25,
    whiteSpace: 'nowrap',
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      display: 'none',
    },
  },
  iconRoot: {
    marginRight: 16,
    fontSize: 20,
  },
  navArrow: {
    position: 'absolute',
    left: 8,
    top: '50%',
    zIndex: 1,
    transform: 'translateY(-50%)',
    fontSize: 16,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      display: 'none',
    },
  },
  navCollapseItem: {
    position: 'relative',
    '& .Cmt-icon-root': {
      transition: 'all 0.3s ease',
      transform: 'translateX(-100%)',
      opacity: 0,
      visibility: 'hidden',
      marginRight: 0,
    },
    '& .Cmt-nav-text': {
      transition: 'all 0.35s ease',
      marginLeft: -20,
    },
    '& .Cmt-nav-menu-link': {
      padding: '9px 16px 9px 70px',
      transition: 'all 0.3s ease',
      '&:hover, &:focus': {
        '& .Cmt-icon-root': {
          transform: 'translateX(0)',
          marginRight: 10,
          opacity: 1,
          visibility: 'visible',
        },
        '& .Cmt-nav-text': {
          marginLeft: 0,
        },
      },
      '&.active': {
        '& .Cmt-icon-root': {
          transform: 'translateX(0)',
          marginRight: 10,
          opacity: 1,
          visibility: 'visible',
        },
        '& .Cmt-nav-text': {
          marginLeft: 0,
        },
      },
      '.Cmt-miniLayout &': {
        paddingRight: 13,
        paddingLeft: 13,
      },
      '.Cmt-miniLayout .Cmt-sidebar-content:hover &': {
        paddingRight: 16,
        paddingLeft: 70,
      },
    },
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      display: 'none',
    },
  },
}));

const NavCollapse = props => {
  const history = useHistory();
  const classes = useStyles();

  const { name, icon, children = [] } = props;
  const isExpandable = useMemo(() => children.length, [children]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (isUrlInChildren(props, history.location.pathname)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, []);

  function handleClick() {
    setOpen(!open);
  }

  /**
   * Check if the given url can be found
   * in one of the given parent's children
   *
   * @param parent
   * @param url
   * @returns {boolean}
   */
  function isUrlInChildren(parent, url) {
    if (!parent.children) {
      return false;
    }

    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].children) {
        if (isUrlInChildren(parent.children[i], url)) {
          return true;
        }
      }

      if (parent.children[i].link === url || url.includes(parent.children[i].link)) {
        return true;
      }
    }

    return false;
  }

  const renderIcon = () => {
    if (icon && isValidElement(icon)) {
      return cloneElement(icon, {
        className: classes.iconRoot,
      });
    }

    return null;
  };

  const MenuCollapse = (
    <ListItem className={classes.navCollapseBtn} button onClick={handleClick}>
      <Box component="span" className={classes.navCollapseBtnInner}>
        {/* Display the expand menu if the item has children */}

        {/* Display an icon if any */}
        {renderIcon()}
        <Box component="span" className={classes.navText}>
          {name}
        </Box>

      </Box>
      {isExpandable && !open && <IconExpandMore className={classes.navArrow} />}
      {isExpandable && open && <IconExpandLess className={classes.navArrow} />}
    </ListItem>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse className={classes.navCollapseItem} in={open} timeout="auto">
      <List component="div" disablePadding>
        {children.map((item, index) => {
          switch (item.type) {
            case 'section':
              return <NavSection {...item} key={index} />;
            case 'collapse':
              return <NavCollapse {...item} key={index} />;
            case 'item':
              return <NavMenuItem {...item} key={index} />;
            default:
              return null;
          }
        })}
      </List>
    </Collapse>
  ) : null;

  return (
    <Box className={clsx(classes.navCollapse, `${open ? 'open' : ''}`)}>
      {MenuCollapse}
      {MenuItemChildren}
    </Box>
  );
};

export default NavCollapse;
