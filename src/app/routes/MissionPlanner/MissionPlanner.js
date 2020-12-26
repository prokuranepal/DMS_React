import React from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../../../store/actions/users'
import { Route, Switch, Redirect } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import MissionLists from '../../../components/MissionPlanner/MissionLists';
// import MissionView from '../../../components/MissionPlanner/MissionView/MissionView';
import asyncComponent from '../../../util/asyncComponent';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#A5D8DD'
  }
}));
export const missionView= asyncComponent(() => import('../../../homeComponents/MissionPlanner/MissionView/MissionView'))
export const missionLists=asyncComponent(() => import('../../../homeComponents/MissionPlanner/MissionLists'))
const MissionPlanner = ({match}) => {

  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root} >
        <Switch>
          {/* <Route path="/admin/mission planner/list-users" render={(props) => <ListUsers {...props} users1={users1} users2={users2}/>}/> */}
          {/* <Route exact path="/admin/missionplanner/create-user" component={CreateUser} /> */}
          <Route exact path={`${match.url}/missionview`} component={missionView} />
          <Route exact path={`${match.url}/missionlist`} component={missionLists} />
          <Redirect from={`${match.url}`} to={`${match.url}/missionlist`} />
        </Switch>
      </Grid>

    </div>
  )
}


const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, { getUsers })(MissionPlanner);
