import React from 'react';
import CustomScrollbars from '../../util/CustomScrollbars';
import Navigation from "../../components/Navigation";

const SideBarContent = () => {
  const navigationMenus = [
    {
      name: 'sidebar.main',
      type: 'section',
      children: [
        {
          name: 'sidebar.dashboard',
          type: 'item',
          icon: 'view-dashboard',
          link: '/app/dashboard'
        },
        {
          name: 'sidebar.dronemanage',
          icon: 'flight-takeoff',
          type: 'collapse',
          children: [
            {
              name: 'Drone',
              icon: 'airplane',
              type: 'item',
              link: '/app/dms/drone'
            },
            {
              name: 'Drone Report',
              icon: 'receipt',
              type: 'item',
              link: '/app/dms/dronereport'
            },
            {
              name: 'Maintenance',
              icon: 'maintenance',
              type: 'item',
              link: '/app/dms/maintenance'
            }
          ]
        },
        {
          name: 'sidebar.dronecontrol',
          type: 'item',
          icon: 'arrows',
          link: '/app/dronecontrol'
        },
        {
          name: 'sidebar.mission',
          icon: 'dot-circle',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.missionlist',
              icon: 'assignment',
              type: 'item',
              link: '/app/missionplanner/missionlist'
            },
            {
              name: 'sidebar.missionplanner',
              icon: 'plus-square',
              type: 'item',
              link: '/app/missionplanner/missionview'
            }
          ]
        },
        {
          name: 'sidebar.inventory',
          icon: 'folder',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.categories',
              icon: 'apps',
              type: 'item',
              link: '/app/ims/categories'
            },
            {
              name: 'sidebar.orders',
              icon: 'assignment-check',
              type: 'item',
              link: '/app/ims/orders'
            }
          ]
        },
        {
          name: 'sidebar.weather',
          type: 'item',
          icon: 'cloud',
          link: '/app/weather'
        },
        {
          name: 'sidebar.events',
          type: 'item',
          icon: 'format-list-bulleted',
          link: '/app/events'
        },
        {
          name: 'sidebar.issues',
          type: 'item',
          icon: 'alert-circle',
          link: '/app/issues'
        },
        {
          name: 'sidebar.users',
          type: 'item',
          icon: 'account-circle',
          link: '/app/users'
        }

      ]
    }
  ];

  return (
    <CustomScrollbars className=" scrollbar">
      <Navigation menuItems={navigationMenus} />
    </CustomScrollbars>
  );
};

export default SideBarContent;
