import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListUsers from '../../../homeComponents/User/ListUsers';
import Profile from '../../../homeComponents/User/Profile/Profile';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#E7E7E7'
  }

}));

const Users = () => {

  const classes = useStyles();
  

  return (
    <div>
      <Grid container className={classes.root} >
        <Switch>
          <Route path="/app/users/list-users" render={() => <ListUsers/>}/>
          <Route path="/app/users/profile" render={(props) => <Profile {...props}/>}/>
          <Redirect from="/app/users" to="/app/users/list-users" />
        </Switch>
      </Grid>

    </div>
  )
}

export default Users;
