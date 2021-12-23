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

const RegulatoryUsers = (props) => {
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
        title: 'Institution',
        field: 'bodiesId',
        lookup: {  },
      },
      {
        title: 'Role',
        field: 'role',
        lookup: { 2: 'User'},
      },
    ],
    data: [],
  });
  const dispatch = useDispatch();
  const regulatoryBodies = useSelector(({ users }) => users.regulatoryBodies);
  const regulatoryUsers = useSelector(({ users }) => users.regulatoryUsers);

  useEffect(() => {
    dispatch(actions.getRegulatoryUsers());
    dispatch(actions.getRegulatoryBodiesList());
  }, [dispatch]);

  useEffect(() => {
    if (regulatoryUsers !== undefined && regulatoryUsers !== null) {
      // console.log(regulatoryUsers)
      const newData = regulatoryUsers.map(user => {
        return{...user, bodiesId: user.bodiesId._id}})
      // console.log(newData)
      setState((prevState) => {
        return { ...prevState, data: newData};
      });
    }
  }, [regulatoryUsers]);

  useEffect(() => {
    if (regulatoryBodies !== undefined && regulatoryBodies !== null) {

      let newLookUp = {};
      regulatoryBodies.map(body => {
        newLookUp = {...newLookUp,[body._id]: body.name}
      })
      // console.log(state)
      const newState = {...state};
      newState.columns[6] = {...newState.columns[6], 
                                lookup: newLookUp}
      // console.log(newState);
      setState(newState);
    }
  }, [regulatoryBodies]);

  const [selectedRow, setSelectedRow] = React.useState(null);
  
  // console.log(userData);
  return (
    <div className="app-wrapper">
      
      <div className="animated slideInUpTiny animation-duration-3">
        <MaterialTable
          title="Regulatory Users"
          columns={state.columns}
          data={state.data}
          icons={TableIcons}
        //   onRowClick={(evt, selectedRow) =>
        //     selectUser(selectedRow.tableData.id)
        //}
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
                dispatch(actions.addHospitalUser({...newData, bodiesType: 'Regulatory Body'}))
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
                      dispatch(actions.updateHospitalUser( newData._id,newData))
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

export default RegulatoryUsers;
