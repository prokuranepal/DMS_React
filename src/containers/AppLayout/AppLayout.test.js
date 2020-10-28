import React from 'react';
import AppLayout from './index';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const setup = (props = {}, state = null) => {
    return (shallow( < AppLayout {...props}  />)
    )
}


describe('<AppLayout />', () => {
    

it("AppLayout render", () => { 
        const wrapper= setup();
        expect(wrapper).toMatchSnapshot();
})
})
