import React from 'react';
import Cards from './index';
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
    return shallow( < Cards {...props}  />)
}


it("RecipeReview snapshot",()=>{
    const wrapper= setup();
    expect(wrapper).toMatchSnapshot();
})
