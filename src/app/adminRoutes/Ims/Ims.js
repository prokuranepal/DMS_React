import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../../store/actions/users';
import { Route, Switch, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MedicineListContainer from '../../../containers/Ims/Medicine/MedicineList/MedicineListContainer';
import OrderLists from '../../../homeComponents/OrderLists/OrderLists';
import OrderDetails from '../../../containers/Ims/Orders/OrderDetails/OrderDetails';
// import OrderDetails from '../../../containers/OrderDetails/OrderDetails';
// import OrderLists from '../../../containers/OrderList/Orders';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    backgroundColor: 'white'
  }
}));

const MissionPlanner = ({match}) => {

  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root} >
        <Switch>
          <Route exact path={`${match.url}/medicinelist`} component={MedicineListContainer} />
          <Route exact path={`${match.url}/orders/lists`} component={OrderLists} />
          <Route exact path={`${match.url}/orders/details`} render={(props) => <OrderDetails {...props}/>}/>
          <Redirect from={`${match.url}/orders`} to="/app/ims/orders/lists" />
          <Redirect from="/app/ims" to={`${match.url}/medicinelist`} />
        </Switch>
      </Grid>

    </div>
  )
}


const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, { getUsers })(MissionPlanner);
