import React, { forwardRef } from "react";

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

const Drone = () => {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'No. of flights', field: 'flightnumber' },
      { title: 'Drone Id', field: 'droneid' },
      {
        title: 'Status',
        field: 'status',
        lookup: { 34: 'under maintance', 63: 'active' },
      },
    ],
    data: [
      { name: 'Mavic pro', flightnumber: '125 hr', droneid: 87, status: 63 },
      { name: 'Baaj 1.0', flightnumber: '125 hr', droneid: 87, status: 34 },
      { name: 'Phanthom', flightnumber: '125 hr', droneid: 87, status: 63 },
      { name: 'Mavic Air', flightnumber: '125 hr', droneid: 87, status: 34 },
      { name: 'Mavic Air 2', flightnumber: '125 hr', droneid: 87, status: 63 },
      { name: 'Dji spark', flightnumber: '125 hr', droneid: 87, status: 63 },
      { name: 'Mavic', flightnumber: '125 hr', droneid: 87, status: 34 },
    ],
  });

  return (
    <div>
      <div className="animated slideInUpTiny animation-duration-3">
        <div className="jr-card">
          <div className="jr-card-header">
            <h1 className="mb-0  font-weight-bold"><IntlMessages id="Drones"/></h1>
            <h3 className="mb-0 mt-3">125 Total</h3>
          </div>
        </div>
        <MaterialTable
          title="Drones"
          columns={state.columns}
          data={state.data}
          icons={tableIcons}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
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