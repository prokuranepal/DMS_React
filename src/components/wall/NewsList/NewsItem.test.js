import React from 'react';
import NewsItem from './NewsItem';
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
    return (shallow( < NewsItem {...props}  />)
    )
}
const dummy_data={
   data:{
       image:"image.png",
       descriptio:"abcdef"
   }
}
describe('<NewsItem />', () => {
  

it("NewsItem render", () => { 
        const wrapper= setup({...dummy_data});
        expect(wrapper).toMatchSnapshot();
  
})
})

