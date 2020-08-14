import React from "react";
import { withRouter } from "react-router-dom";
import {useSelector} from "react-redux";
import Header from "./Header/index";
import SideBar from "../../SideBar/index";
// import Footer from "components/Footer";
// import Tour from "components/Tour/index";
import { COLLAPSED_DRAWER, FIXED_DRAWER } from "../../../constants/ActionTypes";
// import ColorOption from "containers/Customizer/ColorOption";
import { isIOS, isMobile } from "react-device-detect";

const Vertical =(props)=> {

  const { drawerType } = useSelector(({settings})=>settings);
    const drawerStyle = drawerType.includes(FIXED_DRAWER) ? "fixed-drawer" : drawerType.includes(COLLAPSED_DRAWER) ? "collapsible-drawer" : "mini-drawer";

    //set default height and overflow for iOS mobile Safari 10+ support.
    if (isIOS && isMobile) {
      document.body.classList.add("ios-mobile-view-height");
    } else if (document.body.classList.contains("ios-mobile-view-height")) {
      document.body.classList.remove("ios-mobile-view-height");
    }

    return (
      <div className={`app-container ${drawerStyle}`}>
        {/* <Tour/> */}

        <SideBar/>
        <div className="app-main-container">
          <div className="app-header">
            <Header/>
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
