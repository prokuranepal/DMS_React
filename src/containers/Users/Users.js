import React, {useState, Fragment, useEffect} from 'react'
import { connect } from 'react-redux';
import SimpleAlert from '../../components/UI/Alert/Alert';
import PropTypes from 'prop-types'
import { getUsers } from '../../store/actions/users'


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

const Users = ({getUsers,  users: {users1, users2}}) => {

    useEffect( () => {
         getUsers();
        
    }, [])

    const classes = useStyles();

    return (
        <div>   
            <Topbar />
            <div className = {classes.root}>
                 <SideBar />

               
                 <Grid container className = {classes.users}>  
                 <SimpleAlert />
                        <Grid item xs = {12}>
                            <User title='Level 1' users= {users1} />
                        </Grid>

                        <Grid item xs = {12}>
                            <User title='Level 2' users= {users2} />
                        </Grid>
                 </Grid>
                 
            </div>
        </div>
    )
}

Users.propTypes = {
    getUsers: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    users: state.users
})

export default connect(mapStateToProps, { getUsers })(Users)
