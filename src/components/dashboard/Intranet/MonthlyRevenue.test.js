import React from 'react';
import MonthlyRevenue from './MonthlyRevenue';
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
    chartData:[{id:1, data:'data1'},{id:2, data:'data2'}]
}
const setup = (props = {}) => {
    return shallow( < MonthlyRevenue {...props}  />
    )
}


it("MonthlyRevenue",()=>{
    const wrapper= setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
})