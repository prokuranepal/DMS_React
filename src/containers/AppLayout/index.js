import React from "react";
import AppLayouts from "./AppLayouts";
import Routes from "../../app/routes";
// import {useSelector} from "react-redux";

const AppLayout = () => {

  // const horizontalNavPosition = useSelector(({settings}) => settings.horizontalNavPosition);


  const Layout = AppLayouts["Vertical"];
    return (
      <Layout>
        <Routes/>
      </Layout>
    );
};

export default AppLayout;
