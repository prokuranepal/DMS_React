import React from 'react';
import CardMenu , {options} from './CardMenu';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

const setup = (props = {}) => {
    return shallow( < CardMenu {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

const findByTestKey=(wrapper, val)=>{
    return wrapper.find(`[data-tests='${val}']`)
}

it("CardMenu",()=>{
    const wrapper= setup({anchorEl:'', menuState:'', handleRequestClose:()=>{}});
    expect(wrapper).toMatchSnapshot();
})

it("CardMenu props",()=>{
    const wrapper= setup({anchorEl:'', menuState:'', handleRequestClose:function_click});

    let child0= findByTestAttr(wrapper,'Menu-component')
    let child1= findByTestAttr(wrapper,'MenuItem-component')
    expect(child0).toHaveLength(1)
    expect(child1).toHaveLength(options.length)
    let childOption1= findByTestKey(wrapper,options[0])
    childOption1.simulate('click');
    wrapper.update();
    expect(function_click).toHaveBeenCalledTimes(1)
    expect(function_click).toHaveBeenCalledWith(options[0])
    let childOption2= findByTestKey(wrapper,options[1])
    childOption2.simulate('click');
    wrapper.update();
    expect(function_click).toHaveBeenCalledTimes(2)
    expect(function_click).toHaveBeenCalledWith(options[1])


})
