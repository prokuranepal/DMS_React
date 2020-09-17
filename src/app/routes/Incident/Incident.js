import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../store/actions/dms'
import IntlMessages from "../../../util/IntlMessages";
import MaterialTable from 'material-table';
import TableIcons from '../../../homeComponents/TableIcons/TableIcons';
import { createMuiTheme } from '@material-ui/core/styles'
import * as cards from '../../../JSONFiles/flightCards';
import Grid from '@material-ui/core/Grid';
import IconWithTextCard from '../../../components/statusCard/IconWithTextCard';
import { Redirect } from "react-router";

const Incident = () => {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
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
            { name: 'FLight 1', droneId: '1', origin: "Nepal", destination: '1', missionId: 87, purpose: 0 },
            { name: 'FLight 2', droneId: '3', origin: "Nepal", destination: '2', missionId: 86, purpose: 1 },
            { name: 'FLight 3', droneId: '4', origin: "Nepal", destination: '4', missionId: 88, purpose: 2 },
            { name: 'FLight 4', droneId: '5', origin: "Nepal", destination: '4', missionId: 89, purpose: 0 },
            { name: 'FLight 5', droneId: '6', origin: "Nepal", destination: '5', missionId: 81, purpose: 1 },
        ],
    });

    //   const dispatch = useDispatch();
    //   const { drones } = useSelector(({ dms }) => dms);
    // console.log(drones);
    //   useEffect(() => {
    //     dispatch(actions.fetchDrones())
    //   }, [dispatch]);

    //   useEffect(() => {
    //     setState((prevState) => {

    //       return { ...prevState, data: drones };
    //     });
    //   }, [drones]);

    const [selectedRow, setSelectedRow] = React.useState(null);
    const [redirectTo, setRedirectTo] = React.useState(null);
    const openFlightDetail = (id) => {
        console.log(id);
        setRedirectTo(<Redirect to={{
            pathname: '/app/dms/dronedetail',
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
                    title="Maintenance"
                    columns={state.columns}
                    data={state.data}
                    icons={TableIcons}
                    onRowClick={((evt, selectedRow) => openFlightDetail(selectedRow))}
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

export default Incident;