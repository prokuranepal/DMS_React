import React from 'react';
import AppRow from './index';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const dummy_style={width:20}
const dummy_children =<div data-test="dummy_children">hello</div>

const setup = (props = {}) => {
    return shallow( < AppRow {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}



{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
it("Unordered list in AppRow", () => {
        let wrapper = setup({styleName:dummy_style, children:dummy_children});
        const prop_children = findByTestAttr(wrapper,'dummy_children')
        expect(prop_children).toHaveLength(1);
        const children = wrapper.find('div')
        expect(children).toHaveLength(3)

})