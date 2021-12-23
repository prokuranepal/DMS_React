import React from 'react';
import IntlMessages from '../util/IntlMessages';
import {
  Dashboard, FlightTakeoff, Flight, AirplanemodeActive, AddAlert, LocalHospital,
  ControlCamera,
  Navigation, SwapCalls, Assignment, ListAlt, AssignmentTurnedIn,
  WbSunny, People, Event, Apps, Category, LooksOne, AllInclusive

} from '@material-ui/icons';

export const adminMenus = [
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
          name: <IntlMessages id={'sidebar.dronemanage'} />,
          icon: <FlightTakeoff />,
          type: 'collapse',
          children: [
            {
              name: 'Drone',
              icon: <AirplanemodeActive />,
              type: 'item',
              link: '/app/dms/drone'
            },
            // {
            //   name: 'Drone Report',
            //   icon: 'receipt',
            //   type: 'item',
            //   link: '/app/dms/dronereport'
            // },
            {
              name: 'Maintenance',
              icon: <AddAlert />,
              type: 'item',
              link: '/app/dms/maintenance'
            },
            {
              name: 'Healthposts',
              icon: <LocalHospital />,
              type: 'item',
              link: '/app/dms/healthpost'
            }
          ]
        },
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
          name: <IntlMessages id={'sidebar.mission'} />,
          icon: <SwapCalls />,
          type: 'collapse',
          children: [
            {
              name: <IntlMessages id={'sidebar.missionlist'} />,
              icon: <ListAlt />,
              type: 'item',
              link: '/app/missionplanner/missionlist'
            },
            {
              name: <IntlMessages id={'sidebar.missionplanner'} />,
              icon: <Navigation />,
              type: 'item',
              link: '/app/missionplanner/missionview'
            }
          ]
        },
        {
          name: <IntlMessages id={'sidebar.inventory'} />,
          icon: <Category />,
          type: 'collapse',
          children: [
            {
              name: <IntlMessages id={'sidebar.categories'} />,
              icon: <Apps />,
              type: 'item',
              link: '/app/ims/categories'
            },
            {
              name: <IntlMessages id={'sidebar.orders'} />,
              icon: <AssignmentTurnedIn />,
              type: 'item',
              link: '/app/ims/orders'
            }
          ]
        },
        {
          name: <IntlMessages id={'sidebar.weather'} />,
          type: 'item',
          icon: <WbSunny />,
          link: '/app/weather'
        },
        {
          name: <IntlMessages id={'sidebar.events'} />,
          type: 'item',
          icon: <Event />,
          link: '/app/events'
        },
        {
          name: <IntlMessages id={'sidebar.flights'} />,
          type: 'item',
          icon: <Flight />,
          link: '/app/flights'
        },
        {
          name: <IntlMessages id={'sidebar.users'} />,
          type: 'item',
          icon: <People />,
          link: '/app/users'
        }

      ]
    }
  ];