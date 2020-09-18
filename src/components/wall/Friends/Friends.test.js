import React from 'react';
import Friends from './index';
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
    return (shallow( < Friends {...props}  />)
    )
}

const dummy_data={
    friendList:[{image:'image1.png', name:'name1', status:'online'},{image:'image1.png', name:'name1', status:'away'}]
}
describe('<Friends />', () => {
  

it("Friends render", () => { 
        const wrapper= setup({...dummy_data});
        expect(wrapper).toMatchSnapshot();
  
})
})

