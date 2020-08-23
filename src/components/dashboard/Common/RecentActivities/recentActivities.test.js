import React from 'react';
import RecentActivities from './index';

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
    return shallow( < RecentActivities
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


const dummy_data={
    image: "https://via.placeholder.com/150x150",
    title: "Alex Brown has shared Martin Guptil's post",
    desc: "acdef",
    date:"18 Aug,2020",
    color:"red"
   
  }



{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
it("RecentActivities renders correctly", () => {
    const wrapper= setup({recentData:dummy_data});   
    const container= findByTestAttr(wrapper, "activity-component") 
    expect(container).toHaveLength(1);


})