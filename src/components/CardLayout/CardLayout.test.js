import React from 'react';
import CardLayout from './index';
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
    return shallow( < CardLayout {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


it("CardLayout",()=>{
    const wrapper= setup({children:(<div></div>)});
    expect(wrapper).toMatchSnapshot();
})

it("CardLayout props",()=>{
    const wrapper= setup({children:[<div data-test="child0" key ="child0"></div>,<div key="child1" data-test="child1"></div>]});

    let child0= findByTestAttr(wrapper, 'child0')
    let child1= findByTestAttr(wrapper, 'child1')
    let div_children = wrapper.find('div')
    expect(div_children).toHaveLength(3)
    expect(child0).toHaveLength(1)
    expect(child1).toHaveLength(1)

})