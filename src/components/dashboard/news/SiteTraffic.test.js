import React from 'react';
import CommentsTable from './CommentsTable';
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
    return shallow( < CommentsTable {...props}  />
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
describe("CommentsTable Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup(dummy_props);
    expect(wrapper).toMatchSnapshot()

})
it("Props CommentsTable", () => {
    const wrapper= setup(dummy_props);   
    const project= findByTestAttr(wrapper, "commentsCell") 
    expect(project).toHaveLength(3);
    // expect(project.props().data).toEqual(dummy_data)

    

})

})