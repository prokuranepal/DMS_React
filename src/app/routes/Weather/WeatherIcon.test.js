import React from 'react';
import WeatherIcon from './WeatherIcon';
import {
    configure,
    shallow,
    mount
} from 'enzyme';

import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


describe('<WeatherIcon />', () => {
  let wrapper;

  let store;

  beforeEach(() => {
    
  })

  afterEach(() => {
    jest.clearAllMocks();
  });
 


it("WeatherIcon snapshot", () => {
        // let wrapper = setup(dummy_data);
    wrapper = shallow( < WeatherIcon  />)

        expect(wrapper).toMatchSnapshot();

  
})

})