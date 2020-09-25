import React from 'react';
import WriteBox from './index';
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
    return (shallow( < WriteBox {...props}  />)
    )
}
const dummy_data={
    addPost: jest.fn(),
    user:{
        image:"image.png"
    }
}
describe('<WriteBox />', () => {
  

it("WriteBox render", () => { 
        const wrapper= setup({...dummy_data});
        expect(wrapper).toMatchSnapshot();
  
})
})

