import React from 'react';
import ListCard from './index';
import {
    configure,
    mount,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {post} from './data';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})



const setup = (props = {}) => {
    return mount( < ListCard {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


it("Cafe",()=>{
    const wrapper= setup();
    expect(wrapper).toMatchSnapshot();
})

it("ListCard",()=>{
    const wrapper = setup();
    const p=findByTestAttr(wrapper,'p-component').at(1)
    const h4=wrapper.find('h4').at(1)
    const small=wrapper.find('small').at(1)   
    const postboxComponent= findByTestAttr(wrapper,"postbox-component")
    expect(postboxComponent).toHaveLength(4)
    const img=wrapper.find('img').at(1)
    expect(p.text()).toEqual(   "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ")
    expect(h4.text()).toEqual("It allowance prevailed")
    expect(small.text()).toEqual("20 Sept, 2016")
    expect(img.prop('src')).toEqual("https://via.placeholder.com/500x330")


})