import React from 'react';
import PostBoxes from './PostBoxes';
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
    return shallow( < PostBoxes {...props}  ></PostBoxes>
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


const dummy_props={
post:{
    image:"image1",
    title:"title1",
    description:"description1"
}
}
describe("ChartContainer Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup(dummy_props);
    expect(wrapper).toMatchSnapshot()

})

})