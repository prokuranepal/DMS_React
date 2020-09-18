import React from 'react';
import Events from './index';
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
    return (shallow( < Events {...props}  />)
    )
}

describe('<Events />', () => {

const dummy_data= {
    eventList:[{id:3},{id:1},{id:2},{id:4}]
}

it("Events render", () => { 
        const wrapper= setup({...dummy_data});
        expect(wrapper).toMatchSnapshot();
  
})
})

