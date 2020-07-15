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
          type: 'item',
          icon: 'view-dashboard',
          link: '/app/drone'
        },
        {
          name: 'sidebar.dronecontrol',
          type: 'item',
          icon: 'view-dashboard',
          link: '/app/dronecontrol'
        },
        {
          name: 'sidebar.mission',
          icon: 'view-dashboard',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.missionlist',
              icon: 'view-dashboard',
              type: 'item',
              link: '/app/missionplanner/missionlist'
            },
            {
              name: 'sidebar.missionplanner',
              icon: 'view-dashboard',
              type: 'item',
              link: '/app/missionplanner/missionview'
            }
          ]
        },
        {
          name: 'sidebar.inventory',
          icon: 'view-dashboard',
          type: 'collapse',
          children: [
            {
              name: 'sidebar.categories',
              icon: 'view-dashboard',
              type: 'item',
              link: '/app/ims/categories'
            },
            {
              name: 'sidebar.orders',
              icon: 'view-dashboard',
              type: 'item',
              link: '/app/ims/orders'
            }
          ]
        },
        {
          name: 'sidebar.weather',
          type: 'item',
          icon: 'view-dashboard',
          link: '/app/weather'
        },
        {
          name: 'sidebar.events',
          type: 'item',
          icon: 'view-dashboard',
          link: '/app/events'
        },
        {
          name: 'sidebar.issues',
          type: 'item',
          icon: 'store',
          link: '/app/issues'
        },
        {
          name: 'sidebar.users',
          type: 'item',
          icon: 'view-store',
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
