import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth: { token, loading}, ...rest}) => (
    <Route {...rest} render={props => (token === null && !loading) 
         ? (<Redirect to='/auth' />) 
         : (<Component {...props} />)
        } />
)

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute)
