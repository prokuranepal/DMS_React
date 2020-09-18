import React from 'react';
import GridImage from './GridImage';
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
    return (shallow( < GridImage {...props}  />)
    )
}
const dummy_data={
    mediaList:[{image:2},{image:3},{image:4}],
    handleToggle:jest.fn()
}
describe('<GridImage />', () => {
  

it("GridImage render", () => { 
        const wrapper= setup({...dummy_data});
        expect(wrapper).toMatchSnapshot();
  
})
})

