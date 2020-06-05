import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getUsers } from '../../store/actions/users'
import { Route, Switch, Redirect } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CreateUser from '../../components/CreateUser/CreateUser';
import EditUser from '../../components/EditUser/EditUser';
import ListUsers from '../../components/User/ListUsers';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    backgroundColor: '#E7E7E7'
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.6em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
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
          <Route path="/admin/users/list-users" render={(props) => <ListUsers {...props} users1={users1} users2={users2}/>}/>
          <Route exact path="/admin/users/create-user" component={CreateUser} />
          <Route exact path="/admin/users/edit-user" component={EditUser} />
          <Redirect from="/admin/users" to="/admin/users/list-users" />
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
