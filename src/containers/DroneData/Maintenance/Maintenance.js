import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import IntlMessages from "../../../../util/IntlMessages";
import MaterialTable from 'material-table';
import TableIcons from '../../../../homeComponents/TableIcons/TableIcons';
import { createMuiTheme } from '@material-ui/core/styles'
import * as cards from '../../../../JSONFiles/maintenanceCards';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Date from './Date';
import IconWithTextCard from '../../../../components/statusCard/IconWithTextCard';
import * as actions from '../../../../store/actions/dms';


/**
 * This shows a table of incidents and maintenance to be done, doing or done
 * @param  - No Parameters
 * @returns {Maintenance} - Returns a material-table of maintenance
 * 
 */

const Maintenance = () => {

  const [cardData, setCardData] = React.useState({
    "completed": 0,
    "inProgress": 0,
    "overdue": 0,
    "open": 0
  });

  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      {
        title: 'Drone Id', field: 'droneId',
        lookup: {
          default: 'Default'
        },
      },
      { title: 'Description', field: 'description' },
      {
        title: 'Type', field: 'type', editable: 'never',
        lookup: {
          0: 'Quadcopter', 1: 'Hexacopter', 2: 'Octocopter'
          , 3: 'Fixed Wing', 4: 'Quadplane VTOL', 5: 'Tilt-Rotor VTOL'
        },
      },
      {
        title: 'Date Entered', field: 'createdDate',
        render: rowData => <Date date={rowData.createdDate} />,
        editComponent: props => (
          <KeyboardDatePicker
            margin="normal"
            id="date"
            value={props.value}
            onChange={props.onChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        )
      },
      {
        title: 'Due Date', field: 'dueDate',
        render: rowData => <Date date={rowData.dueDate} />,
        editComponent: props => (
          <KeyboardDatePicker
            margin="normal"
            id="date"
            value={props.value}
            onChange={props.onChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        )
      },
      {
        title: 'Status',
        field: 'status',
        lookup: { 3: 'Overdue', 2: 'Completed', 1: 'In Progress', 0: 'Open' },
      },
    ],
    data: [
      { name: 'SOmething Happened 1', description: '', createdDate: null, dueDate: null, type: '1', droneId: 87, status: 0 },
      { name: 'SOmething Happened 2', description: '', createdDate: null, dueDate: null, type: '2', droneId: 86, status: 1 },
      { name: 'Something Happened 3', description: '', createdDate: null, dueDate: null, type: '4', droneId: 88, status: 2 },
      { name: 'Something Happened 4', description: '', createdDate: null, dueDate: null, type: '4', droneId: 89, status: 0 },
      { name: 'SOmething Happened 5', description: '', createdDate: null, dueDate: null, type: '5', droneId: 81, status: 3 },
    ],
  });

  const dispatch = useDispatch();

  const { maintenance, drones } = useSelector(({ dms }) => dms);

  useEffect(() => {
    dispatch(actions.getMaintenance());
    dispatch(actions.fetchDrones());
  }, [dispatch]);

  useEffect(() => {
    console.log(maintenance);
    
    if (maintenance !== undefined && maintenance.data !== undefined) {
      const newData = maintenance.data.map(m => {
        return {
          ...m,
          droneId: m.droneId._id,
          type:m.droneId.type
        }
      })

      // console.log(newData);
      setCardData(maintenance.cards);
      setState(prevState => { return { ...prevState, data: newData } })
    }
  }, [maintenance]);

  useEffect(() => {
    const newState = { ...state };
    let lookup = "{"
    if (drones.length !== 0) {
      drones.map((drone, i, array) => lookup = (array[i + 1] !== undefined) ? lookup + `"${drone._id}": "${drone.name}",` : lookup + `"${drone._id}": "${drone.name}"}`);
      newState.columns[1].lookup = JSON.parse(lookup + '')
      setState(newState)
    }
  }, [drones, dispatch])

  const [selectedRow, setSelectedRow] = React.useState(null);

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
    <div>
      <div style={{ paddingBottom: '30px' }}>
        <Grid container spacing={5} justify="center">
          {card}
        </Grid>
      </div>
      <div className="animated slideInUpTiny animation-duration-3">
        {/* <div className="jr-card">
          <div className="jr-card-header">
          <h1 className="mb-0  font-weight-bold"><IntlMessages id="Drones" /></h1>
          <h3 className="mb-0 mt-3">125 Total</h3>
          </div>
        </div> */}
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <MaterialTable
            theme={theme}
            title="Maintenance"
            columns={state.columns}
            data={state.data}
            icons={TableIcons}
            // onRowClick={((evt, selectedRow) => openDroneDetail(selectedRow.tableData.id))}
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
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    // console.log(newData);
                    dispatch(actions.addMaintenance(newData))
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
                      // console.log(newData);
                      dispatch(actions.updateMaintenance(newData, newData._id))
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
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
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
}

export default Maintenance;