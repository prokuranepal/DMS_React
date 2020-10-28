import React from 'react';
import Navigation from './index';
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
  menuItems:[{id:1, item:"item1", type:"section"},
  {id:2, item:"item2", type:"collapse"},
  {id:3, item:"item3",type:"item"}]
}
const setup = (props = {}) => {
    return shallow( < Navigation
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
it("Snapshot Navigation", () => {
    let wrapper = setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
})



it("Components Navigation", () => {
    let wrapper = setup(dummy_data);
    let sectionComp = findByTestAttr(wrapper, "sectionComp");
    expect(sectionComp).toHaveLength(1);
    let collapseComp = findByTestAttr(wrapper, "collapseComp");
    expect(collapseComp).toHaveLength(1);
        let itemComp = findByTestAttr(wrapper, "itemComp");
    expect(itemComp).toHaveLength(1);
   
})