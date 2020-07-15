import React from 'react';
import SidebarItem from './SidebarItem/SidebarItem';
import Userprofile from './Userprofile/Userprofile';

const SideBar = () => {
  const SidebarLists = [
    {
      "name": "Dashboard",
      "iconName": "dashboard",
      "subType": [],
      "route": "/dashboard"
    },
    {
      "name": "DMS",
      "iconName": "airplanemode_active",
      "subType": [],
      "route": "/dms"
    },{
      "name": "Drone control",
      "iconName": "control_camera",
      "subType": [],
      "route": "/dronecontrol"
    },
    {
      "name": "IMS",
      "iconName": "dns",
      "subType": [],
      "route": "/ims"
    },
    {
      "name": "Weather",
      "iconName": "cloude",
      "subType": [],
      "route": "/weather"
    },
    {
      "name": "Issue",
      "iconName": "error",
      "subType": [],
      "route": "/issue"
    },
    {
      "name": "Event log",
      "iconName": "login",
      "subType": [],
      "route": "/eventlog"
    },
    {
      "name": "Mission planner",
      "iconName": "event_note",
      "subType": [],
      "route": "/missionplanner"
    },
    {
      "name": "Mission planner",
      "iconName": "event_note",
      "subType": [],
      "route": "/missionplanner"
    },
    {
      "name": "Mission planner",
      "iconName": "event_note",
      "subType": [],
      "route": "/missionplanner"
    },
    {
      "name": "Users",
      "iconName": "user",
      "subType": [],
      "route": "/users"
      // "name": "Inventory Management System",
      // "subType": [
      //     {
      //         "name": "Add Items",
      //         "route": "/add"
      //     },
      //     {
      //         "name": "Orders",
      //         "route": "/orders"
      //     },
      // ],
      // "route": "/ims"
    }
  ]

  const menu =
    SidebarLists.map((SidebarLists, index) => {
      return (
        <SidebarItem 
          iconName={SidebarLists.iconName} 
          name={SidebarLists.name} 
          route={SidebarLists.route} 
          subType={SidebarLists.subType}
          key = {index}
        />
      );
    })

  return (
    <div style={{flex:1}}>
      <Userprofile />
      <hr />
      {menu}
    </div>
  );
};

export default SideBar;
