import React from 'react';
import AppNotification from './index';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {notifications} from './data'
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


/*
    name_length =[component name("<CustomButton>")"), 
        number of times the compnent is expected to render 
        component to corresponding index in elements( here 1 for View),2 for Text, 1 for Button]
    description= ["renders correctly", "renders the length of component ", ]-->description for each test here 2
    elements = [ component being tested (<CustomButton>), type of component expected(View),Text, Button]
*/

const setup = (props = {}, state = null) => {
    return shallow( < AppNotification {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

 {/* test_function(["ActivityBoxComponent", 0], ["renders correctly", "renders the length of component"], [ < ActivityBoxComponent propValue="New Visit" / > , < div / > ]) */}
{/* it("number of div children", () => {
    let wrapper = setup();
    const children = wrapper.find('div')
    expect(children).toHaveLength(3);
  
}) */}

it("Custom Scrollable render", () => {
        let wrapper = setup();

    const appValueComponent= findByTestAttr(wrapper,"scroll-component")
    expect(appValueComponent).toHaveLength(1)

  
})

it("Unordered list in AppNotification", () => {
        let wrapper = setup();
    const notification_length= notifications.length;
    const appValueComponent= findByTestAttr(wrapper,"unordered-list-component")
    const appValueComponent2= findByTestAttr(wrapper,"notification-item-component")

    expect(appValueComponent).toHaveLength(1)
    expect(appValueComponent2).toHaveLength(notification_length)


  
})