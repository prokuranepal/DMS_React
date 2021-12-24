import React, { useEffect } from 'react';
import MaterialTable from 'material-table';
import TableIcons from '../../../homeComponents/TableIcons/TableIcons';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../../store/actions/users'
import * as dashboardActions from '../../../store/actions/dashboard'
import { Redirect } from 'react-router';
import Healthposts from '../../Dms/Healthposts/Healthposts';

/**
* A List of healthpost users
*
* @param - No parameters
* @returns {ListUsers} - returns a material table of healthpost users
*/

const ListUsers = () => {

    const healthposts = useSelector(({ users }) => users.healthposts);

    const [state, setState] = React.useState({
        columns: [
            {
                title: "Name",
                field: "name",
              },{ title: "Department", field: "department" },
              { title: "Email", field: "email" },
              { title: "Phone Number", field: "phoneNumber" },
              { title: "Position", field: "position" },
              { title: "Password", field: "password" },
              {
                title: 'Health Post',field: 'bodiesId',
                lookup: {
                    'default': 'Default'
                },
            }],
        data: [
        ],
    });
    const dispatch = useDispatch();
    const userData = useSelector(({ users }) => users.users)
    const [redirectTo, setRedirectTo] = React.useState(null);

    useEffect(() => {
        dispatch(actions.getUsers());
        dispatch(actions.getHealthposts());
    }, [dispatch])

    useEffect(() => {
        if (userData !== undefined && userData !== null) {
            // setState(prevState => { return { ...prevState, data: userData.healthpost } })
            // console.log(userData.healthpost)
            // const newData = userData.healthpost.map(user => {
            //     return {
            //         ...user,
            //         healthFacilities: user.healthFacilities._id
            //     }
            // })
            const newData = userData.map(user => {
                return{...user, bodiesId: user.bodiesId._id}})

            // console.log(newData);
            setState(prevState => { return { ...prevState, data: newData } })
        }
    }, [userData]);

    useEffect(() => {
        // const newState = { ...state };
        // // console.log(healthposts);
        // let lookup = "{"
        // if (healthposts.length !== 0) {
        //     healthposts.map((healthpost, i, array) => lookup = (array[i + 1] !== undefined) ? lookup + `"${healthpost._id}": "${healthpost.name}",` : lookup + `"${healthpost._id}": "${healthpost.name}"}`);
        //     // console.log(lookup);
        //     newState.columns[2].lookup = JSON.parse(lookup + '')
        //     // console.log(newState);
        //     setState(newState)
        // }

        if (healthposts !== undefined && healthposts !== null) {

            let newLookUp = {};
            healthposts.map(post => {
              newLookUp = {...newLookUp,[post._id]: post.name}
            })
            // console.log(state)
            const newState = {...state};
            newState.columns[6] = {...newState.columns[6], 
                                      lookup: newLookUp}
            // console.log(newState);
            setState(newState);
          }

    }, [healthposts, dispatch])


    const [selectedRow, setSelectedRow] = React.useState(null);

    const selectUser = (id) => {
        // console.log(id);
        setRedirectTo(<Redirect to={{
            pathname: '/app/users/profile',
            state: { id: id }
        }} />)
    }
    // console.log(userData);
    return (
        <div className="app-wrapper">
            {redirectTo}
            <div className="animated slideInUpTiny animation-duration-3">
                <MaterialTable
                    title="Users"
                    columns={state.columns}
                    data={state.data}
                    icons={TableIcons}
                    onRowClick={((evt, selectedRow) => selectUser(selectedRow.tableData.id))}
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
                                      dispatch(actions.addUser({...newData, bodiesType: 'Health Post'}))
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
                                        dispatch(actions.updateUser(newData, newData._id))
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
                                        dispatch(actions.deleteUser(oldData._id))
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                    }}
                />
            </div>
        </div>)
}

export default ListUsers;