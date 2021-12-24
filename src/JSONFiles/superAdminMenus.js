import React from 'react';
import IntlMessages from '../util/IntlMessages';
import {
  Dashboard, FlightTakeoff, Flight, AirplanemodeActive, AddAlert, LocalHospital,
  ControlCamera,
  Navigation, SwapCalls, Assignment, ListAlt, AssignmentTurnedIn,
  WbSunny, People, Event, Apps, Category, LooksOne, AllInclusive

} from '@material-ui/icons';

export const superAdminMenus = [
    {
      // name: <IntlMessages id={'sidebar.main'} />,
      name: '',
      type: 'section',
      children: [
        {
          name: <IntlMessages id={'sidebar.dashboard'} />,
          type: 'item',
          icon: <Dashboard />,
          link: '/app/dashboard'
        },
        // {
        //   name: <IntlMessages id={'sidebar.dronemanage'} />,
        //   icon: <FlightTakeoff />,
        //   type: 'collapse',
        //   children: [
        //     {
        //       name: 'Drone',
        //       icon: <AirplanemodeActive />,
        //       type: 'item',
        //       link: '/app/dms/drone'
        //     },
            // {
            //   name: 'Drone Report',
            //   icon: 'receipt',
            //   type: 'item',
            //   link: '/app/dms/dronereport'
            // },
            // {
            //   name: 'Hospitals',
            //   icon: <LocalHospital />,
            //   type: 'item',
            //   link: '/app/dms/hospital'
            // }
        //   ]
        // },
        {
          name: <IntlMessages id={'sidebar.dronecontrol'} />,
          type: 'collapse',
          icon: <ControlCamera />,
          children:[
            {
              name: <IntlMessages id={'sidebar.individual'}/>,
              type: 'item',
              link: '/app/dronecontrol',
              icon: <LooksOne />
            },
            {
              name: <IntlMessages id={'sidebar.all'}/>,
              type: 'item',
              link: '/app/dronecontrolall',
              icon: <AllInclusive />
            }
          ]
        },
        
        {
          name: <IntlMessages id={'sidebar.users'} />,
          icon: <People />,
          type: 'collapse',
          children: [
            {
              name: 'Hospitals',
              icon: <LocalHospital />,
              type: 'item',
              link: '/app/users/list-hospitals'
            },
            {
              name: 'Regulatory Bodies',
              icon: <LocalHospital />,
              type: 'item',
              link: '/app/users/list-regulatory-bodies'
            },
          ]
        },

      ]
    }
  ];