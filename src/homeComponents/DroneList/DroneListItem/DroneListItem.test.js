import React from 'react';
import DroneListItem from './DroneListItem';
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


const setup = (props = {}, state = null) => {
    return (shallow( < DroneListItem {...props}  />)
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


const dummy_data={
drone:
    {name:"8",
    droneId:"605",
    type:3,
    _id:"value"}
}

describe('DroneListItem />', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = setup(dummy_data)
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


it("DroneListItem render", () => {
        // let wrapper = setup(dummy_data);
    const appValueComponent= findByTestAttr(wrapper,"container-component")
    expect(appValueComponent).toHaveLength(1)
  
})

it("DroneListItem Components", () => {
    const innerRadioComponent= findByTestAttr(wrapper,"innerradio-component")
    const droneTypeComponent= findByTestAttr(wrapper,"dronetype-component")
    const droneCodeComponent= findByTestAttr(wrapper,"dronecode-component")
    const droneNameComponent= findByTestAttr(wrapper,"dronename-component")
    expect(innerRadioComponent.prop('value')).toEqual("value")
    expect(droneTypeComponent.text()).toEqual('Type: Fixed Wing') 
    expect(droneNameComponent.text()).toEqual('8') 
    expect(droneCodeComponent.text()).toEqual('Code: 605') 

})
})
