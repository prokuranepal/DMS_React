import React from 'react';
import StatBoxes from './StatBoxes';
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
    return shallow( < StatBoxes {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


const dummy_props={
    data:{
        name:"name1", 
        desc:"Description", 
        image:"image1"
    }
}
describe("StatBoxes Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup();
    expect(wrapper).toMatchSnapshot()

})


})