import React from 'react';
import Communities from './index';
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
    return (shallow( < Communities {...props}  />)
    )
}
const dummy_data={
    communitiesList:[{title:"title1", image:"image1.png"},
    {title:"title1", image:"image1.png"}]
}
describe('<Communities />', () => {
  

it("Communities render", () => { 
        const wrapper= setup({...dummy_data});
        expect(wrapper).toMatchSnapshot();
  
})
})

