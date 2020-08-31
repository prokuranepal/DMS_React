import React from 'react';
import UserDetailCell from './UserDetailCell';

import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


const dummy_data={data:
    {   id:1, 
        name:"john",
        detail:"health assistant",
        about:"lives in new jersey", 
        image:"https://x.com/23/350/420", 
        color:"orange"}}
const setup = (props = {}) => {
    return shallow( < UserDetailCell
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

 it("snapshot test UserDetailCell", () => {
        let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();
}) 
it("UserDetailCell props",()=>{

    let wrapper = setup(dummy_data);
    const avatar=findByTestAttr(wrapper, `avatar-component`);
    const h5= wrapper.find('h5')
    const p = wrapper.find('p')
    const span =wrapper.find('span')
    expect(avatar).toHaveLength(1);
    expect(p).toHaveLength(1);
    expect(span).toHaveLength(1);
    expect(h5).toHaveLength(1);
    expect(avatar.props().src).toEqual("https://x.com/23/350/420");
    expect(span.props().children).toEqual("health assistant");
    expect(p.props().children).toEqual("lives in new jersey");
    expect(h5.props().children).toEqual("john");







})

