import React from 'react';
import NotificationItem from './NotificationItem';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
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
const dummy_data={
    image: "https://via.placeholder.com/150x150",
    title: "Alex Brown has shared Martin Guptil's post",
    time: "5:18 PM",
    icon: "zmdi-comment-text text-grey",
  }

const setup = (props = {}) => {
    return shallow( < NotificationItem {...props}  />)
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}



{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
it("Unordered list in NotificationItem", () => {
        let wrapper = setup({notification:dummy_data});

    const appValueComponent3= findByTestAttr(wrapper,"icon-button-component")
    const appValueComponent4= findByTestAttr(wrapper,"time-component")
    expect(appValueComponent3).toHaveLength(1)
    expect(appValueComponent4).toHaveLength(1)
    expect(appValueComponent4.text()).toEqual(dummy_data.time);

})
it("Unordered list in NotificationItem", () => {
        let wrapper = setup({notification:dummy_data});
    
    const appValueComponent2= findByTestAttr(wrapper,"title-component")
    expect(appValueComponent2).toHaveLength(1)
    expect(appValueComponent2.text()).toEqual(dummy_data.title);
   
})
it("Unordered list in NotificationItem", () => {
        let wrapper = setup({notification:dummy_data});
    const appValueComponent= findByTestAttr(wrapper,"avatar-component")
    expect(appValueComponent).toHaveLength(1)
    expect(appValueComponent.prop("src")).toEqual(dummy_data.image);


})