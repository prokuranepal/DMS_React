import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getUsers } from '../../store/actions/users'
import { Route, Switch, Redirect } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MissionLists from '../../components/MissionPlanner/MissionLists';
import MissionView from '../../components/MissionPlanner/MissionView/MissionView';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#A5D8DD'
  }
}));

const MissionPlanner = () => {

  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root} >
        <Switch>
          {/* <Route path="/admin/mission planner/list-users" render={(props) => <ListUsers {...props} users1={users1} users2={users2}/>}/> */}
          {/* <Route exact path="/admin/missionplanner/create-user" component={CreateUser} /> */}
          <Route exact path="/admin/missionplanner/missionview" component={MissionView} />
          <Route exact path="/admin/missionplanner/missionlists" component={MissionLists} />
          <Redirect from="/admin/missionplanner" to="/admin/missionplanner/missionlists" />
        </Switch>
      </Grid>

    </div>
  )
}


const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, { getUsers })(MissionPlanner);
