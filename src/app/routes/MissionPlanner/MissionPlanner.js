import React from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../../../store/actions/users'
import { Route, Switch, Redirect } from 'react-router-dom'
import asyncComponent from '../../../util/asyncComponent';

const MissionPlanner = ({match}) => {

  return (
    <div>
      <div className="app-wrapper">
        <Switch>
          <Route exact path={`${match.url}/missionview`} component={asyncComponent(() => import('../../../homeComponents/MissionPlanner/MissionView/MissionView'))} />
          <Route exact path={`${match.url}/missionlist`} component={asyncComponent(() => import('../../../homeComponents/MissionPlanner/MissionLists'))} />
          <Redirect from={`${match.url}`} to={`${match.url}/missionlist`} />
        </Switch>
      </div>

    </div>
  )
}


const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, { getUsers })(MissionPlanner);
