import React, { forwardRef, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../../../store/actions/dms'
import IntlMessages from "../../../../../util/IntlMessages";
import MaterialTable from 'material-table';
import Spinner from '../../../../../homeComponents/UI/Spinner/Spinner'

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Detail from '@material-ui/icons/DetailsOutlined'

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function createData(name, droneId, numOfFlight, type, status) {

  return { name, droneId, numOfFlight, type, status };
}

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
      {
        title: 'Status',
        field: 'status',
        lookup: { 2: 'Under Maintenance', 1: 'Active', 0: 'Inactive' },
      },
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

  const dispatch = useDispatch();
  const { drones } = useSelector(({ dms }) => dms);
  console.log(drones);
  useEffect(() => {
    dispatch(actions.fetchDrones())
  }, [dispatch]);

  useEffect(() => {
    setState((prevState) => {

      return { ...prevState, data: drones };
    });
  }, [drones])
  return (
    <div>
      <div className="animated slideInUpTiny animation-duration-3">
        <div className="jr-card">
          <div className="jr-card-header">
            <h1 className="mb-0  font-weight-bold"><IntlMessages id="Drones" /></h1>
            <h3 className="mb-0 mt-3">125 Total</h3>
          </div>
        </div>
        <MaterialTable
          actions={[
            {
              icon: Detail,
              onClick: (event, rowData) => {
                console.log(rowData);
              }
            }
          ]}
          title="Drones"
          columns={state.columns}
          data={state.data}
          icons={tableIcons}
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
      </div>
    </div>
  );
}

export default Drone;