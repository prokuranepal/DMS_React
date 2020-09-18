import React from 'react';
import CommentBox from './CommentBox';
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
    return (shallow( < CommentBox {...props}  />)
    )
}

describe('<CommentBox />', () => {
  

it("CommentBox render", () => { 
        const wrapper= setup();
        expect(wrapper).toMatchSnapshot();
  
})
})

