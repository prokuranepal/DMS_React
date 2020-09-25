import React from 'react';
import UserProfileCard from './UserProfileCard';

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
    return shallow( < UserProfileCard
     {...props}  />
    )
}

 it("UserProfileCard snapshot", () => {
        let wrapper = setup();
        expect(wrapper).toMatchSnapshot();
}) 
