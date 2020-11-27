import React from 'react';
import SiteTraffic from './SiteTraffic';
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
    return shallow( < SiteTraffic {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}



describe("SiteTraffic Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup();
    expect(wrapper).toMatchSnapshot()

})

})