import React from 'react';
import CardBox from './index';
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
    return shallow( < CardBox {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


it("CardBox",()=>{
    const wrapper= setup({children:(<div></div>)});
    expect(wrapper).toMatchSnapshot();
})

it("CardBox",()=>{
    const wrapper= setup({children:[<div data-test="child0"></div>,<div data-test="child1"></div>]});
    let child0= findByTestAttr(wrapper, 'child0')
    let child1= findByTestAttr(wrapper, 'child1')
    expect(child0).toHaveLength(0)
    expect(child1).toHaveLength(1)

})
it("CardBox with no props",()=>{
    const wrapper= setup({children:''});
    let div_children = wrapper.find('div')
    expect(div_children).toHaveLength(3)
    // expect(wrapper).toMatchSnapshot();
})

it("CardBox with headerOutside defined",()=>{
    const wrapper= setup({children:[<div data-test="child0"></div>,<div data-test="child1"></div>],headerOutside:"Header", heading:"Heading"});
    let div_children = wrapper.find('div')
    expect(div_children).toHaveLength(7)
    let header = wrapper.find('h3')
    expect(header).toHaveLength(1)
    expect(header.text()).toEqual("Heading")
    let child0= findByTestAttr(wrapper, 'child0')
    expect(child0).toHaveLength(1)
    let child1= findByTestAttr(wrapper, 'child1')
    expect(child1).toHaveLength(1)
    // expect(wrapper).toMatchSnapshot();
})


it("CardBox with headerOutside not defined",()=>{
    const wrapper1 =setup({children:'', heading:"SecondHeading"});
    let div_children = wrapper1.find('div')
    expect(div_children).toHaveLength(4)
    
    const wrapper= setup({children:[<div data-test="child0"></div>,<div data-test="child1"></div>], heading:"SecondHeading"});
    let header = wrapper.find('h3')
    expect(header).toHaveLength(1)
    expect(header.text()).toEqual("SecondHeading")
    let child0= findByTestAttr(wrapper, 'child0')
    expect(child0).toHaveLength(1)
    let child1= findByTestAttr(wrapper, 'child1')
    expect(child1).toHaveLength(1)
    // expect(wrapper).toMatchSnapshot();
})