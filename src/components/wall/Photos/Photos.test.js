import React from 'react';
import Photos from './index';
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
    photoList:[{image:"a,bs"},{image:"sdfd"}],
    title:"photoTitle"
}

const setup = (props = {}, state = null) => {
    return (shallow( < Photos {...props}  />)
    )
}

describe('<Photos />', () => {
  

it("Photos render", () => { 
        const wrapper= setup({...dummy_data});
        expect(wrapper).toMatchSnapshot();
  
})
})

