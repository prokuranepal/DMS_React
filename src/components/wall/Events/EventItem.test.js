import React from 'react';
import EventItem from './EventItem';
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
    return (shallow( < EventItem {...props}  />)
    )
}

const dummy_data={
  data:{  image:"image.png",
    title:"hello",
    date:"20 Nov, 2020",
    address:"kupondole"
}
}
describe('<TestComponent />', () => {
it("EventItem render", () => { 
        const wrapper= setup({...dummy_data});
        expect(wrapper).toMatchSnapshot();
  
})
})

