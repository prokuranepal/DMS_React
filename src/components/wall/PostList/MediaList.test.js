
import React from 'react';
import MediaList from './MediaList';
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
    return (shallow( < MediaList {...props}  />)
    )
}

describe('<MediaList />', () => {
    const dummy_data={
        mediaList:[{image:2},{image:3},{image:4}],
    }


it("MediaList render", () => { 
        const wrapper= setup({...dummy_data});
        expect(wrapper).toMatchSnapshot();
  
})
})

