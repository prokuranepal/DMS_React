import React from 'react';
import UserCell from './UserCell';

import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


const dummy_data={user:{id:1, title:"title", image:"https://x.com/23/350/420", desc:"abc"}}
const setup = (props = {}) => {
    return shallow( < UserCell
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

 it("snapshot test UserCell", () => {
        let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();
}) 
it("UserCell props",()=>{

    let wrapper = setup(dummy_data);
    const avatar=findByTestAttr(wrapper, `avatar-component`);
    const p = wrapper.find('p')
    const span =wrapper.find('span')
    expect(avatar).toHaveLength(1);
    expect(p).toHaveLength(1);
    expect(span).toHaveLength(1);
    expect(avatar.props().src).toEqual("https://x.com/23/350/420");
    expect(span.props().children).toEqual("title");
    expect(p.props().children).toEqual("abc");






})

