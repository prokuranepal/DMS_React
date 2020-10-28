import React from 'react';
import NavMenuItem from './NavMenuItem';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const dummy_data= {
name:"name1",
icon:"icon1",
link:"link1"
}
const setup = (props = {}) => {
    return shallow( < NavMenuItem
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
it("Snapshot NavMenuItem", () => {
    let wrapper = setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
})



it("Components NavMenuItem", () => {
    let wrapper = setup(dummy_data);
    let linkComp = findByTestAttr(wrapper, "linkComp");
    expect(linkComp.props().to).toEqual("link1");
    let nameComp = findByTestAttr(wrapper, "nameComp");
    expect(nameComp.props().id).toEqual("name1");
   
})