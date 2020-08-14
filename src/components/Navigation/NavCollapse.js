import React, {useEffect} from 'react';
import {Collapse, List, ListItem} from '@material-ui/core';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import {useHistory} from 'react-router-dom';

import IntlMessages from "../../util/IntlMessages";
import NavSection from "./NavSection";
import NavMenuItem from "./NavMenuItem";

const NavCollapse = props => {
  const history = useHistory();

  const {name, icon, children = []} = props;
  const isExpandable = children && children.length > 0;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (isUrlInChildren(props, history.location.pathname)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, []);

  function handleClick() {
    setOpen(!open)
  }

  history.listen((location, action) => {
    if (isUrlInChildren(props, location.pathname)) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  });

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

  const MenuCollapse = (
    <ListItem className='nav-collapse-btn' button onClick={handleClick}>
      {/* Display an icon if any */}
      {!!icon && (
        <i className={'zmdi zmdi-hc-fw  zmdi-' + icon}/>
      )}
      <span className='nav-text'><IntlMessages id={name}/></span>
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore className='nav-arrow'/>}
      {isExpandable && open && <IconExpandLess className='nav-arrow'/>}
    </ListItem>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse className='nav-collapse-item' in={open} timeout="auto">
      <List component="div" disablePadding>
        {
          children.map((item, index) => {
            switch (item.type) {
              case 'section' :
                return <NavSection {...item} key={index}/>;
              case 'collapse' :
                return <NavCollapse {...item} key={index}/>;
              case 'item' :
                return <NavMenuItem {...item} key={index}/>;
            }
          })
        }
      </List>
    </Collapse>
  ) : null;

  return (
    <div className={`nav-collapse ${open ? 'open' : ''}`}>
      {MenuCollapse}
      {MenuItemChildren}
    </div>
  )
};

export default NavCollapse;