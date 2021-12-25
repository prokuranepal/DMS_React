import React, { useEffect } from "react";
import MaterialTable from 'material-table';
import TableIcons from '../../homeComponents/TableIcons/TableIcons';
import * as actions from '../../store/actions/mission';
import {useDispatch, useSelector} from 'react-redux';
import { Redirect } from 'react-router';

const CreateData = (data) => {
    return {_id:data._id, name:data.name, estimated_time: data.estimated_time, distance: data.distance, destination: data.destination.name, location: data.destination.location,
    waypoints: data.wb, origin: data.hospital.name }
}

/**
* A List of missions
*
* @param - No parameters
* @returns {MissionList} - returns a material table of missions
*/

const MissionList = () => {

    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Estimated Time', field: 'estimated_time'},
            { title: 'Distance', field: 'distance'},
            { title: 'Destination', field: 'destination' },
            { title: 'Location', field: 'location' },
            { title: 'Waypoints', field: 'waypoints' },
            { title: 'Origin', field: 'origin' },
        ],
        data: [
        ],
    });
    const [selectedRow, setSelectedRow] = React.useState(null);
    const [redirect, setRedirect] = React.useState(null);
    const missions = useSelector(({mission}) => mission.missions);
    const dispatch = useDispatch();

    useEffect(() => {
        const refinedMissions = missions.map(mission => {
            return CreateData(mission);
        })
        console.log(missions);
        setState(prevState => { return { ...prevState, data: refinedMissions } })
    }, [missions])

    const setSelected = (missionId) => {
        console.log(missionId)
        dispatch(actions.getMission(missionId));
        setRedirect(<Redirect
            to={{
            pathname: "/app/missionplanner/missionview",
            state: { edit: true }
          }}
        />)
    }

    useEffect(() => {
        dispatch(actions.fetchMissionList());
    },[dispatch])

    return (
        <div className="app-wrapper">
            <div className="animated slideInUpTiny animation-duration-3">
            {redirect}
                <MaterialTable
                    title="Mission List"
                    columns={state.columns}
                    data={state.data}
                    data-test="missiontable"
                    icons={TableIcons}
                    onRowClick={((evt, selectedRow) => setSelected(selectedRow._id))}
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
                        onRowDelete: (oldData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve();
                                    setState((prevState) => {
                                        const data = [...prevState.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        dispatch(actions.deleteMission(oldData._id))
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

export default MissionList;