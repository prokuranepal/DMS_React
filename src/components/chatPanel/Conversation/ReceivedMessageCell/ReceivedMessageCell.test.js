import React from 'react';
import ReceivedMessageCell from './index';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const dummy_data = {
    conversation:{
        message:"hello, how are you doing?",
        sentAt:"Wed 4:30"},
         user:{
             thumb:"thumbnail1"
         }
}
const setup = (props = {}) => {
    return shallow( < ReceivedMessageCell
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
it("Snapshot ReceivedMessageCell", () => {
    let wrapper = setup(dummy_data);
    expect(wrapper).toMatchSnapshot();

})



it("Components ReceivedMessageCell", () => {
    let wrapper = setup(dummy_data);
    let messageComp = findByTestAttr(wrapper, "messageComp");
    let sentAtComp = findByTestAttr(wrapper, "sentAtComp");
    let imageComp = findByTestAttr(wrapper, "imageComp");
   
    expect(sentAtComp.text()).toEqual("Wed 4:30");
    expect(messageComp.text()).toEqual("hello, how are you doing?");
    expect(imageComp.prop('src')).toEqual("thumbnail1")
})