import React, {useState} from 'react'
import { connect } from 'react-redux';
import { setAlert } from '../../store/actions/alert';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Topbar from '../../components/Navbar/Navbar';
import SideBar from '../../components/Sidebar/Sidebar';
import User from '../../components/User/User';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
     
    
    },
    users: {
        backgroundColor: '#E7E7E7',
        minHeight: '93.5vh',
        padding: '3rem',
     
    },
   
  
  
  }));

const Users = ({setAlert}) => {
    const classes = useStyles();
    return (
        <div>
            <Topbar />
            <div className = {classes.root}>
                 <SideBar />

                 {/* Main Users Component */}
                 <Grid container className = {classes.users}>
                     <Grid item xs = {12}>
                        <User title='Level 1' />
                     </Grid>

                     <Grid item xs = {12}>
                        <User title='Level 2' />
                     </Grid>
                 </Grid>
                 
            </div>
           

        </div>
    )
}

Users.propTypes = {
    setAlert: PropTypes.func.isRequired,
}

export default connect(null, {setAlert})(Users)
