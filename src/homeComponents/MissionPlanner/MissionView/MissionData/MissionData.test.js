import React from 'react';
import MissionData from './MissionData';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()
const dummy_data={
    create:true, 
    openMission:function_click, 
    onCreateMission:function_click, 
    mission:{
        name:"Dharan-Biratnagar",
        speed:5,
        radius:50,
        home:"Dharan", 
        destination:"Biratnagar",
        waypoints:["1","2","3"]
    }, 
    waypoint:{
        altitude:100,
        radius:45, 
        action:"land",
        lat:"85.343434",
        lng:"127.39283"
    },
    onChangeMission:function_click, 
    onCancel:function_click, 
    createUpdateMission:function_click, 
    onChange:function_click,
    action:"create"
}

const setup = (props = {}, state = null) => {
    return (shallow( < MissionData {...props}  />)
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


describe('MissionData />', () => {


//   beforeEach(() => {
//     wrapper = setup(dummy_data)
//   });

  afterEach(() => {
    jest.clearAllMocks();
  });


it("MissionData snapshot", () => {
        let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();

  
})

it("Create Components exist", () => {
    const wrapper =setup({...dummy_data, create:false})
   const createComponents = findByTestAttr(wrapper, "create-components")
    expect(createComponents).toHaveLength(1)
    const createdComponents = findByTestAttr(wrapper, "created-components")
    expect(createdComponents).toHaveLength(0);
    const openMissionButton = findByTestAttr(wrapper, "open-mission-button");
    openMissionButton.props().onClick()
    expect(function_click).toHaveBeenCalledTimes(1)
    const createMissionButton = findByTestAttr(wrapper, "create-mission-button");
    createMissionButton.props().onClick()
    expect(function_click).toHaveBeenCalledTimes(2)
})

it("Created Components exist", () => {
    const wrapper =setup(dummy_data)
   const createComponents = findByTestAttr(wrapper, "create-components")
    expect(createComponents).toHaveLength(0)
    const createdComponents = findByTestAttr(wrapper, "created-components")
    expect(createdComponents).toHaveLength(1);

})
it("Mission Name Component", () => {
    const wrapper =setup(dummy_data)
   const missionName = findByTestAttr(wrapper, "mission-name")
    expect(missionName.prop("value")).toEqual("Dharan-Biratnagar");
    missionName.props().onChange("event");
    expect(function_click).toHaveBeenCalledTimes(1);
    expect(function_click).toHaveBeenCalledWith("event","name")

})

it("Mission radius Component", () => {
    const wrapper =setup(dummy_data)
   const missionradius = findByTestAttr(wrapper, "mission-radius")
    expect(missionradius.prop("value")).toEqual(50);
    missionradius.props().onChange("event");
    expect(function_click).toHaveBeenCalledTimes(1);
    expect(function_click).toHaveBeenCalledWith("event","radius")

})

it("Mission Speed Component", () => {
    const wrapper =setup(dummy_data)
   const missionSpeed = findByTestAttr(wrapper, "mission-speed")
    expect(missionSpeed.prop("value")).toEqual(5);
    missionSpeed.props().onChange("event");
    expect(function_click).toHaveBeenCalledTimes(1);
    expect(function_click).toHaveBeenCalledWith("event","speed")

})
it("Mission home Component", () => {
    const wrapper =setup(dummy_data)
   const missionhome = findByTestAttr(wrapper, "mission-home")
    expect(missionhome.prop("value")).toEqual("Dharan");
    missionhome.props().onChange("event");
    expect(function_click).toHaveBeenCalledTimes(1);
    expect(function_click).toHaveBeenCalledWith("event","home")

})
it("Mission destination Component", () => {
    const wrapper =setup(dummy_data)
   const missionradius = findByTestAttr(wrapper, "mission-destination")
    expect(missionradius.prop("value")).toEqual("Biratnagar");
    missionradius.props().onChange("event");
    expect(function_click).toHaveBeenCalledTimes(1);
    expect(function_click).toHaveBeenCalledWith("event","destination")

})
it("Mission cancel/confirm Component", () => {
    const wrapper =setup(dummy_data)
   const cancelButton = findByTestAttr(wrapper, "cancel-button")
    cancelButton.props().onClick("event");
    expect(function_click).toHaveBeenCalledTimes(1);
    const confirmButton = findByTestAttr(wrapper, "create-confirm-button")
    confirmButton.props().onClick()
    expect(function_click).toHaveBeenCalledTimes(2);
    expect(confirmButton.prop("disabled")).toEqual(false)
    const wrapper2 = setup({...dummy_data, mission:{...dummy_data.mission, waypoints:[]}})
    const confirmButton2 = findByTestAttr(wrapper2, "create-confirm-button")
    expect(confirmButton2.prop("disabled")).toEqual(true)
    const updateButton = findByTestAttr(wrapper, "create-update-button")
    expect(updateButton).toHaveLength(0)
})
it("Mission update Component", () => {
    const wrapper =setup({...dummy_data,action:"update"})
    const updateButton = findByTestAttr(wrapper, "create-update-button")
     updateButton.props().onClick()
    expect(function_click).toHaveBeenCalledTimes(1);
    expect(updateButton.prop("disabled")).toEqual(false)
    const wrapper2 = setup({...dummy_data,action:"update", mission:{...dummy_data.mission, waypoints:[]}})
    const updateButton2 = findByTestAttr(wrapper2, "create-update-button")
    expect(updateButton2.prop("disabled")).toEqual(true)

})
it("Mission waypoints Components", () => {
    const wrapper =setup(dummy_data)
    const missionWaypoint = findByTestAttr(wrapper, "mission-waypoints-components")
    expect(missionWaypoint).toHaveLength(1)
    const noMissionWaypoint = findByTestAttr(wrapper, "no-waypoints-components")
    expect(noMissionWaypoint).toHaveLength(0)

})
it("Mission no waypoints Components", () => {
    const wrapper =setup({...dummy_data, mission:{...dummy_data.mission, waypoints:[]}})
    const missionWaypoint = findByTestAttr(wrapper, "mission-waypoints-components")
    expect(missionWaypoint).toHaveLength(0)
    const noMissionWaypoint = findByTestAttr(wrapper, "no-waypoints-components")
    expect(noMissionWaypoint).toHaveLength(1)

})

it("Waypoint altitude Component", () => {
    const wrapper =setup(dummy_data)
    const waypointaltitude = findByTestAttr(wrapper, "waypoint-altitude")
    expect(waypointaltitude.prop("value")).toEqual(100)
    waypointaltitude.props().onChange("event")
    expect(function_click).toHaveBeenCalledTimes(1);
    expect(function_click).toHaveBeenCalledWith("event","altitude")


})
it("Waypoint radius Component", () => {
    const wrapper =setup(dummy_data)
    const waypointradius = findByTestAttr(wrapper, "waypoint-radius")
    expect(waypointradius.prop("value")).toEqual(45)
    waypointradius.props().onChange("event")
    expect(function_click).toHaveBeenCalledTimes(1);
    expect(function_click).toHaveBeenCalledWith("event","radius")


})

it("Waypoint action Component", () => {
    const wrapper =setup(dummy_data)
    const waypointaction = findByTestAttr(wrapper, "waypoint-action")
    expect(waypointaction.prop("value")).toEqual("land")
    waypointaction.props().onChange("event")
    expect(function_click).toHaveBeenCalledTimes(1);
    expect(function_click).toHaveBeenCalledWith("event","action")


})
it("Waypoint latitude Component", () => {
    const wrapper =setup(dummy_data)
    const waypointlat = findByTestAttr(wrapper, "waypoint-lat")
    expect(waypointlat.prop("value")).toEqual("85.343434")
   
})
it("Waypoint longitude Component", () => {
    const wrapper =setup(dummy_data)
    const waypointlng = findByTestAttr(wrapper, "waypoint-lng")
    expect(waypointlng.prop("value")).toEqual("127.39283")
   
})
})
