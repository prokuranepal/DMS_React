import React from 'react';
import MissionLists,{missions} from './MissionLists';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


const setup = (props = {}, state = null) => {
    return (shallow( < MissionLists {...props}  />)
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}



describe('MissionLists />', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = setup()
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


it("MissionLists snapshot", () => {
        // let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();

  
})

it("MissionLists Components", () => {

   const missionComponent = findByTestAttr(wrapper, "mission-component")
    expect(missionComponent).toHaveLength(missions.length);
    expect(missionComponent.at(2).prop("id")).toEqual("efg");
    expect(missionComponent.at(3).prop("source")).toEqual("Dharan");
    expect(missionComponent.at(0).prop("destination")).toEqual("Biratnagar");



})
})
