import React from 'react';
import SiteTrafficChart from './SiteTrafficChart';
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
    return shallow( < SiteTrafficChart {...props}  />
    )
}

it("Renders without error",()=>{
    const wrapper= setup({height:350});
    expect(wrapper).toMatchSnapshot();


})