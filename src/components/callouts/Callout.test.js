import React from 'react';
import Callout from './Callout';
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
    description: "acdef"
  }
  const dummy_style={width:20}

const setup = (props = {}) => {
    return shallow( < Callout {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


it("Callout",()=>{
    const wrapper= setup({callout:dummy_data, styleName: dummy_style});
    expect(wrapper).toMatchSnapshot();
})
{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
it("Unordered list in Callout", () => {
    const wrapper= setup({callout:dummy_data, styleName: dummy_style});   
    const image_child= wrapper.find('img');
       expect(image_child).toHaveLength(1);
       expect(image_child.prop("src")).toEqual(dummy_data.image);

        const div_children = wrapper.find('div')
        expect(div_children).toHaveLength(5)
        const h2_child =wrapper.find('h2')
        expect(h2_child).toHaveLength(1)
        expect(h2_child.text()).toEqual(dummy_data.title)
        const p_child =wrapper.find('p')
        expect(p_child).toHaveLength(1)
        expect(p_child.text()).toEqual(dummy_data.description)

})