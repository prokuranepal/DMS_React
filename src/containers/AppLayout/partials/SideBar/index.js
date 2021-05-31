import React from 'react';
import CmtVertical from '../../../../@coremat/CmtNavigation/Vertical';
import PerfectScrollbar from 'react-perfect-scrollbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IntlMessages from '../../../../util/IntlMessages';
import { Dashboard, FlightTakeoff, Flight, AirplanemodeActive, AddAlert, LocalHospital,
  ControlCamera,
  Navigation, SwapCalls, Assignment, ListAlt, AssignmentTurnedIn,
  WbSunny, People, Event, Apps, Category

} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  perfectScrollbarSidebar: {

    height: '100%',
    transition: 'all 0.3s ease',
    '.Cmt-sidebar-fixed &, .Cmt-Drawer-container &': {
      height: 'calc(100% - 167px)',
    },
    '.Cmt-modernLayout &': {
      height: 'calc(100% - 72px)',
    },
    '.Cmt-miniLayout &': {
      height: 'calc(100% - 91px)',
      marginTop: '30px'
    },
    '.Cmt-miniLayout .Cmt-sidebar-content:hover &': {
      height: 'calc(100% - 167px)',
    },
  },
}));

const SideBar = () => {
  const classes = useStyles();
  // const navigationMenus = [
  //   {
  //     name: <IntlMessages id={<IntlMessages id={'sidebar.main'} />,
  //     type: 'section',
  //     children: [
  //       {
  //         name: <IntlMessages id={'pages.samplePage'} />,
  //         icon: <PostAdd />,
  //         type: 'item',
  //         link: '/sample-page',
  //       },
  //     ],
  //   },
  // ];

  const navigationMenus = [
    {
      // name: <IntlMessages id={'sidebar.main'} />,
      name: '',
      type: 'section',
      children: [
        {
          name: <IntlMessages id={'sidebar.dashboard'}/>,
          type: 'item',
          icon: <Dashboard/>,
          link: '/app/dashboard'
        },
        {
          name: <IntlMessages id={'sidebar.dronemanage'}/>,
          icon: <FlightTakeoff/>,
          type: 'collapse',
          children: [
            {
              name: 'Drone',
              icon: <AirplanemodeActive/>,
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
              icon: <AddAlert/>,
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
          name: <IntlMessages id={'sidebar.dronecontrol'}/>,
          type: 'item',
          icon: <ControlCamera/>,
          link: '/app/dronecontrol'
        },
        {
          name: <IntlMessages id={'sidebar.mission'}/>,
          icon: <SwapCalls />,
          type: 'collapse',
          children: [
            {
              name: <IntlMessages id={'sidebar.missionlist'}/>,
              icon: <ListAlt/>,
              type: 'item',
              link: '/app/missionplanner/missionlist'
            },
            {
              name: <IntlMessages id={'sidebar.missionplanner'}/>,
              icon: <Navigation/>,
              type: 'item',
              link: '/app/missionplanner/missionview'
            }
          ]
        },
        {
          name: <IntlMessages id={'sidebar.inventory'}/>,
          icon: <Category/>,
          type: 'collapse',
          children: [
            {
              name: <IntlMessages id={'sidebar.categories'}/>,
              icon: <Apps/>,
              type: 'item',
              link: '/app/ims/categories'
            },
            {
              name: <IntlMessages id={'sidebar.orders'}/>,
              icon: <AssignmentTurnedIn/>,
              type: 'item',
              link: '/app/ims/orders'
            }
          ]
        },
        {
          name: <IntlMessages id={'sidebar.weather'}/>,
          type: 'item',
          icon: <WbSunny/>,
          link: '/app/weather'
        },
        {
          name: <IntlMessages id={'sidebar.events'}/>,
          type: 'item',
          icon: <Event/>,
          link: '/app/events'
        },
        {
          name: <IntlMessages id={'sidebar.flights'}/>,
          type: 'item',
          icon: <Flight/>,
          link: '/app/flights'
        },
        {
          name: <IntlMessages id={'sidebar.users'}/>,
          type: 'item',
          icon: <People />,
          link: '/app/users'
        }

      ]
    }
  ];

  return (
    <PerfectScrollbar className={classes.perfectScrollbarSidebar}>
      <CmtVertical menuItems={navigationMenus} />
    </PerfectScrollbar>
  );
};

export default SideBar;
