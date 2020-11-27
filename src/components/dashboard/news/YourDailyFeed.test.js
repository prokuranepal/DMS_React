import React from 'react';
import YourDailyFeed from './YourDailyFeed';
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
    return shallow( < YourDailyFeed {...props}  />
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
describe("YourDailyFeed Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup(dummy_props);
    expect(wrapper).toMatchSnapshot()

})
it("Props YourDailyFeed", () => {
    const wrapper= setup(dummy_props);   
    const project= findByTestAttr(wrapper, "feedCellComp") 
    expect(project).toHaveLength(5);
    // expect(project.props().data).toEqual(dummy_data)

})

})