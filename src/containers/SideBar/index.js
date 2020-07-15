import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import UserInfo from '../../components/UserInfo';
import {COLLAPSED_DRAWER, FIXED_DRAWER, HORIZONTAL_NAVIGATION} from '../../constants/ActionTypes';
import {toggleCollapsedNav, updateWindowWidth} from '../../store/actions/Setting';
import SideBarContent from "./SideBarContent";

const SideBar = () => {
  const dispatch = useDispatch();
  const {navCollapsed, drawerType, width, navigationStyle} = useSelector(({settings}) => settings);

  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(updateWindowWidth(window.innerWidth))
    });
  }, [dispatch]);

  const onToggleCollapsedNav = (e) => {
    dispatch(toggleCollapsedNav());
  };

  let drawerStyle = drawerType.includes(FIXED_DRAWER) ? 'd-xl-flex' : drawerType.includes(COLLAPSED_DRAWER) ? '' : 'd-flex';
  let type = 'permanent';
  if (drawerType.includes(COLLAPSED_DRAWER) || (drawerType.includes(FIXED_DRAWER) && width < 1200)) {
    type = 'temporary';
  }

  if (navigationStyle === HORIZONTAL_NAVIGATION) {
    drawerStyle = '';
    type = 'temporary';
  }

  console.log("navCollapsed in drawer file",type, navCollapsed)
  return (
    <div className={`app-sidebar d-none ${drawerStyle}`}>
      <Drawer className="app-sidebar-content"
                variant={type}
                open={type.includes('temporary') ? navCollapsed : true}
                onClose={onToggleCollapsedNav}
                classes={{
                  paper: 'side-nav',
                }}
      >
        <UserInfo/>
        <SideBarContent/>
      </Drawer>
    </div>
  );
};


export default withRouter(SideBar);

