import React from 'react';
import IntlMessages from '../util/IntlMessages';
import {
  Dashboard, FlightTakeoff, Flight, AirplanemodeActive, AddAlert, LocalHospital,
  ControlCamera,
  Navigation, SwapCalls, Assignment, ListAlt, AssignmentTurnedIn,
  WbSunny, People, Event, Apps, Category, LooksOne, AllInclusive

} from '@material-ui/icons';

export const regulatoryMenus = [
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
        {
          name: 'Hospitals',
          type: 'item',
          icon: <LocalHospital  />,
          link: '/app/hospitals'
        },
        
        {
          name: <IntlMessages id={'sidebar.dronecontrol'} />,
          type: 'collapse',
          icon: <ControlCamera />,
          children:[
            // {
            //   name: <IntlMessages id={'sidebar.individual'}/>,
            //   type: 'item',
            //   link: '/app/dronecontrol',
            //   icon: <LooksOne />
            // },
            {
              name: <IntlMessages id={'sidebar.all'}/>,
              type: 'item',
              link: '/app/dronecontrolall',
              icon: <AllInclusive />
            }
          ]
        },

      ]
    }
  ];