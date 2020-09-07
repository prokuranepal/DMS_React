import React, { useEffect } from "react";
import MaterialTable from 'material-table';
import TableIcons from '../../homeComponents/TableIcons/TableIcons';

const Medicine = (props) => {
    const [state, setState] = React.useState({
        columns: [
            { title: 'ID', field: 'medicineId' },
            { title: 'Name', field: 'name', validate: rowData => rowData.name === '' ? 'Name cannot be empty' : '' },
            { title: 'Description', field: 'description', validate: rowData => rowData.description === '' ? { isValid: false, helperText: 'Description cannot be empty' } : true, },
            { title: 'Dosage', field: 'dosage' },
            { title: 'Quantity', field: 'quantity' },
            { title: 'Unit', field: 'unit' },
            { title: 'Class', field: 'class' },
            {
                title: 'Type', field: 'type',
                lookup: {
                    'tablet': 'Tablet', 'liquid': 'Liquid'
                },
            },
        ],
        data: [
        ],
    });
    const [selectedRow, setSelectedRow] = React.useState(null);

    useEffect(() => {
        setState(prevState => { return { ...prevState, data: props.list } })
    }, [props.list])

    return (
        <div>
            <div className="animated slideInUpTiny animation-duration-3">

                <MaterialTable
                    title="Medicines"
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
                                    //   dispatch(actions.addDrone(newData))
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
                                        // dispatch(actions.updateDrone(newData, newData._id))
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

export default Medicine;