import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header/index";
import SideBar from "../../SideBar/index";
// import Footer from "components/Footer";
// import Tour from "components/Tour/index";
import { COLLAPSED_DRAWER, FIXED_DRAWER } from "../../../constants/ActionTypes";
// import ColorOption from "containers/Customizer/ColorOption";
import { isIOS, isMobile } from "react-device-detect";
import { socket } from '../../../socket';
import * as actions from '../../../store/actions/Common';
import {useDispatch} from 'react-redux';

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

  const printNotifications = (data) => {
    console.log(data);
  }

  useEffect(() => {
    console.log(userId);
    socket.emit("joinDMS", userId);
    socket.on("notifications", printNotifications);
    socket.on('disconnect', (reason) => {
      console.log(reason, "disconnected")
      // if (reason === 'io server disconnect' || reason === 'transport close disconnected') {
      // the disconnection was initiated by the server, you need to reconnect manually
      socket.connect();
      socket.emit("joinDMS", userId);
      // }
      // else the socket will automatically try to reconnect
    });
    return function cleanup() {
      console.log("Base disconnect")
      socket.off("notifications");
      socket.disconnect();
    };
  }, [socket, userId]);

  useEffect(() => {
    dispatch(actions.getNotifications());
  }, [dispatch])

  return (
    <div className={`app-container ${drawerStyle}`}>
      {/* <Tour/> */}

      <SideBar />
      <div className="app-main-container">
        <div className="app-header">
          <Header />
        </div>

        <main className="app-main-content-wrapper">
          <div className="app-main-content">
            {props.children}
          </div>
          {/* <Footer/> */}
        </main>
      </div>
      {/* <ColorOption/> */}
    </div>
  );
};

export default withRouter(Vertical);
