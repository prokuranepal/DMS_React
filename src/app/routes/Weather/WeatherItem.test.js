import React from 'react';
import WeatherItem from './WeatherItem';
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
const dummy_data={
    temp:25,
    iconId:"icon1",
    place:"place1",
    day:"Sunday",
    time:"4:15",
    humidity:50,
    wind:2
}

describe('<WeatherItem />', () => {
  let wrapper;

  let store;

  beforeEach(() => {
    
  })

  afterEach(() => {
    jest.clearAllMocks();
  });
 


it("WeatherItem snapshot", () => {
        // let wrapper = setup(dummy_data);
    wrapper = shallow( < WeatherItem {...dummy_data} />)

        expect(wrapper).toMatchSnapshot();

  
})

})