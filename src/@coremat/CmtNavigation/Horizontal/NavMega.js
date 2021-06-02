import React, { cloneElement, isValidElement, useEffect, useMemo } from 'react';
import { List, ListItem } from '@material-ui/core';
import NavMenuItem from './NavMenuItem';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';
import useStyles from './NavMega.style';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const RenderIcon = ({ icon }) => {
  const classes = useStyles();

  if (icon && isValidElement(icon)) {
    return cloneElement(icon, {
      className: clsx(classes.iconRoot, 'Cmt-icon-root'),
    });
  }

  return null;
};

const NavMegaColumn = props => {
  const classes = useStyles();
  const { name, icon, children = [] } = props;
  const totalItems = useMemo(() => children.length, [children]);

  const MenuItemChildren = totalItems ? (
    <List component="div" disablePadding className={classes.navMegaColumnItems}>
      {children.map((item, index) => (
        <NavMenuItem {...item} key={index} />
      ))}
    </List>
  ) : null;

  const MenuCollapse = (
    <ListItem component="div" disableGutters className={clsx(classes.navMegaColumnInner, 'Cmt-navMegaColumnInner')}>
      {name && (
        <Box component="span" className={classes.navMegaColumnLabel}>
          <RenderIcon icon={icon} />
          <Box component="span" className={classes.navText}>
            {name}
          </Box>
        </Box>
      )}
      {MenuItemChildren}
    </ListItem>
  );

  return <Box className={clsx(classes.navMegaColumn, 'Cmt-navMega-column')}>{MenuCollapse}</Box>;
};

const NavMega = props => {
  const classes = useStyles();
  const history = useHistory();
  const { name, icon, children = [] } = props;
  const totalItems = useMemo(() => children.length, [children]);
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

  const MenuItemColumns = totalItems ? (
    <List component="div" disablePadding className={clsx(classes.navMegaColumnsWrapper, 'Cmt-navMegaColumnsWrapper')}>
      {children.map((item, index) => (
        <NavMegaColumn {...item} key={index} />
      ))}
    </List>
  ) : null;

  const MenuCollapse = (
    <ListItem
      component="div"
      disableGutters
      className={clsx(classes.navMegaBtn, 'Cmt-navMegaBtn', `${open ? 'active' : ''}`)}>
      <Box component="span" className={classes.navMegaBtnInner}>
        <RenderIcon icon={icon} />
        <Box component="span" className={classes.navText}>
          {name}
        </Box>
        {/* Display the expand menu if the item has children */}
        {totalItems > 0 && !open && <ArrowDropDownIcon className={classes.navArrow} />}
        {totalItems > 0 && open && <ArrowDropUpIcon className={classes.navArrow} />}
        {/* Display an icon if any */}
      </Box>
      {MenuItemColumns}
    </ListItem>
  );

  return (
    <Box className={clsx(classes.navMega, 'Cmt-navMega', `Cmt-navMega-${totalItems}`, `${open ? 'active' : ''}`)}>
      {MenuCollapse}
    </Box>
  );
};

export default NavMega;
