import React, { useEffect } from "react";
import MaterialTable from 'material-table';
import TableIcons from '../../../../homeComponents/TableIcons/TableIcons';

import * as actions from '../../../../store/actions/dashboard';
import { useDispatch, useSelector } from 'react-redux';

const BloodBank = (props) => {
    const [state, setState] = React.useState({
        columns: [
            // { title: 'ID', field: 'healthpostId' },
            { title: 'Name', field: 'name'},
            { title: 'Location', field: 'location' },
            {
                title: 'Type', field: 'type',
                lookup: {
                    'healthpost': 'Health Post'
                },
            },
        ],
        data: [
        ],
    });
    const [selectedRow, setSelectedRow] = React.useState(null);
    const dispatch = useDispatch();

    const healthposts = useSelector(({ dashboard }) => dashboard.healthposts)

    useEffect(() => {
        dispatch(actions.getHealthposts())
    }, [dispatch]);

    useEffect(() => {
        // console.log("Health posts changed")
        setState((prevState) => {
            return { ...prevState,
            data: healthposts}
        })
    }, [healthposts])

    return (
        <div>
            <div className="animated slideInUpTiny animation-duration-3">

                <MaterialTable
                    title="Health Posts"
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
                                    dispatch(actions.addHealthPosts(newData))
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
                                        dispatch(actions.updateHealthPosts(newData, newData._id))
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
                                        dispatch(actions.deleteHealthPosts(oldData._id))
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

export default BloodBank;