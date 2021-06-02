import React, { cloneElement, isValidElement, useEffect, useMemo } from 'react';
import { List, ListItem } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useHistory } from 'react-router-dom';
import NavMenuItem from './NavMenuItem';
import useStyles from './NavCollapse.style';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';

const NavCollapse = props => {
  const history = useHistory();
  const classes = useStyles();

  const { name, icon, className, children = [] } = props;
  const isExpandable = useMemo(() => children.length, [children]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (isUrlInChildren(props, history.location.pathname)) {
      setOpen(true);
    } else {
      setOpen(false);
    }

    history.listen((location, action) => {
      if (isUrlInChildren(props, location.pathname)) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    });
  }, []);

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
        className: clsx(classes.iconRoot, 'Cmt-icon-root'),
      });
    }

    return null;
  };

  const MenuItemChildren = isExpandable ? (
    <List component="div" disablePadding className={classes.navCollapseItem}>
      {children.map((item, index) => {
        switch (item.type) {
          case 'collapse':
            return <NavCollapse {...item} key={index} className={classes.subCollapse} />;
          case 'item':
            return <NavMenuItem {...item} key={index} />;
          default:
            return null;
        }
      })}
    </List>
  ) : null;

  const MenuCollapse = (
    <ListItem
      component="div"
      disableGutters
      className={clsx(classes.navCollapseBtn, 'Cmt-navCollapseBtn', `${open ? 'active' : ''}`)}>
      <Box component="span" className={classes.navCollapseBtnInner}>
        {renderIcon()}
        <Box component="span" className={classes.navText}>
          {name}
        </Box>
        {/* Display the expand menu if the item has children */}
        {isExpandable && !open && <ArrowDropDownIcon className={classes.navArrow} />}
        {isExpandable && open && <ArrowDropUpIcon className={classes.navArrow} />}
        {/* Display an icon if any */}
      </Box>
      {MenuItemChildren}
    </ListItem>
  );

  return (
    <Box className={clsx(classes.navCollapse, 'Cmt-navCollapse', className, `${open ? 'active' : ''}`)}>{MenuCollapse}</Box>
  );
};

export default NavCollapse;
