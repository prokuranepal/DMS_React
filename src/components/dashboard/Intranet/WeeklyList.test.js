import React from 'react';
import WeeklyList from './WeeklyList';
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
    data:[{id:1, data:'data1'},{id:2, data:'data2'}]
}
const setup = (props = {}) => {
    return shallow( < WeeklyList {...props}  />
    )
}


it("WeeklyList",()=>{
    const wrapper= setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
})