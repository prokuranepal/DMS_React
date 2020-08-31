import React from 'react';
import MarketingTable from './MarketingTable';

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
    return shallow( < MarketingTable
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}
export const dummy_data = { data:[{x:[0,3,3,234,56,7,8,54], y:[3,2,2,1,5,67,34,2,4], labels:["x","y"],id:1},
{x:[0,8,43,234,56,7,8,54], y:[3,82,2,1,5,67,34,28,4], labels:["x","y"],id:2},
{x:[0,32,3,234,9,7,8,54], y:[3,21,2,1,5,67,3,2,4], labels:["x","y"],id:3},
{x:[0,3,3,234,56,97,8,54], y:[3,23,32,1,85,7,34,2,4], labels:["x","y"],id:4}
]}

 it("snapshot test chartcard", () => {
        let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();
}) 
it("MarketingTable",()=>{

    let wrapper = setup(dummy_data);
    const menuItem=findByTestAttr(wrapper, `marketing-component`);
    expect(menuItem).toHaveLength(dummy_data.data.length);

})