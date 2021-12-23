import React, {useEffect, useState} from "react";
import AppLayouts from "./AppLayouts";
import AdminRoutes from "../../app/adminRoutes";
import SuperAdminRoutes from "../../app/superadminRoutes";
import RegulatoryRoutes from "../../app/regulatoryRoutes";
import Layout from './VerticalLayouts/VerticalMinimal';
import { useSelector, useDispatch } from "react-redux";
import * as userActions from '../../store/actions/users';
// import {useSelector} from "react-redux";

const AppLayout = () => {

  const userType = useSelector(({auth}) => auth.userType);
  const dispatch = useDispatch();
  const [routes, setRoutes] = useState(null)
  // console.log("AppLayout",userType)
  
  useEffect(() => {
    console.log(userType)
    switch(userType){
      case "Super Admin":
        setRoutes(<SuperAdminRoutes/>);
        break;
      case "Hospital":
        setRoutes(<AdminRoutes/>);
        break;
      case "Regulatory Body":
        setRoutes(<RegulatoryRoutes/>);
        break;
      default:
        setRoutes(<SuperAdminRoutes/>)
  
    }
  },[userType])

  useEffect(() => {
    dispatch(userActions.getSelfUserData()); 
  },[dispatch])
  
  // const Layout = AppLayouts["Vertical"];
    return (
      <Layout>
        {routes}
      </Layout>
    );
};

export default AppLayout;
