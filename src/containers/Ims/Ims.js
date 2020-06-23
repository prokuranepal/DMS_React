import React from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../../store/actions/users'
import { Route, Switch, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MedicineTypes from './MedicineTypes/MedicineTypes';
import MedicineListContainer from './MedicineList/MedicineListContainer';
import OrderLists from '../../components/OrderLists/OrderLists';
import OrderDetails from './Orders/OrderDetails/OrderDetails';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    backgroundColor: 'white'
  }
}));

const MissionPlanner = () => {

  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root} >
        <Switch>
          <Route exact path="/admin/ims/medicinetypes" component={MedicineTypes} />
          <Route exact path="/admin/ims/medicinelist" component={MedicineListContainer} />
          {/* <Route exact path="/admin/ims/addmedicine" component={MedicineList} /> */}
          <Route exact path="/admin/ims/orders/lists" component={OrderLists} />
          <Route exact path="/admin/ims/orders/details" component={OrderDetails} />
          <Redirect from="/admin/ims/orders" to="/admin/ims/orders/lists" />
          <Redirect from="/admin/ims" to="/admin/ims/medicinetypes" />
        </Switch>
      </Grid>

    </div>
  )
}


const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, { getUsers })(MissionPlanner);
