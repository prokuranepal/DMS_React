import React from 'react';
import GalleryCard from './index';
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
    return shallow( < GalleryCard {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


it("Cafe",()=>{
    const wrapper= setup();
    expect(wrapper).toMatchSnapshot();
})
