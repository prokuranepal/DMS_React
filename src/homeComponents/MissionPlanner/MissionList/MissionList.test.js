import React from 'react';
import MissionList from './MissionList';
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
    return (shallow( < MissionList {...props}  />).dive()
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


const dummy_data={id:"1",source:'Dharan',destination:"biratnagar"}
describe('MissionList />', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = setup(dummy_data)
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


it("MissionList snapshot", () => {
        // let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();

  
})

it("MissionList Components", () => {

   const idComponent = findByTestAttr(wrapper, "id-component")
   const sourceComponent = findByTestAttr(wrapper, "source-component")
   const destinationComponent = findByTestAttr(wrapper, "destination-component")

    expect(idComponent.text()).toEqual("Mission ID: 1");
    expect(sourceComponent.text()).toEqual("Source: Dharan");
    expect(destinationComponent.text()).toEqual("Destination: biratnagar");

  


})
})
