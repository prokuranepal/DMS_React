import React from 'react';
import LatestPost from './index';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const dummy_data={
    image: "https://via.placeholder.com/150x150",
    title: "Alex Brown has shared Martin Guptil's post",
    desc: "acdef",
    time:"5:45",
   
  }

const setup = (props = {}) => {
    return shallow( < LatestPost
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
it("Props LatestPost", () => {
    const wrapper= setup({recentData:dummy_data});   
    const img1= findByTestAttr(wrapper, "image-component") //Avatar does not work as expected
    const span= wrapper.find('p')
    const h4= wrapper.find('h4')
    expect(h4).toHaveLength(1);
    expect(h4.text()).toEqual("Alex Brown has shared Martin Guptil's post")
    expect(span).toHaveLength(2);
    expect(img1.props().src).toEqual("https://via.placeholder.com/150x150")
    

})