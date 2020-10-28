import React from 'react';
import ListUsers from './ListUsers';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const changedFunction=jest.fn();
const dummy_data = {
  users1:"user1",
  users2:"user2"
}




const setup = (props = {}) => {
    return shallow( < ListUsers
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
it("Snapshot ListUsers", () => {
    let wrapper = setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
   
})



it("Components ListUsers", () => {
    let wrapper = setup(dummy_data);
    let user1Comp = findByTestAttr(wrapper, "user1Comp");
    expect(user1Comp.prop("users")).toEqual("user1")
    let user2Comp = findByTestAttr(wrapper, "user2Comp");;
    expect(user2Comp.prop("users")).toEqual("user2")
})