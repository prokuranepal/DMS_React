import React from 'react';
import AppLayouts from './index';
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
    return (shallow( < AppLayouts
     {...props}  />)
    )
}


describe('<AppLayouts />', () => {
    

it("AppLayouts render", () => { 
        const wrapper= setup();
        expect(wrapper).toMatchSnapshot();
})
})
