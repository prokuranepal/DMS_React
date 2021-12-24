import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Skeleton from "react-loading-skeleton";

const DashboardSkeleton = () => {
    return (
        <Fragment>
            <div style={{ padding: '20px' }}>
                <Grid container spacing={5} justifyContent="center">
                    <Grid item lg={3} md={3} xs={6} >
                        <Skeleton height={90} width={`100%`} />
                    </Grid>
                    <Grid item lg={3} md={3} xs={6} >
                        <Skeleton height={90} width={`100%`} />
                    </Grid>
                    <Grid item lg={3} md={3} xs={6} >
                        <Skeleton height={90} width={`100%`} />
                    </Grid>
                    <Grid item lg={3} md={3} xs={6} >
                        <Skeleton height={90} width={`100%`} />
                    </Grid>
                </Grid>
            </div>
            <div style={{ padding: '20px' }}>
                <Grid container spacing={5}>
                    <Grid item md={8} xs={12} >
                        {/* <CardBox styleName="col-12"> */}
                        <Skeleton height={400} width={`100%`} />
                        {/* </CardBox> */}
                    </Grid>
                    <Hidden only="sm">

                        <Grid item md={4}>
                            <div className="col-12" style={{ paddingBottom: '15px' }}>
                                <Skeleton height={180} width={`100%`} />
                            </div>
                            <div className="col-12" style={{ paddingTop: '15px' }}>
                                <Skeleton height={180} width={`100%`} />
                            </div>
                        </Grid>
                    </Hidden>
                </Grid>
            </div>
        </Fragment>
    )
}

export default DashboardSkeleton;
