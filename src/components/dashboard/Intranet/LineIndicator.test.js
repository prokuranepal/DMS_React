import React from 'react';
import LineIndicator from './LineIndicator';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const dummy_data={
    width:800, 
    color:"black"
}
const setup = (props = {}) => {
    return shallow( < LineIndicator {...props}  />
    )
}


it("LineIndicator",()=>{
    const wrapper= setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
})