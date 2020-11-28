import React from 'react';
import YourDailyFeedCell from './YourDailyFeedCell';
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
    return shallow( < YourDailyFeedCell {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


const dummy_props={
    feed:{
        id:"name1", 
        title:"title1", 
        time:"4:30 pm",
        image:"image1",
        isSocial:true
    }
}
describe("YourDailyFeedCell Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup(dummy_props);
    expect(wrapper).toMatchSnapshot()

})


})