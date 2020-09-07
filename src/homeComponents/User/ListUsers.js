import React, { useEffect} from 'react';
import MaterialTable from 'material-table';
import TableIcons from '../../homeComponents/TableIcons/TableIcons';
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions/users'

const ListUsers = props => {

    const [state, setState] = React.useState({
        columns: [
            { title: 'First Name', field: 'firstname' },
            { title: 'Last Name', field: 'lastname' },
            { title: 'Health Post', field: 'healthPost' },
            { title: 'Address', field: 'address' },
            { title: 'Phone Number', field: 'phonenumber' },
            { title: 'Email', field: 'email' },
            { title: 'Password', field: 'password' }
        ],
        data: [
        ],
    });
    const dispatch = useDispatch();
    const userData = useSelector(({ users }) => users.users)

    useEffect(() => {
        dispatch(actions.getUsers());
    }, [dispatch])

    useEffect(() => {
        setState(prevState => { return { ...prevState, data: userData.healthpost } })
    }, [userData])

    const [selectedRow, setSelectedRow] = React.useState(null);

    console.log(userData);
    return (
        <div className="app-wrapper">
            <div className="animated slideInUpTiny animation-duration-3">
                <MaterialTable
                    title="Users"
                    columns={state.columns}
                    data={state.data}
                    icons={TableIcons}
                    onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
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
                                    //   dispatch(actions.addMedicine(newData))
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
                                        // dispatch(actions.updateMedicine(newData, newData._id))
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
                                        // dispatch(actions.deleteMedicine(oldData._id))
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