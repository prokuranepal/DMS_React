import React from 'react';
import ServicePanel from './ServicePanel';
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
    return shallow( < ServicePanel
     {...props}  />
    )
}

it("snapshot ServicePanel", () => {
        let wrapper = setup();
        expect(wrapper).toMatchSnapshot();
}) 
