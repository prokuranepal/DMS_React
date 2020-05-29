import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      
    }
  }));

const SimpleAlert = ({ alerts }) => {
    const classes = useStyles();

    return (
        alerts !== null &&
        alerts.length > 0 &&
        alerts.map(alert => (
            <Alert severity={alert.alertType} key={alert.id} className={classes.root}>
            {alert.msg}
             </Alert>
        ))
    )
}
  

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(SimpleAlert);