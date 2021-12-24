import React, { useEffect } from "react";
import MaterialTable from "material-table";
import TableIcons from "../../../../homeComponents/TableIcons/TableIcons";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../../store/actions/users";
// import * as dashboardActions from "../../../../store/actions/dashboard";
import { Redirect } from "react-router";

/**
 * A List of healthpost users
 *
 * @param - No parameters
 * @returns {ListUsers} - returns a material table of healthpost users
 */

const HospitalUsers = (props) => {
  // const hospitals = useSelector(({ dashboard }) => dashboard.hospitals);

  const [state, setState] = React.useState({
    columns: [
      // { title: "User Name", field: "userName" },
      {
        title: "Name",
        field: "name",
      },{ title: "Department", field: "department" },
      { title: "Email", field: "email" },
      { title: "Phone Number", field: "phoneNumber" },
      { title: "Position", field: "position" },
      { title: "Password", field: "password" },
      {
        title: 'Hospital',
        field: 'bodiesId',
        lookup: {  },
      },
      {
        title: 'Role',
        field: 'role',
        lookup: { 2: 'User' },
      },
    ],
    data: [],
  });
  const dispatch = useDispatch();
  const hospitals = useSelector(({ users }) => users.hospitals);
  const hospitalUsers = useSelector(({ users }) => users.hospitalUsers);

  useEffect(() => {
    dispatch(actions.getHospitalUsers());
    dispatch(actions.getCentralHospitals());
  }, [dispatch]);

  useEffect(() => {
    console.log(hospitalUsers)
    if (hospitalUsers !== undefined && hospitalUsers !== null) {
      // console.log(hospitalUsers)
      const newData = hospitalUsers.map(user => {
        return{...user, bodiesId: user.bodiesId._id}})
      // console.log(newData)
      setState((prevState) => {
        return { ...prevState, data: newData};
      });
    }
  }, [hospitalUsers]);

  useEffect(() => {
    if (hospitals !== undefined && hospitals !== null) {

      let newLookUp = {};
      hospitals.map(hospital => {
        newLookUp = {...newLookUp,[hospital._id]: hospital.name}
      })
      // console.log(state)
      const newState = {...state};
      newState.columns[6] = {...newState.columns[6], 
                                lookup: newLookUp}
      // console.log(newState);
      setState(newState);
    }
  }, [hospitals]);

  const [selectedRow, setSelectedRow] = React.useState(null);
  
  // console.log(userData);
  return (
    <div className="app-wrapper">
      
      <div className="animated slideInUpTiny animation-duration-3">
        <MaterialTable
          title="Hospital Users"
          columns={state.columns}
          data={state.data}
          icons={TableIcons}
        //   onRowClick={(evt, selectedRow) =>
        //     selectUser(selectedRow.tableData.id)
        //   }
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
          editable={{
            onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                console.log(newData);
                dispatch(actions.addHospitalUser({...newData, bodiesType: 'Hospital'}))
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
                      dispatch(actions.updateHospitalUser(newData._id, newData))
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
                    dispatch(actions.deleteHospitalUser(oldData._id));
                    return { ...prevState, data };
                  });
                }, 600);
              }),
          }}
        />
      </div>
    </div>
  );
};

export default HospitalUsers;
