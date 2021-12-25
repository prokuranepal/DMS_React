import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/actions/flights";
import IntlMessages from "../../../util/IntlMessages";
import MaterialTable from "material-table";
import TableIcons from "../../../homeComponents/TableIcons/TableIcons";
import { createMuiTheme } from "@material-ui/core/styles";
import * as cards from "../../../JSONFiles/flightCards";
import Grid from "@material-ui/core/Grid";
import IconWithTextCard from "../../../components/statusCard/IconWithTextCard";
import { Redirect } from "react-router";
import CustomScrollbars from "../../,,/../../util/CustomScrollbars";

/**
 * This shows a list of flights
 * @param  - No parameters
 * @returns {Flights} - Returns a material table of flights
 *
 */

const CreateData = (data) => {
  return {
    id: data._id,
    droneId: data.drone,
    missionId: data.mission,
    origin: null,
    destination: null,
    purpose: 0,
  };
};

const Flights = () => {
  const [state, setState] = React.useState({
    columns: [
      // { title: 'Name', field: 'name' },
      { title: "Drone Id", field: "droneId" },
      { title: "Origin", field: "origin" },
      //   { title: 'Location', field: 'originLocation' },
      { title: "Destination", field: "destination" },
      //   { title: 'Location', field: 'destinationLocation' },
      { title: "Mission Id", field: "missionId" },
      {
        title: "Purpose",
        field: "purpose",
        lookup: {
          0: "Delivery",
          1: "Pickup",
          2: "Inspection",
        },
      },
    ],
    data: [],
  });

  const [flightCards, setFlightCards] = useState({
    flyingTime: "0",
    numOfFlights: 0,
    landings: 0,
    crashes: 0,
  });
  const dispatch = useDispatch();

  const { flightList } = useSelector(({ flights }) => flights);
  // console.log(drones);
  useEffect(() => {
    dispatch(actions.fetchFlightList());
  }, [dispatch]);

  useEffect(() => {
    if (flightList !== undefined && flightList !== null) {
      console.log(flightList);
      const newFlightList = flightList.flights.map((flight) => {
        return CreateData(flight);
      });
      setState((prevState) => {
        return { ...prevState, data: newFlightList };
      });
      setFlightCards(flightList.flightCards);
    }
  }, [flightList]);

  const [selectedRow, setSelectedRow] = React.useState(null);
  const [redirectTo, setRedirectTo] = React.useState(null);

  //fetch flight details of a particular flight
  const openFlightDetail = (id) => {
    dispatch(actions.fetchFlightDetails(id));
    console.log(id);
    setRedirectTo(
      <Redirect
        to={{
          pathname: "/app/flights/flightdetail",
          state: { id: id },
        }}
      />
    );
  };

  const theme = createMuiTheme({
    padding: "20px",
    palette: {
      primary: {
        main: "#4caf50",
      },
      secondary: {
        main: "#ff9100",
      },
    },
  });

  const card =
    flightCards !== undefined && flightCards !== null
      ? cards.data.map((data, index) => {
          return (
            <Grid item lg={3} md={3} xs={6} key={index}>
              <IconWithTextCard
                data={data}
                value={flightCards[data.title]}
                style={{ marginBottom: 0 }}
              />
            </Grid>
          );
        })
      : null;

  return (
    <CustomScrollbars
      className="scrollbar"
      style={{ height: "500px", marginTop: "20px" }}
    >
      <div className="app-wrapper">
        {redirectTo}
        <div style={{ paddingBottom: "30px" }}>
          <Grid container spacing={5} justify="center">
            {card}
          </Grid>
        </div>
        <div className="animated slideInUpTiny animation-duration-3">
          <MaterialTable
            theme={theme}
            title="Flights"
            columns={state.columns}
            data={state.data}
            icons={TableIcons}
            onRowClick={(evt, selectedRow) => openFlightDetail(selectedRow.id)}
            options={{
              rowStyle: (rowData) => ({
                backgroundColor:
                  selectedRow === rowData.tableData.id ? "#EEE" : "#FFF",
                font: "Roboto",
              }),
              headerStyle: {
                backgroundColor: "#01579b",
                color: "#FFF",
              },
            }}
            // editable={{
            //   onRowAdd: (newData) =>
            //     new Promise((resolve) => {
            //       setTimeout(() => {
            //         resolve();
            //         console.log(newData);
            //         // dispatch(actions.addDrone(newData))
            //         setState((prevState) => {
            //           const data = [...prevState.data];
            //           data.push(newData);
            //           return { ...prevState, data };
            //         });
            //       }, 600);
            //     }),
            //   onRowUpdate: (newData, oldData) =>
            //     new Promise((resolve) => {
            //       setTimeout(() => {
            //         resolve();
            //         if (oldData) {
            //           console.log(newData);
            //           // dispatch(actions.updateDrone(newData, newData._id))
            //           setState((prevState) => {
            //             const data = [...prevState.data];
            //             data[data.indexOf(oldData)] = newData;
            //             return { ...prevState, data };
            //           });
            //         }
            //       }, 600);
            //     }),
            //   onRowDelete: (oldData) =>
            //     new Promise((resolve) => {
            //       setTimeout(() => {
            //         resolve();
            //         setState((prevState) => {
            //           const data = [...prevState.data];
            //           data.splice(data.indexOf(oldData), 1);
            //           return { ...prevState, data };
            //         });
            //       }, 600);
            //     }),
            // }}
          />
        </div>
      </div>
    </CustomScrollbars>
  );
};

export default Flights;
