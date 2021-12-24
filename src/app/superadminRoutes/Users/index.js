import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ListHospitals from '../../../containers/SuperAdmin/Users/ListHospitals';
import ListRegulatory from '../../../containers/SuperAdmin/Users/ListRegulatory';
import ListHospitalUsers from '../../../containers/SuperAdmin/Users/ListHospitalUsers';
import ListRegulatoryUsers from '../../../containers/SuperAdmin/Users/ListRegulatoryUsers';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
  }

}));

const Users = ({ match }) => {

  const classes = useStyles();
  

  return (
    <div>
      <Grid container className={classes.root} >
        <Switch>
          <Route path={`${match.url}/list-hospitals`} render={() => <ListHospitals/>}/>
          <Route path={`${match.url}/list-regulatory-bodies`} render={(props) => <ListRegulatory/>}/>
          <Route path={`${match.url}/list-hospital-users`} render={(props) => <ListHospitalUsers/>}/>
          <Route path={`${match.url}/list-regulatory-users`} render={(props) => <ListRegulatoryUsers/>}/>
          <Redirect exact from={`${match.url}/`} to={`${match.url}/list-hospitals`}/>
        </Switch>
      </Grid>

    </div>
  )
}

export default Users;
