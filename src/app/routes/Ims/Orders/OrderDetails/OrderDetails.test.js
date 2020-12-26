import React from 'react';
import OrderDetails from './OrderDetails';
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
    return (shallow( < OrderDetails {...props}  />)
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


const dummy_data=
    {name:"8",
    type:{
        image:"image",
        name:"name"
    }}


describe('OrderDetails />', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = setup(dummy_data)
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


it("OrderDetails snapshot", () => {
        // let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();

  
})

})
