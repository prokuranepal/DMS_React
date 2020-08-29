import React from 'react';
import ApplicationTable, {data} from './ApplicationTable';
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
    return shallow( < ApplicationTable
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}





it("snapshot projectcell", () => {
        let wrapper = setup();
        expect(wrapper).toMatchSnapshot();
}) 
it("Props ApplicationTable", () => {
    const wrapper= setup();   
    const project= findByTestAttr(wrapper, "cell-component") 
    expect(project).toHaveLength(data.length);
    // expect(project.props().data).toEqual(dummy_data)

    

})