import React, { Fragment, useEffect } from "react";
import classes from "../../adminRoutes/Dashboard/Dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ResponsiveContainer } from "recharts";
import Spinner from "../../../homeComponents/UI/Spinner/Spinner";
import * as actions from "../../../store/actions/dashboard";
import * as userActions from "../../../store/actions/users";
import IconWithTextCard from "../../../components/statusCard/IconWithTextCard";
import Grid from "@material-ui/core/Grid";
import LineChartMain from "../../../components/Chart/Charts/LineChartMain";
import CardBox from "../../../components/CardBox/index";
import Hidden from "@material-ui/core/Hidden";
import CustomLineChart from "../../../components/CustomLineChart/index";
import ChartCard from "../../../components/ChartCard/ChartCard";
import * as cards from "../../../JSONFiles/dashboardCards";
import DashbboardSkeleton from "../../adminRoutes/Dashboard/DashboardSkeleton";

/**
 * This is the main landing page after signIn which shows data of number of drones, active drones, number of health posts and graphs of number of deliveries per certain interval of time of the Hospitals and each of its constituent Health posts
 * The store and default route path are
 * @param - No Parameters
 * @returns {Dashboard} - Returns the Dashboard component with cards and graphs
 */

const Dashboard = () => {
  const dispatch = useDispatch();

  //get server response for data on associated healthposts, places etc
  useEffect(() => {
    dispatch(actions.getSuperAdminCurrentCards());
    dispatch(actions.getPlaces());
    dispatch(userActions.getCentralHospitals());
    // dispatch(userActions.getSelfUserData());
  }, [dispatch]);
  const date = new Date();
  const year = date.getFullYear();
  // console.log(year);
  const { cardData, loading, graphs } = useSelector(
    ({ dashboard }) => dashboard
  );

  const card =
    cardData !== undefined && cardData !== null
      ? cards.superAdminData.map((data, index) => {
          return (
            <Grid item lg={3} md={3} xs={6} key={index}>
              <IconWithTextCard
                data={data}
                value={cardData[data.title]}
                style={{ marginBottom: 0 }}
              />
            </Grid>
          );
        })
      : null;
  return (
    <div className={classes.Dashboard}>
      <div className={classes.Content}>
        <div className={classes.View}>
          {loading || cardData === undefined || cardData === null ? (
            <DashbboardSkeleton />
          ) : (
            <Fragment>
              <div style={{ padding: "20px" }}>
                <Grid container spacing={5} justify="center">
                  {card}
                </Grid>
              </div>

                <Grid container>
                  {loading || graphs === null || graphs.healthPosts === null ? (
                    <Spinner />
                  ) : (
                    graphs.healthPosts.map((healthPost, index) => {
                      return (
                        <Grid item xs={12}>
                            <CardBox heading={healthPost.name} key={index}>
                              {loading ||
                              graphs === null ||
                              graphs.hospital === undefined ||
                              graphs.healthPosts === undefined ? (
                                <Spinner />
                              ) : (
                                <LineChartMain
                                  data={healthPost.data[year]}
                                  height={300}
                                />
                              )}
                            </CardBox>
                        </Grid>
                      );
                    })
                  )}
                </Grid>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
