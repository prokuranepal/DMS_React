import React from 'react';
import SiteVisitor from './SiteVisitor';
import {
    configure,
    shallow,
    mount
} from 'enzyme';

import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


describe('<SiteVisitor />', () => {
  let wrapper;

  let store;

  beforeEach(() => {
    
  })

  afterEach(() => {
    jest.clearAllMocks();
  });
 


it("SiteVisitor snapshot", () => {
        // let wrapper = setup(dummy_data);
    wrapper = shallow( < SiteVisitor  />)

        expect(wrapper).toMatchSnapshot();

  
})

})