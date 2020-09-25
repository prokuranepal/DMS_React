import React from 'react';
import OrderLists,{data} from './OrderLists';
import {
    configure,
    mount
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const mockStore = configureStore([]);
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


const setup = (store) => {
    return (mount(<Provider store={store} > < OrderLists  /></Provider>)
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}



describe('OrderLists />', () => {
    let store;
    beforeEach(()=>{
    store = mockStore({
        dashboard:[{"_id":1,"name":"dashboard1"},{"_id":2,"name":"dashboard2"}],
        imsOrder:{
            orderList:[{
            orderDate:"2020, 11, 2",
            deliveryDate: "2020, 11, 4"
            },{
                orderDate:"2018, 11, 24",
            deliveryDate: "2018, 11, 26"
            }]
        }
        }
        );
        store.dispatch=jest.fn();
        });
  afterEach(() => {
    jest.clearAllMocks();
  });


it("OrderLists snapshot", () => {
    const wrapper = setup(store)

        // let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();

  
})

it("Link Component", () => {
    const wrapper = setup(store)

   const olcomponent = findByTestAttr(wrapper, "orderlist-component")
   expect(olcomponent).toHaveLength(3)
//    expect(olcomponent.at(2).prop('data')).toEqual(
//        {
//            id:3,
//            orderId:'24567', 
//            name:'Panmara Health Post', 
//            image:"https://via.placeholder.com/150x150", 
//            orderDate:'5 Nov, 19:00', 
//            deliveryDate: '5 Nov, 19:50', 
//            from:'Panmara',
//            status:'Completed'
//        }
//    )
expect(olcomponent.at(2).prop('data')).toEqual(
    [{"deliveryDate": "2020-10-3\n0:0:0", "orderDate": "2020-10-1\n0:0:0", "tableData": {"id": 0}}, 
    {"deliveryDate": "2018-10-1\n0:0:0", "orderDate": "2018-10-6\n0:0:0", "tableData": {"id": 1}}]
)
})
})