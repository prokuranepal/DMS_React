import React from 'react';
import FriendsTableCell from './FriendsTableCell';
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
    return shallow( < FriendsTableCell {...props}  ><div></div><div></div><div></div></FriendsTableCell>
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


const dummy_props={
data:{id:"id1",
name:"name1",
designation:"designation1",
image:"image1",
status:"status1"}
}
describe("FriendsTableCell Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup(dummy_props);
    expect(wrapper).toMatchSnapshot()

})

})