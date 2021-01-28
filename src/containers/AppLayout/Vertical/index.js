import React, { useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header/index";
import SideBar from "../../SideBar/index";
import Snackbar from '@material-ui/core/Snackbar';
// import Footer from "components/Footer";
// import Tour from "components/Tour/index";
import { COLLAPSED_DRAWER, FIXED_DRAWER } from "../../../constants/ActionTypes";
import { NotificationContainer, NotificationManager } from 'react-notifications';
// import ColorOption from "containers/Customizer/ColorOption";
import { isIOS, isMobile } from "react-device-detect";
import url from '../../../url';
import * as actions from '../../../store/actions/Common';
import { useDispatch } from 'react-redux';
import io from "socket.io-client";
import { Offline, Online, Detector } from "react-detect-offline";
import MuiAlert from '@material-ui/lab/Alert';

/**
 * This shows the main page which consists of header, sidebar and main components accroding to routes.
 * @param {Component} - Children from Routing
 * @returns {Vertical} - Returns the sidebar, header and components according to routes
 *
 */
const Vertical = (props) => {

  const { drawerType } = useSelector(({ settings }) => settings);
  const { userId } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();
  const drawerStyle = drawerType.includes(FIXED_DRAWER) ? "fixed-drawer" : drawerType.includes(COLLAPSED_DRAWER) ? "collapsible-drawer" : "mini-drawer";

  //set default height and overflow for iOS mobile Safari 10+ support.
  if (isIOS && isMobile) {
    document.body.classList.add("ios-mobile-view-height");
  } else if (document.body.classList.contains("ios-mobile-view-height")) {
    document.body.classList.remove("ios-mobile-view-height");
  }
  const socket = useRef();

  //display notifications as alert messages
  const printNotifications = (data) => {
    if (data.message !== undefined) {
      NotificationManager.info(data.message);
    }
    // console.log("Notification ", data);
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  //connect to a socket
  useEffect(() => {
    // console.log(userId);
    socket.current = io(url);
    if (socket.current.connected) {
      socket.current.off("notifications");
    }
    socket.current.emit("joinDMS", userId);
    socket.current.emit("joinDMS", 'asasdds');
    socket.current.on("notifications", printNotifications);
    socket.current.on('disconnect', (reason) => {
      // console.log(reason, "reconnecting after disconnect")
      // if (reason === 'io server disconnect' || reason === 'transport close disconnected') {
      // the disconnection was initiated by the server, you need to reconnect manually
      socket.current.connect();
      socket.current.emit("joinDMS", userId);
      // }
      // else the socket will automatically try to reconnect
    });
    return function cleanup() {
      // console.log("Base disconnect cleanup")
      socket.current.off("notifications");
      socket.current.disconnect();
    };
  }, [userId]);

  //get notifications
  useEffect(() => {
    dispatch(actions.getNotifications());
  }, [dispatch])

  return (
    <div className={`app-container ${drawerStyle}`}>
      {/* <Tour/> */}
      <NotificationContainer />
      <SideBar />
      <div className="app-main-container">
        <div className="app-header">
          <Header />
        </div>

        <main className="app-main-content-wrapper">
          <div className="app-main-content">
            {props.children}
            <Detector
              render={({ online }) => (
                !online?<Snackbar open={!online}>
                  <Alert  severity="error">
                    {"You're offline right now. Check your connection."}
                </Alert></Snackbar>:null
              )}
            />
          </div>
          {/* <Footer/> */}
        </main>
      </div>
      {/* <ColorOption/> */}
    </div>
  );
};

export default withRouter(Vertical);
