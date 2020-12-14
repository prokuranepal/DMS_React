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
 * @returns {Drones} - Returns a material-table of maintenance
 * @argument {Drones} - No Arguments
 */

const Maintenance = () => {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Drone Id', field: 'droneId' },
      { title: 'Description', field: 'description' },
      {
        title: 'Type', field: 'type',
        lookup: {
          0: 'Quadcopter', 1: 'Hexacopter', 2: 'Octocopter'
          , 3: 'Fixed Wing', 4: 'Quadplane VTOL', 5: 'Tilt-Rotor VTOL'
        },
      },
      {
        title: 'Date Entered', field: 'date',
        render: rowData => <Date date={rowData.date}/>,
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
      { name: 'SOmething Happened 1', description:'', date: null, type: '1', droneId: 87, status: 0 },
      { name: 'SOmething Happened 2', description:'', date: null, type: '2',droneId: 86, status: 1 },
      { name: 'Something Happended 3', description:'', date: null, type: '4',droneId: 88, status: 2 },
      { name: 'Something Happened 4', description:'', date: null,type: '4', droneId: 89, status: 0 },
      { name: 'SOmething Happened 5', description:'', date: null, type: '5',droneId: 81, status: 3 },
    ],
  });

  const dispatch = useDispatch();

  const { maintenance } = useSelector(({ dms }) => dms);
  
  useEffect(() => {
    // dispatch(actions.getMaintenance())
  }, [dispatch]);

  useEffect(() => {
    setState((prevState) => {

      return { ...prevState, data: maintenance };
    });
  }, [maintenance]);

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

  const cardData = {
      "completed": 4,
      "inProgress": 5,
      "overdue": 6,
      "open": 7
  }

  const card = cardData !== undefined && cardData !== null ? cards.data.map((data, index) => {
        return (
            <Grid item lg={3} md={3} xs={6} key={index}>
                <IconWithTextCard data={data} value={cardData[data.title]} style={{marginBottom: 0}}/>
            </Grid>
        )
    }) : null;


  return (
    <div>
         <div style={{paddingBottom: '30px'}}>
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
                    console.log(newData);
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
                      console.log(newData);
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