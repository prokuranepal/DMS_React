import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import classes from './Dashboard.module.css'
import { connect } from 'react-redux'
import {getCurrentCards} from '../../store/actions/dashboard'

const Dashboard = ({getCurrentCards, auth, dashboard}) => {

    useEffect(() => {
        getCurrentCards();
    }, [])

    return (
        <div className= {classes.Dashboard}>
            <Navbar/>
            <div className={classes.Content}>
                <Sidebar />
                <div className={classes.View}>
                    Dashboard
                </div>
            </div>
            
        </div>
    )
}

Dashboard.propTypes = {
    getCurrentCards: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    dashboard: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    dashboard: state.dashboard
})

export default connect(mapStateToProps, { getCurrentCards })(Dashboard)
