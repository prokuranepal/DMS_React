import React from 'react';
import MissionView from './MissionView';
import {
    configure,
    mount
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {act} from 'react-dom/test-utils';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import testSnapFunction,{findByTestAttr} from '../../../util/testSnapFunction'
const mockStore = configureStore([]);
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const getValue1=jest.fn();
getValue1.mockReturnValue({lat:101,lng:102});

describe('<MissionView />', () => {
    let store;
  beforeEach(() => {
      store = mockStore({
          mission:{
              missionDetail:{
                  waypoints:[{lat:2, lng:1,action:22, altitude:20},{lat:1,lng:2,action:21, altitude:10}]
              },
              missions:[{id:1, mission:"mission1"}, {id:2, mission:"mission2"}]
          },
           droneControl:{
          missions:[
              "mission1", "mission2", "mission3"
          ]
      },
      dashboard:{
        healthposts:[{_id:1, name:"dashboard1"},{_id:2,name:"dashboard2"}]
      }
      }
     );
      store.dispatch=jest.fn();
    });
 

  afterEach(() => {
    jest.clearAllMocks();
  });

// testSnapFunction("<MissionView />","Snapshot test",<Provider store={store}> < MissionView {...dummy_data}  /> </Provider>)


it("MissionView Components", () => {
      let wrapper=  mount(<Provider store={store}> < MissionView   /> </Provider>)
   const missionData = findByTestAttr(wrapper, "missionData").at(0)
   const mapComp = findByTestAttr(wrapper, "mapComp").at(0)
   const markerComp = findByTestAttr(wrapper, "markerComp").at(0)
   const modalComp = findByTestAttr(wrapper, "modalComp").at(0)
   const missionList = findByTestAttr(wrapper, "missionList").at(0)
    
    expect(missionData.props().action).toEqual("create")
    expect(missionData.props().mission).toEqual({  waypoints: [{lat:2, lng:1,action:22, altitude:20},{lat:1,lng:2,action:21, altitude:10}]})
      expect(missionData.props().create).toEqual(true)//update on useEffect

  expect(markerComp.props().position).toEqual([2,1])
  act(()=>{ missionData.props().onChange({target:{
       value:333
   }},"lat");
  })
   wrapper.update();
  let missionData2=findByTestAttr(wrapper, "missionData").at(0)
  console.log(missionData2.props().mission)
   expect(missionData2.props().mission).toEqual({waypoints:[{lat:333, lng:1,action:22, altitude:20},{lat:1,lng:2,action:21, altitude:10}]})
  
  
    act(()=>{ missionData.props().onChangeMission({target:{
  value:   [{lat:87, lng:128,action:22, altitude:10},
     {lat:86,lng:126,action:21, altitude:10},
  {lat:84,lng:124,action:29, altitude:0}
     ]
   }},"waypoints");
  })
     console.log(findByTestAttr(wrapper,"missionData").at(0).props().mission)
    wrapper.update()
     expect(findByTestAttr(wrapper, "missionData").at(0).props().mission).toEqual(
      {  waypoints: [{lat:87, lng:128,action:22, altitude:10},
     {lat:86,lng:126,action:21, altitude:10},
  {lat:84,lng:124,action:29, altitude:0}
     ]}
  )
  expect(modalComp.props().open).toEqual(false)



  act(()=>{missionData.props().openMission()})
  wrapper.update()
    expect(store.dispatch).toHaveBeenCalledTimes(1) //other one is useEffe
    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function))
  expect(findByTestAttr(wrapper, "modalComp").at(0).props().open).toEqual(true)
     const missionList2 = findByTestAttr(wrapper, "missionList").at(0)
  
  
  
    act(()=>{missionList2.props().select()})
    wrapper.update()
    expect(store.dispatch).toHaveBeenCalledTimes(2) //other one is useEffe
    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function))
    expect(findByTestAttr(wrapper, "missionData").at(0).props().action).toEqual("edit")
    expect(findByTestAttr(wrapper, "modalComp").at(0).props().open).toEqual(false)



  act(()=>{missionData.props().openMission()})
  wrapper.update()
  expect(findByTestAttr(wrapper, "modalComp").at(0).props().open).toEqual(true)
act(()=>{missionList2.props().abort()})
    wrapper.update()
expect(findByTestAttr(wrapper, "missionData").at(0).props().action).toEqual("create")
    expect(findByTestAttr(wrapper, "modalComp").at(0).props().open).toEqual(false)


  expect(markerComp.props().draggable).toEqual(true)

  act(()=>{missionData.props().onCreateMission()})
    wrapper.update()
    expect(findByTestAttr(wrapper, "markerComp").at(0).props().draggable).toEqual(true);
    expect(findByTestAttr(wrapper, "missionData").at(0).props().action).toEqual("create")
    expect(findByTestAttr(wrapper, "missionData").at(0).props().create).toEqual(true)
   
   
   const markerComp3 = findByTestAttr(wrapper, "markerComp").at(2) //mount works in a peculiar way needed to write 2 to access 1th element
act(()=>{markerComp3.props().onClick()})
wrapper.update()
  let missionData3=findByTestAttr(wrapper, "missionData").at(0)

 act(()=>{ missionData3.props().onChange({target:{
       value:333
   }},"lat");
  })
   wrapper.update();
  console.log(missionData3.props().mission)
   expect(missionData3.props().mission).toEqual({waypoints:[{lat:87, lng:128,action:22, altitude:10},
     {lat:333,lng:126,action:21, altitude:10},
  {lat:84,lng:124,action:29, altitude:0}]})
  


  act(()=>{markerComp3.props().onDragend({target:{

          getLatLng: getValue1
          
  }}
          )})

   wrapper.update();
 expect(missionData3.props().mission).toEqual({waypoints:[{lat:87, lng:128,action:22, altitude:10},
     {lat:101,lng:102,action:21, altitude:10},
  {lat:84,lng:124,action:29, altitude:0}]})



   const mapComp4 = findByTestAttr(wrapper, "mapComp").at(0)
    act(()=>{mapComp4.props().onClick({latlng:{lat:900, lng:901}})});
   wrapper.update();
 expect(missionData3.props().mission).toEqual({waypoints:[{lat:87, lng:128,action:22, altitude:10},
     {lat:101,lng:102,action:21, altitude:10},
  {lat:84,lng:124,action:29, altitude:0},{lat:900, lng:901, action:"waypoint", altitude:0, radius:0}]})



   const missionData4 = findByTestAttr(wrapper, "missionData").at(0)
    act(()=>{missionData4.props().createUpdateMission()
    })
    wrapper.update();

 expect(findByTestAttr(wrapper, "missionData").at(0).props().mission).toEqual({"destination": "", "home": "", "name": "", "radius": null, "speed": null, "waypoints": []})
    expect(store.dispatch).toHaveBeenCalledTimes(3) //other one is useEffe
    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function))
        expect(findByTestAttr(wrapper, "missionData").at(0).props().action).toEqual("create")
    expect(findByTestAttr(wrapper, "missionData").at(0).props().create).toEqual(false)
//   expect(findByTestAttr(wrapper, "markerComp").at(0).props().draggable).toEqual(false) doesn't work since there are no waypoints

})


it("MissionView for OnCancel", () => {
      let wrapper=  mount(<Provider store={store}> < MissionView   /> </Provider>)
   const missionData = findByTestAttr(wrapper, "missionData").at(0)
   const markerComp = findByTestAttr(wrapper, "markerComp").at(0)
    
    expect(missionData.props().action).toEqual("create")
    expect(missionData.props().mission).toEqual({  waypoints: [{lat:2, lng:1,action:22, altitude:20},{lat:1,lng:2,action:21, altitude:10}]})
      expect(missionData.props().create).toEqual(true)//update on useEffect
    act(()=>{missionData.props().onCancel()})
    wrapper.update()

 expect(findByTestAttr(wrapper, "missionData").at(0).props().mission).toEqual({"destination": "", "home": "", "name": "", "radius": null, "speed": null, "waypoints": []})
        expect(findByTestAttr(wrapper, "missionData").at(0).props().action).toEqual("create")
    expect(findByTestAttr(wrapper, "missionData").at(0).props().create).toEqual(false)
//   expect(findByTestAttr(wrapper, "markerComp").at(0).props().draggable).toEqual(false) doesn't work since there are no waypoints

})
})
