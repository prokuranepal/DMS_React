import React from 'react';
import OrderLists,{data} from './OrderLists';
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
    return (shallow( < OrderLists {...props}  />)
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}



describe('OrderLists />', () => {
  
  afterEach(() => {
    jest.clearAllMocks();
  });


it("OrderLists snapshot", () => {
    const wrapper = setup()

        // let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();

  
})

it("Link Component", () => {
    const wrapper = setup()

   const olcomponent = findByTestAttr(wrapper, "orderlist-component")
   expect(olcomponent).toHaveLength(data.length)
   expect(olcomponent.at(2).prop('data')).toEqual(
       {
           id:3,
           orderId:'24567', 
           name:'Panmara Health Post', 
           image:"https://via.placeholder.com/150x150", 
           orderDate:'5 Nov, 19:00', 
           deliveryDate: '5 Nov, 19:50', 
           from:'Panmara',
           status:'Completed'
       }
   )
})
})