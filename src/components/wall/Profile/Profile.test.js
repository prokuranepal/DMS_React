import React from 'react';
import Profile from './index';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

configure({
    adapter: new EnzymeAdapter
})
const store = mockStore({
    auth:{authUser:"id3"
  }});
  store.dispatch=jest.fn();

const setup = (props = {}, state = null) => {
    return (shallow(<Provider store={store}> < Profile {...props}  /></Provider>)
    )
}

describe('<Profile />', () => {
    

it("Profile render", () => { 
        const wrapper= setup();
        expect(wrapper).toMatchSnapshot();
  
})
})

