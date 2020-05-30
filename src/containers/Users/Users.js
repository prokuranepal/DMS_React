import React, {useState} from 'react'
import { connect } from 'react-redux';
import { setAlert } from '../../store/actions/alert';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Users = ({setAlert}) => {
    return (
        <div>
           Users
        </div>
    )
}

Users.propTypes = {
    setAlert: PropTypes.func.isRequired,
}

export default connect(null, {setAlert})(Users)
