import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import classes from './Dashboard.module.css'

const Dashboard = props => {
    return (
        <div className= {classes.Dashboard}>
            <Navbar className={classes.Navbar} />
            <div className={classes.Content}>
                <Sidebar className={classes.Sidebar} />
                <div className={classes.View}>
                    Dashboard
                </div>
            </div>
            
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
