import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles(() => ({
    root: {
      width: '100%',
      margin: '15px'
      
    }
  }));

const SimpleAlert = ({ alerts }) => {
    const classes = useStyles();

    return (
        alerts !== null &&
        alerts.length > 0 &&
        alerts.map(alert => (
            <Alert margin='normal' severity={alert.alertType} key={alert.id} className={classes.root} variant = 'filled'>
            {alert.msg}
             </Alert>
        ))
    )
}
  

SimpleAlert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(SimpleAlert);