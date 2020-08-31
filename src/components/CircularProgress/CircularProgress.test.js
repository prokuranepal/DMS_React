import React from 'react';
import CircularProgress from './index';
import {
    configure,
    mount,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


const setup = (props = {}) => {
    return mount( < CircularProgress {...props}  />
    )
}


it("CircularProgress",()=>{
    const wrapper= setup();
    expect(wrapper).toMatchSnapshot();
})