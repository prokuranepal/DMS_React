import React from 'react';
import AssignmentTableCell from './AssignmentTableCell';
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
    return shallow( < AssignmentTableCell {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


const dummy_props={
  data:{id:"id1",
  image:"image1",
  name:"name1",
  order: "order1",
  userId:"user1",
  description:"This is a description",
  task:'task1',
  status:{includes:jest.fn()}
  }
}
describe("AssignmentTableCell Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup(dummy_props);
    expect(wrapper).toMatchSnapshot()

})

})