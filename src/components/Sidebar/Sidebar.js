import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalAirportIcon from '@material-ui/icons/LocalAirport';
import ControlCameraIcon from '@material-ui/icons/ControlCamera';
import DnsIcon from '@material-ui/icons/Dns';
import CloudIcon from '@material-ui/icons/Cloud';
import ErrorIcon from '@material-ui/icons/Error';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import classes from './Sidebar.module.css';

const SideBar = () => (
  <div className={classes.Sidebar}>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalAirportIcon />
      </ListItemIcon>
      <ListItemText primary="DMS" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ControlCameraIcon />
      </ListItemIcon>
      <ListItemText primary="Drone control" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DnsIcon />
      </ListItemIcon>
      <ListItemText primary="IMS" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CloudIcon />
      </ListItemIcon>
      <ListItemText primary="Weather" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ErrorIcon />
      </ListItemIcon>
      <ListItemText primary="Issue" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Event log" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EventNoteIcon />
      </ListItemIcon>
      <ListItemText primary="Mission planner" />
    </ListItem>
  </div>
);

export default SideBar;
