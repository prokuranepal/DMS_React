import React from 'react';
import SentMessageCell from './index';
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
        sentAt:"Wed 4:30",
        name:"name1"
    },
         user:{
             thumb:"thumbnail1"
         },
}
const setup = (props = {}) => {
    return shallow( < SentMessageCell
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
it("Snapshot SentMessageCell", () => {
    let wrapper = setup(dummy_data);
    expect(wrapper).toMatchSnapshot();

})



it("Components SentMessageCell", () => {
    let wrapper = setup(dummy_data);
    let messageComp = findByTestAttr(wrapper, "messageComp");
    let sentAtComp = findByTestAttr(wrapper, "sentAtComp");
    let nameComp = findByTestAttr(wrapper, "nameComp");
   
    expect(sentAtComp.text()).toEqual("Wed 4:30");
    expect(messageComp.text()).toEqual("hello, how are you doing? ");
    expect(nameComp.prop('alt')).toEqual("name1")

})