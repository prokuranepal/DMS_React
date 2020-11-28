import React from 'react';
import AssignmentTable from './AssignmentTable';
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
    return shallow( < AssignmentTable {...props}  />
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
  userId:"user1"
  }
}
describe("AssignmentTable Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup(dummy_props);
    expect(wrapper).toMatchSnapshot()

})
it("Props",()=>{
    const wrapper= setup({...dummy_props});
    let assignmentCellComp= wrapper.find('[data-test="assignmentCellComp"]')
    expect(assignmentCellComp).toHaveLength(6)
})
})