import React from 'react';
import Conversation from './index';
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
    conversationData:[{
        id:1, data:"hello1", type:"sent"
    },
    {
        id:2, data:"hello2", type:"received"
    },
    {
        id:3, data:"hello3",type:"sent"
    }],
    selectedUser:"user1"
}
const setup = (props = {}) => {
    return shallow( < Conversation
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
it("Snapshot Conversation", () => {
    let wrapper = setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected
    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")
    
})



it("Components Conversation", () => {
    let wrapper = setup(dummy_data);
    let sentMessageComp = findByTestAttr(wrapper, "sentMessageComp");
    let receivedMailComp = findByTestAttr(wrapper, "receivedMailComp");
    expect(receivedMailComp).toHaveLength(1);
    expect(sentMessageComp).toHaveLength(2);
    expect(sentMessageComp.at(0).prop('conversation')).toEqual({
        id:1, data:"hello1",type:"sent"
    });

    expect(sentMessageComp.at(1).prop('conversation')).toEqual(
    {
        id:3, data:"hello3",type:"sent"
    });

    expect(receivedMailComp.at(0).prop('conversation')).toEqual(
    {
        id:2, data:"hello2",type:"received"
    });


    expect(receivedMailComp.at(0).prop('user')).toEqual("user1")


})