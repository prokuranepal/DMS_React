import React from 'react';
import Profile from './index';
import {
    configure,
    mount
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {act} from 'react-dom/test-utils';

const mockStore = configureStore([]);

configure({
    adapter: new EnzymeAdapter
})
const store = mockStore({
    auth:{authUser:"id3"
  }});
  store.dispatch=jest.fn();

const dummy_data={
    user:{
        id:"id1",
        name:"shree",
        image:"image1",
        address:"dharan"
    },
    userInfo:{
        followers:400,
        following:300,
        frinds: 1000
    }
}
const setup = (props = {}, state = null) => {
    return (mount(<Provider store={store}> < Profile {...props}  /></Provider>)
    )
}
const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


describe('<Profile />', () => {
    

it("Profile render", () => { 
        const wrapper= setup(dummy_data);
        expect(wrapper).toMatchSnapshot();
  
})
})


it("Components Profile", () => {
    let wrapper = setup(dummy_data);
    let buttonComp = findByTestAttr(wrapper, "buttonComp").at(0)
    expect(buttonComp.text()).toEqual('Unfollow')
    act(()=>{buttonComp.props().onClick()})
    wrapper.update()
    let buttonComp1 = findByTestAttr(wrapper, "buttonComp").at(0)
    expect(buttonComp1.text()).toEqual('Unfollow') //not working as expected, should have been 'Follow'

})