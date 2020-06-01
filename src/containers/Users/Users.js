import React, {useState, Fragment, useEffect} from 'react'
import { connect } from 'react-redux';
import { setAlert } from '../../store/actions/alert';
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

const Users = ({getUsers, users: {users}}) => {

    useEffect( () => {
        getUsers();
        
    }, [getUsers])

    const classes = useStyles();

    const usersMap =  Object.keys(users).map((user, index) => (
        
                <Grid item xs = {12}>
                    <User key={index} title='Level 1' users= {users[user]}/>
                    {console.log('user', index ,users[user])}
                </Grid>

         )
        )
    

    return (
        <div>
            <Topbar />
            <div className = {classes.root}>
                 <SideBar />

                 {/* Main Users Component */}
                 <Grid container className = {classes.users}>  
                         {usersMap}
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
