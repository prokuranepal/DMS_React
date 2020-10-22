import React from 'react';
import Chart from './Chart';
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
    return shallow( < Chart {...props}  />
    )
}


 it("Custom Scrollable render", () => {
        let wrapper = setup();
        expect(wrapper).toMatchSnapshot();
}) 