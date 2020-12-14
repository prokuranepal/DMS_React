import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../../store/actions/flights'
import IntlMessages from "../../../../util/IntlMessages";
import MaterialTable from 'material-table';
import TableIcons from '../../../../homeComponents/TableIcons/TableIcons';
import { createMuiTheme } from '@material-ui/core/styles'
import * as cards from '../../../../JSONFiles/droneDetail';
import Grid from '@material-ui/core/Grid';
import IconWithTextCard from '../../../../components/statusCard/IconWithTextCard';
import { Redirect } from "react-router";

function createData(flightId, origin, destination, missionId, purpose) {

    return { flightId, origin, destination, missionId, purpose };
}

/**
 * This shows a detailed information of a specific drone
 * @returns {DroneDetail} - Returns some details of the drone and a material table of the flights it has performed.
 * @argument {DroneDetail} - No Arguments
 */

const DroneDetail = (props) => {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Flight ID', field: 'flightId' },
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

    const [selectedRow, setSelectedRow] = React.useState(null);
    const [redirectTo, setRedirectTo] = React.useState(null);
    const [redirect, setRedirect] = React.useState(null);
    const [cardData, setCardData] = React.useState({ "droneId": 0, "flightTime": 0, "flights": 0, "crashes": 0 })
    const droneDetail = useSelector(({ dms }) => dms.droneDetail)
    const dispatch = useDispatch();

    useEffect(() => {
        // console.log(props.location);
        if (props.location.state === undefined || props.location.state === null) {
            // console.log("undefined");
            setRedirect(<Redirect to='/app/dms/drone'/>)
        }
    }, []);

    useEffect(() => {
        console.log(droneDetail);
        const dDetail = droneDetail ? droneDetail.flights.map(m => {
            // console.log(m)
            return createData(m._id,m.mission.hospital.name , m.mission.destination.name, m.mission?m.mission._id:null, 0)
        }) : []
        setState((prevState) => {

            return { ...prevState, data: dDetail };
        });
        if (droneDetail !== null) {
            const cData = { "droneId": droneDetail.droneId, "flightTime": droneDetail.flightTime, "flights": droneDetail.numOfFlight, "crashes": 0 }
            setCardData(cData);
        }
    }, [droneDetail]);


    const openFlightDetail = (id) => {
        dispatch(actions.fetchFlightDetails(id))
        console.log(id);
        setRedirectTo(<Redirect to={{
            pathname: '/app/flights/flightdetail',
            state: { id: id }
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
                    onRowClick={((evt, selectedRow) => openFlightDetail(selectedRow.flightId))}
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

export default DroneDetail;