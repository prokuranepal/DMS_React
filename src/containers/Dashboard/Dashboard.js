import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import classes from './Dashboard.module.css'
import { connect } from 'react-redux'
import {getCurrentCards} from '../../store/actions/dashboard'
import Spinner from '../../components/UI/Spinner/Spinner'
import Card from '../../components/Card/Card'
import Chart from '../../components/Chart/Chart'
import Users from '../Users/Users'

const Dashboard = ({getCurrentCards, auth, dashboard: {cards, loading, graphs: {cdc, rhps}}}) => {

    useEffect(() => {
        getCurrentCards();

    }, [])
    
    const card = Object.keys(cards).map((keyName, i) => {
        return <Card key = {i} data = {cards[keyName]} name= {keyName} />
    }) 
 
    return (
        <div className= {classes.Dashboard}>
            <Users/>
            <Navbar/>
            <div className={classes.Content}>
                <Sidebar />
                <div className={classes.View}>
                    {(loading && cards ===null)
                    ? <Spinner />

                    : <Fragment>
                        <div className={classes.Cards}>
                            {card}
                        </div>
                        <div className = {classes.Charts}>
                            
                            <div className={classes.MainChart}>
                                 <Chart chartData ={cdc} height={600} />
                            </div>
                            <div className={classes.SubChart}>
                                <Chart chartData ={cdc} height={300} />
                                <Chart chartData ={cdc} height={300} />
                            </div>
                        </div>
                    </Fragment>}
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
