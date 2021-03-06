import React from 'react';
import OrdersChart from './OrdersChart';
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
    return shallow( < OrdersChart {...props}  ><div></div><div></div><div></div></OrdersChart>
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


const dummy_props={
labels:["label1","label2"] ,
label:"label1",
borderColor:"black",
chartdata:[{x:2,y:4},{x:5,y:1},{x:1,y:3},{x:6,y:6}],
pointBackgroundColor:"blue",
height:200,
pointBorderColor:"white",
shadowColor:"grey"
}
describe("OrdersChart Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup(dummy_props);
    expect(wrapper).toMatchSnapshot()

})

})