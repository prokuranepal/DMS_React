import React, { Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import classes from './Dashboard.module.css'
import {useDispatch} from 'react-redux';
import { connect } from 'react-redux'
import {getCurrentCards} from '../../../store/actions/dashboard'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Chart from '../../../components/Chart/Chart'
import * as actions from '../../../store/actions/dashboard'
import IconWithTextCard from '../../../components/statusCard/IconWithTextCard'
import Grid from '@material-ui/core/Grid';


const Dashboard = ({getCurrentCards, auth, dashboard: {cards, loading, graphs: {cdc, rhps}}}) => {

    const dispatch = useDispatch();
    useEffect(() => {
        getCurrentCards();
        dispatch(actions.getPlaces());
    }, [])

    const card = Object.keys(cards).map((data, index) => {
        return (
            <Grid item lg={3} md={3} xs={6} key={index}>
                <IconWithTextCard data={cards[data]} />
            </Grid>
        )
    })

    return (
        <div className= {classes.Dashboard}>
            <div className={classes.Content}>
                <div className={classes.View}>
                    {(loading && cards ===null)
                    ? <Spinner />

                    : <Fragment>
                        <div className="m-5">
                            <Grid container spacing={5} justify="center">
                                {card}
                            </Grid>
                        </div>

                        <div className = {classes.Charts}>
                            
                            <div className={classes.MainChart}>
                                 <Chart chartData ={cdc} height={400} />
                            </div>
                            <div className={classes.SubChart}>
                                <Chart chartData ={cdc} height={200} />
                                <Chart chartData ={cdc} height={200} />
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
