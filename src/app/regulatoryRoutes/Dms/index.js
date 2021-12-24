import React, { useEffect } from "react";
import MaterialTable from "material-table";
import TableIcons from "../../../homeComponents/TableIcons/TableIcons";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../../store/actions/users";
// import * as dashboardActions from "../../../../store/actions/dashboard";
import { Redirect } from "react-router";

/**
 * A List of healthpost users
 *
 * @param - No parameters
 * @returns {ListUsers} - returns a material table of healthpost users
 */

const ListHospitals = (props) => {
  // const hospitals = useSelector(({ dashboard }) => dashboard.hospitals);

  const [state, setState] = React.useState({
    columns: [
      // { title: "User Name", field: "userName" },
      {
        title: "Hospital Name",
        field: "name",
      },
      { title: "Province", field: "province" },
      { title: "District", field: "district" },
      { title: "Municipality/VDC", field: "town" },
      { title: "Landline Number", field: "landlineNumber" },
    //   { title: "Email", field: "email" },
      // { title: "Contact Person", field: "contactPerson" },
      // { title: "Mobile Number", field: "mobileNumber" },
    //   { title: "Password", field: "password" },
    ],
    data: [],
  });
  const dispatch = useDispatch();
  const hospitals = useSelector(({ users }) => users.hospitals);
  const [redirectTo, setRedirectTo] = React.useState(null);
  const [redirectToAdd, setRedirectToAdd] = React.useState(null);

  useEffect(() => {
    // dispatch(actions.getUsers());
    dispatch(actions.getCentralHospitals());
  }, [dispatch]);

  useEffect(() => {
    if (hospitals !== undefined && hospitals !== null) {
      // setState(prevState => { return { ...prevState, data: userData.healthpost } })
      // console.log(userData.healthpost)

      // console.log(newData);
      setState((prevState) => {
        return { ...prevState, data: hospitals };
      });
    }
  }, [hospitals]);

  const [selectedRow, setSelectedRow] = React.useState(null);

  const selectUser = (id) => {
    // console.log(id);
    setRedirectTo(
      <Redirect
        to={{
          pathname: "/app/users/hospital",
          state: { id: id },
        }}
      />
    );
  };


  // console.log(userData);
  return (
    <div className="app-wrapper">
      <div className="animated slideInUpTiny animation-duration-3">
        <MaterialTable
          title="Central Hospitals"
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
        />
      </div>
    </div>
  );
};

export default ListHospitals;
