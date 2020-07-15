import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getUsers } from '../../../store/actions/users'
import { Route, Switch, Redirect } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CreateUser from '../../../components/CreateUser/CreateUser';
import EditUser from '../../../components/EditUser/EditUser';
import ListUsers from '../../../components/User/ListUsers';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#E7E7E7'
  }

}));

const Users = ({ getUsers, users: { users1, users2 } }) => {

  useEffect(() => {
    getUsers();

  }, [])

  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root} >
        <Switch>
          <Route path="/app/users/list-users" render={(props) => <ListUsers {...props} users1={users1} users2={users2}/>}/>
          <Route exact path="/app/users/create-user" component={CreateUser} />
          <Route exact path="/app/users/edit-user" component={EditUser} />
          <Redirect from="/app/users" to="/app/users/list-users" />
        </Switch>
      </Grid>

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
