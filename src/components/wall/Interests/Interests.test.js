import React from 'react';
import Interests from './index';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const dummy_data={
    interestList:[{id:"1", interest:"interest1"},
    {id:"2", image:"interest2"}]
}
const setup = (props = {}, state = null) => {
    return (shallow( < Interests {...props}  />)
    )
}

describe('<Interests />', () => {
  

it("Interests render", () => { 
        const wrapper= setup({...dummy_data});
        expect(wrapper).toMatchSnapshot();
  
})
})

