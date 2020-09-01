import React from 'react';
import ProjectsList from './ProjectsList';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const dummy_data={data:[{id:1,data:[2,3,4]},
{id:2,data:[2,3,4]},
{id:3,data:[11,33,54]}
,{id:4,data:[71,83,3]},
{id:5,data:[12,3,4]},
{id:6,data:[52,39,4]},
{id:7,data:[72,3,40]}]}

const setup = (props = {}) => {
    return shallow( < ProjectsList
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}





it("snapshot projectcell", () => {
        let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();
}) 
it("Props ProjectsList", () => {
    const wrapper= setup(dummy_data);   
    const project= findByTestAttr(wrapper, "project-component") 
    expect(project).toHaveLength(7);
    // expect(project.props().data).toEqual(dummy_data)

    

})