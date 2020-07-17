import React, { Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import classes from './Dashboard.module.css'
import {useDispatch} from 'react-redux';
import { connect } from 'react-redux'
import {getCurrentCards} from '../../../store/actions/dashboard'
import { ResponsiveContainer } from 'recharts'
import Spinner from '../../../components/UI/Spinner/Spinner'
import * as actions from '../../../store/actions/dashboard'
import IconWithTextCard from '../../../components/statusCard/IconWithTextCard'
import Grid from '@material-ui/core/Grid';
import LineChartMain from '../../../components/Chart/Charts/LineChartMain'
import CardBox from '../../../components/CardBox/index';
import Hidden from '@material-ui/core/Hidden';
import CustomLineChart from '../../../components/CustomLineChart/index'
import ChartCard from '../../../components/ChartCard/ChartCard'
import {sideChartData} from '../../../components/ChartCard/data'


const Dashboard = ({getCurrentCards, auth, dashboard: {cards, loading, graphs: {graphData, sidechartdata, cdc, rhps}}}) => {

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

    // console.log("Reducer",sidechartdata);
    // console.log("Import", sideChartData);
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

                        <div>
                            <Grid container>
                                <Grid item md={8} xs={12}>
                                    <CardBox heading="Medicine delivery and Drone flight Graph" styleName="col-12">
                                        <LineChartMain data={graphData} height={450} />
                                    </CardBox>
                                </Grid>
                                <Hidden only="sm">
                                    <Grid item md={4}>
                                        <div className="col-12">
                                            <ChartCard styleName="bg-gradient-primary text-white">
                                                <div className="chart-title">
                                                    <h2 className="mb-1">{sideChartData.name}</h2>
                                                    <p>Deliveries</p>
                                                </div>
                                                <ResponsiveContainer width="100%" height={165}>
                                                    <CustomLineChart
                                                        chartData={sideChartData.chartData}
                                                        labels={sideChartData.labels}
                                                        borderColor="#FFF"
                                                        pointBorderColor="#FFF"
                                                        pointBackgroundColor="#FF9800"
                                                        pointBorderWidth={2}
                                                        pointRadius={4}
                                                        lineTension={0}
                                                    />
                                                </ResponsiveContainer>
                                            </ChartCard>
                                        </div>
                                        <div className=" col-12">
                                            <ChartCard styleName="bg-gradient-primary text-white">
                                                <div className="chart-title">
                                                    <h2 className="mb-1">{sideChartData.name}</h2>
                                                    <p>Deliveries</p>
                                                </div>
                                                <ResponsiveContainer width="100%" height={165}>
                                                    <CustomLineChart
                                                        chartData={sideChartData.chartData}
                                                        labels={sideChartData.labels}
                                                        borderColor="#FFF"
                                                        pointBorderColor="#FFF"
                                                        pointBackgroundColor="#FF9800"
                                                        pointBorderWidth={2}
                                                        pointRadius={4}
                                                        lineTension={0}
                                                    />
                                                </ResponsiveContainer>
                                            </ChartCard>
                                        </div>
                                    </Grid>
                                </Hidden>
                            </Grid>
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
