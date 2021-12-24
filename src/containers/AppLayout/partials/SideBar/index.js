import React from 'react';
import {useSelector} from 'react-redux';
import CmtVertical from '../../../../@coremat/CmtNavigation/Vertical';
import PerfectScrollbar from 'react-perfect-scrollbar';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CustomScrollbars from '../../../../util/CustomScrollbars';

import { adminMenus } from '../../../../JSONFiles/adminMenus';
import { superAdminMenus } from '../../../../JSONFiles/superAdminMenus';
import { regulatoryMenus } from '../../../../JSONFiles/regulatoryMenus';

const useStyles = makeStyles(theme => ({
  perfectScrollbarSidebar: {

    height: 'calc(500px - 167px)',
    // overflow: 'hidden !important',
    // transition: 'all 0.3s ease',
    // overflowAnchor: 'none',
    // touchAction: 'auto',
    '.Cmt-sidebar-fixed &, .Cmt-Drawer-container &': {
      height: 'calc(500px - 167px)',
    },
    '.Cmt-modernLayout &': {
      height: 'calc(500px - 72px)',
    },
    '.Cmt-miniLayout &': {
      height: 'calc(500px - 91px)',
      marginTop: '30px'
    },
    '.Cmt-miniLayout .Cmt-sidebar-content:hover &': {
      height: 'calc(500px - 167px)',
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

  const userType = useSelector(({auth}) => auth.userType);

  let navigationMenus = null;
  switch(userType){
    case "Super Admin":
      navigationMenus = superAdminMenus;
      break;
    case "Admin":
      navigationMenus = adminMenus;
      break;
    case "Regulatory Body":
      navigationMenus = regulatoryMenus;
      break;
    default:
      navigationMenus = adminMenus

  }

  return (
    // <PerfectScrollbar className={classes.perfectScrollbarSidebar}>
    <CustomScrollbars className="scrollbar" style={{height: 'calc(100% - 10px', marginTop: '20px'}}>
      <CmtVertical menuItems={navigationMenus} />
   </CustomScrollbars>
    // </PerfectScrollbar>
  );
};

export default SideBar;
