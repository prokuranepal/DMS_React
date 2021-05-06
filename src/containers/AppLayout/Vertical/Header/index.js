import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
// import Grid from "@material-ui/core/Grid";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { COLLAPSED_DRAWER, FIXED_DRAWER } from "../../../../constants/ActionTypes";
// import SearchBox from "components/SearchBox";
import MailNotification from "../../../../components/MailNotification";
import AppNotification from "../../../../components/AppNotification";
import CardHeader from "../../../../components/dashboard/Common/CardHeader/index";
import { switchLanguage, toggleCollapsedNav } from "../../../../store/actions/Setting";
import IntlMessages from "../../../../util/IntlMessages";
import LanguageSwitcher from "../../../../components/LanguageSwitcher/index";
import UserInfo from '../../../../components/UserInfo'
import {makeStyles} from '@material-ui/core'

const useStyles=makeStyles((theme)=>({
  container:{
    backgroundColor:'#5A6AB2',
    paddingLeft:'4%'
  }
}))

/**
 * This shows the header of the application
 * @param - No Params
 * @returns {Header} - Returns the header containing notification icon
 * 
 */

const Header =()=> {
  const classes=useStyles()

  const dispatch = useDispatch();
  const { drawerType, locale, navCollapsed } = useSelector(({settings}) => settings);
  const [langSwitcher,setLangSwitcher]=useState(false);
  const [mailNotification,setMailNotification]=useState(false);
  const [appNotification,setAppNotification]=useState(false);
  // const [searchBox,setSearchBox]=useState(false);
  // const [apps,setApps]=useState(false);
  // const [searchText,setSearchText]=useState('');

  const onAppNotificationSelect = () => {
    setAppNotification(!appNotification)
  };

  const onMailNotificationSelect = () => {
    setMailNotification(!mailNotification)
  };
  const onLangSwitcherSelect = (event) => {
    setLangSwitcher(!langSwitcher);
  };

  const handleRequestClose = () => {
    setLangSwitcher(false);
    setMailNotification(false);
  };

  const onToggleCollapsedNav = (e) => {
    const val = !navCollapsed;
    dispatch(toggleCollapsedNav(val));
  };

  const onSwitchLanguage = (lang) => {
    dispatch(switchLanguage(lang))
  };

    const drawerStyle = drawerType.includes(FIXED_DRAWER) ? "d-block d-xl-none" : drawerType.includes(COLLAPSED_DRAWER) ? "d-block" : "d-none";

    return (
      <AppBar className={`app-main-header `} className={classes.container}  >
        <Toolbar className="app-toolbar" disableGutters={false}>
          
          <IconButton className={`jr-menu-icon mr-3 ${drawerStyle}`} aria-label="Menu"
                      onClick={onToggleCollapsedNav}>
            <span className="menu-icon"/>
          </IconButton>

          <Link to='/app' className="app-logo mr-2 d-none d-sm-block" >
            <img src={require("../../../../assets/images/dashboard/hiveLogo_BG.png")} alt="DMS" title="DMS"/>
          </Link>
          {/* <div style={{minWidth: '100px', maxWidth: '80%'}}>
            <marquee>Drone MX710 is flying from Dharan to Biratnagar, Drone MX710 is flying from Dharan to Biratnagar</marquee>
            </div> */}
          <ul className="header-notifications list-inline ml-auto">
            {/* <li className="list-inline-item">
              <Dropdown
                className="quick-menu"
                isOpen={langSwitcher}
                toggle={onLangSwitcherSelect}>

                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown">
                  <IconButton className="icon-btn">
                    <i className={`flag flag-24 flag-${locale.icon}`}/>
                  </IconButton>
                </DropdownToggle>

                <DropdownMenu right className="w-50">
                  <LanguageSwitcher switchLanguage={onSwitchLanguage}
                                    handleRequestClose={handleRequestClose}/>
                </DropdownMenu>
              </Dropdown>


            </li> */}
            <li className="list-inline-item app-tour">
              <Dropdown
                className="quick-menu"
                isOpen={appNotification}
                toggle={onAppNotificationSelect}>

                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown">
                  <IconButton className="icon-btn">
                    <i className="zmdi zmdi-notifications-none icon-alert animated infinite wobble"/>
                  </IconButton>
                </DropdownToggle>

                <DropdownMenu right>
                  <CardHeader styleName="align-items-center"
                              heading={<IntlMessages id="appNotification.title"/>}/>
                  <AppNotification/>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="list-inline-item app-tour">
              <UserInfo/>
            </li>
            {/* <li className="list-inline-item mail-tour">
              <Dropdown
                className="quick-menu"
                isOpen={mailNotification}
                toggle={onMailNotificationSelect}
              >
                <DropdownToggle
                  className="d-inline-block"
                  tag="span"
                  data-toggle="dropdown">

                  <IconButton className="icon-btn">
                    <i className="zmdi zmdi-comment-alt-text zmdi-hc-fw"/>
                  </IconButton>
                </DropdownToggle>


                <DropdownMenu right>
                  <CardHeader styleName="align-items-center"
                              heading={<IntlMessages id="mailNotification.title"/>}/>
                  <MailNotification/>
                </DropdownMenu>
              </Dropdown>
            </li> */}

          </ul>
          
          {/* <div className="ellipse-shape"/> */}
        </Toolbar>
      </AppBar>
    );
  };


export default withRouter(Header);
