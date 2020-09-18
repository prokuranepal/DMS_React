import React from 'react';
import NewsList from './index';
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
    newsList: [{id:3},{id:1},{id:2}]
}
const setup = (props = {}, state = null) => {
    return (shallow( < NewsList {...props}  />)
    )
}

describe('<NewsList />', () => {
  

it("NewsList render", () => { 
        const wrapper= setup({...dummy_data});
        expect(wrapper).toMatchSnapshot();
  
})
})

