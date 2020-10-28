import React from 'react';
import WeeklyCell from './WeeklyCell';
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
    data:{
        id:1,
        projectName:"project1",
        sales:400,
        income:100000,
         growth:2
    }
}
const setup = (props = {}) => {
    return shallow( < WeeklyCell {...props}  />
    )
}


it("WeeklyCell",()=>{
    const wrapper= setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
})