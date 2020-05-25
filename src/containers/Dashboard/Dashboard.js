import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import classes from './Dashboard.module.css'
import { connect } from 'react-redux'
import {getCurrentCards} from '../../store/actions/dashboard'
import Spinner from '../../components/UI/Spinner/Spinner'
import Card from '../../components/Card/Card'

const Dashboard = ({getCurrentCards, auth, dashboard: {cards, loading}}) => {

    useEffect(() => {
        getCurrentCards();

    }, [])

    const card = Object.keys(cards).map((keyName, i) => {
        return <Card key = {i} data = {cards[keyName]} name= {keyName} />
    }) 
 
    return (
        <div className= {classes.Dashboard}>
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
