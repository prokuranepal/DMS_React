import React from 'react';
import MailNotification from './index';
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
    return shallow( < MailNotification
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
it("Snapshot MailNotification", () => {
    let wrapper = setup();
    expect(wrapper).toMatchSnapshot();
    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected
    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")
    
})



it("Components MailNotification", () => {
    let wrapper = setup();
    let customScrollComp = findByTestAttr(wrapper, "customScrollComp");
    expect(customScrollComp).toHaveLength(1);
    let notificationItemComp = findByTestAttr(wrapper, "notificationItemComp");
    expect(notificationItemComp).toHaveLength(5);
})