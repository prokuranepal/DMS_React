import React from 'react';
import WeatherDetail from './WeatherDetail';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


const setup = (props = {}) => {
    return shallow( < WeatherDetail
     {...props}  />
    )
}


{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
it("Snapshot WeatherDetail", () => {
    let wrapper = setup();
    expect(wrapper).toMatchSnapshot();
   
})

