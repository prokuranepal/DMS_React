import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../store/actions/flights'
import IntlMessages from "../../../util/IntlMessages";
import MaterialTable from 'material-table';
import TableIcons from '../../../homeComponents/TableIcons/TableIcons';
import { createMuiTheme } from '@material-ui/core/styles'
import * as cards from '../../../JSONFiles/flightCards';
import Grid from '@material-ui/core/Grid';
import IconWithTextCard from '../../../components/statusCard/IconWithTextCard';
import { Redirect } from "react-router";

/**
 * This shows a list of flights
 * @param  - No parameters
 * @returns {Flights} - Returns a material table of flights
 *
 */

const CreateData = (data) => {
    return {id:data._id, droneId:data.drone, missionId: data.mission, origin: null, destination: null, purpose: 0 }
}

const Flights = () => {
    const [state, setState] = React.useState({
        columns: [
            // { title: 'Name', field: 'name' },
            { title: 'Drone Id', field: 'droneId' },
            { title: 'Origin', field: 'origin' },
            //   { title: 'Location', field: 'originLocation' },
            { title: 'Destination', field: 'destination' },
            //   { title: 'Location', field: 'destinationLocation' },
            { title: 'Mission Id', field: 'missionId' },
            {
                title: 'Purpose', field: 'purpose',
                lookup: {
                    0: 'Delivery', 1: 'Pickup', 2: 'Inspection'
                },
            }
        ],
        data: [
        ],
    });

    const dispatch = useDispatch();

      const { flightList } = useSelector(({ flights }) => flights);
    // console.log(drones);
      useEffect(() => {
        dispatch(actions.fetchFlightList())
      }, [dispatch]);

      useEffect(() => {
        console.log(flightList);
        const newFlightList = flightList.map(flight => {
            return CreateData(flight)
        })
        setState((prevState) => {

          return { ...prevState, data: newFlightList };
        });
      }, [flightList]);

    const [selectedRow, setSelectedRow] = React.useState(null);
    const [redirectTo, setRedirectTo] = React.useState(null);
    

    //fetch flight details of a particular flight
    const openFlightDetail = (id) => {
        dispatch(actions.fetchFlightDetails(id))
        console.log(id);
        setRedirectTo(<Redirect to={{
            pathname: '/app/flights/flightdetail',
            state: {id:id}
        }} />)
    }

    const theme = createMuiTheme({
        padding: '20px',
        palette: {
            primary: {
                main: '#4caf50',
            },
            secondary: {
                main: '#ff9100',
            },
        },

    });

    const cardData = {
        "flyingTime": '104:45:56',
        "flights": 5,
        "landings": 6,
        "crashes": 1
    }

    const card = cardData !== undefined && cardData !== null ? cards.data.map((data, index) => {
        return (
            <Grid item lg={3} md={3} xs={6} key={index}>
                <IconWithTextCard data={data} value={cardData[data.title]} style={{ marginBottom: 0 }} />
            </Grid>
        )
    }) : null;


    return (
        <div className="app-wrapper">
            {redirectTo}
            <div style={{ paddingBottom: '30px' }}>
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
                    onRowClick={((evt, selectedRow) => openFlightDetail(selectedRow.id))}
                    options={{
                        rowStyle: rowData => ({
                            backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF',
                            font: 'Roboto'
                        }),
                        headerStyle: {
                            backgroundColor: '#01579b',
                            color: '#FFF'
                        }
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
    );
}

export default Flights;