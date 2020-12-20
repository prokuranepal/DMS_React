import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Profile from '../../../containers/Profile/Profile';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
  }

}));

const UserProfile = () => {

  const classes = useStyles();
  

  return (
    <div>
      <Grid container classeName="app-wrapper" >
        <Switch>
          <Route path="/app/profile" render={() => <Profile/>}/>
        </Switch>
      </Grid>

    </div>
  )
}

export default UserProfile;
