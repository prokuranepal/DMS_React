import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import GetAppIcon from '@material-ui/icons/GetApp';

import IntlMessages from "../../../../util/IntlMessages";
import MaterialTable from 'material-table';
import TableIcons from '../../../../homeComponents/TableIcons/TableIcons';
import { createMuiTheme } from '@material-ui/core/styles'
import { Redirect } from "react-router";
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import * as actions from '../../../../store/actions/dms';

// function createData(name, droneId, numOfFlight, type, status) {

//   return { name, droneId, numOfFlight, type, status };
// }

/**
 * This shows a table of drones, both active and inactive
 * @param - No Parameters
 * @returns {Drones} - Returns a list of Drones
 * 
 */

const Drone = () => {
  
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'No. of flights', field: 'numOfFlight' },
      { title: 'Drone Id', field: 'droneId' },
      {
        title: 'Type', field: 'type',
        lookup: {
          0: 'Quadcopter', 1: 'Hexacopter', 2: 'Octocopter'
          , 3: 'Fixed Wing', 4: 'Quadplane VTOL', 5: 'Tilt-Rotor VTOL'
        },
      },
      // {
      //   title: 'Time', field: 'time',
      //   render: rowData => <DynamicIcon time={rowData.time}/>,
      //   editComponent: props => (
      //     <KeyboardTimePicker
      //       margin="normal"
      //       id="time-picker"
      //       value={props.value}
      //       onChange={props.onChange}
      //       KeyboardButtonProps={{
      //         'aria-label': 'change time',
      //       }}
      //     />
      //   )
      // },
      {
        title: 'Status',
        field: 'status',
        lookup: { 2: 'Under Maintenance', 1: 'Active', 0: 'Inactive' },
      },
      {
          title: 'Hospital',
          field: 'hospital',
      }
   
    ],
    data: [
      // { name: 'Mavic pro', numOfFlight: '125', type: 'Quad', droneId: 87, status: 0 },
      // { name: 'Baaj 1.0', numOfFlight: '125', type: 'Quad',droneId: 87, status: 1 },
      // { name: 'Phanthom', numOfFlight: '125', type: 'Quad',droneId: 87, status: 2 },
      // { name: 'Mavic Air', numOfFlight: '125',type: 'Quad', droneId: 87, status: 0 },
      // { name: 'Mavic Air 2', numOfFlight: '125', type: 'Quad',droneId: 87, status: 1 },
      // { name: 'Dji spark', numOfFlight: '125',type: 'Quad', droneId: 87, status: 2 },
      // { name: 'Mavic', numOfFlight: '125',type: 'Quad', droneId: 87, status: 1 },
    ],
  });

  const [numDrones, setNumDrones] = React.useState(0)
  const dispatch = useDispatch();
  const { drones } = useSelector(({ dms }) => dms);
  // console.log(drones);

  //fetch drones
  useEffect(() => {
    dispatch(actions.fetchDrones())
  }, [dispatch]);

  //update the state after data is fetched
  useEffect(() => {
    setState((prevState) => {

      return { ...prevState, data: drones };
    });
    console.log(drones);
    setNumDrones(drones.length)
  }, [drones]);

  const [selectedRow, setSelectedRow] = React.useState(null);
  const [redirectTo, setRedirectTo] = React.useState(null);

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


  const openDroneDetail = (id) => {
    console.log(id);
    setSelectedRow(id);
    
    setRedirectTo(<Redirect to={{
      pathname: "/app/dms/dronedetail",
      state: { droneId: id }

    }} />)
  }

  return (
    <div>
      {redirectTo}
      <div className="animated slideInUpTiny animation-duration-3">
        <div className="jr-card">
          {/* <div className="jr-card-header"> */}
          <h1 className="mb-0  font-weight-bold"><IntlMessages id="Total Drones in the Network" /></h1>
          <h3 className="mb-0 mt-3">{numDrones} Total</h3>
          {/* </div> */}
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <MaterialTable
            theme={theme}
            title="Drones"
            columns={state.columns}
            data={state.data}
            icons={TableIcons}
            onRowClick={((evt, selectedRow) => openDroneDetail(selectedRow._id))}
            options={{
              rowStyle: rowData => ({
                backgroundColor: (selectedRow === rowData._id) ? '#EEE' : '#FFF',
                font: 'Roboto'
              }),
              headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'
              },
              actionsColumnIndex: -1
            }}
            actions={[
              {
                icon: GetAppIcon,
                tooltip: 'Download log',
                onClick: (event, rowData) =>{event.preventDefault(); 
                  dispatch(actions.downloadLogs(rowData._id))
              } }
            ]}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    console.log(newData);
                    dispatch(actions.addDrone(newData))
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data.push(newData);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      console.log(newData);
                      dispatch(actions.updateDrone(newData, newData._id))
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data.splice(data.indexOf(oldData), 1);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
}

export default Drone;