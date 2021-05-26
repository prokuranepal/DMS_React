import React from 'react';
import MissionLists,{missions} from './MissionLists';
import {
    configure,
    mount
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const mockStore = configureStore([]);
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


const setup = (props = {},store=null, state = null) => {
    return mount(<Provider store={store} > < MissionLists {...props}  /></Provider>)
    
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}



describe('MissionLists />', () => {
  let wrapper;
let store

  beforeEach(() => {

store = mockStore({
  mission:{
missions:[{"_id":1,"data":"data1", name:"name1", estimated_time:"20:45", distance:10, destination:{name:"destination1", location:"location1"}, wb:"wb1", hospital:{name:"hospital1"}},
{"_id":2,"data":"data2",name:"name2", estimate_time:"20:42", distance:12, destination:{name:"destination2", location:"location2"}, wb:"wb2", hospital:{name:"hospital2"}}]
}}
);
store.dispatch=jest.fn();

    wrapper = setup({},store)
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


it("MissionLists snapshot", () => {
        // let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();

  
})

it("MissionLists Components", () => {

   const missionComponent = findByTestAttr(wrapper, "missiontable")
    // expect(missionComponent).toHaveLength(missions.length);
    // expect(missionComponent.at(2).prop("id")).toEqual("efg");
    // expect(missionComponent.at(3).prop("source")).toEqual("Dharan");
    // expect(missionComponent.at(0).prop("destination")).toEqual("Biratnagar");
    expect(missionComponent).toHaveLength(3)
    expect(missionComponent.at(2).prop('data')).toEqual(
      [{"destination": "destination1", "distance": 10, "estimated_time": "20:45", "location": "location1", "name": "name1", "origin": "hospital1", "tableData": {"id": 0}, "waypoints": "wb1"}, {"destination": "destination2", "distance": 12, "estimated_time": undefined, "location": "location2", "name": "name2", "origin": "hospital2", "tableData": {"id": 1}, "waypoints": "wb2"}]
  )


})
})
