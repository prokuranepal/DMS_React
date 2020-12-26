
// import React from 'react';
// import Ims from './Ims';
// import {
//     configure,
//     shallow,
//     mount
// } from 'enzyme';
// import MedicineTypes from './MedicineTypes/MedicineTypes';
// import MedicineListContainer from './MedicineList/MedicineListContainer';
// import OrderLists from '../../../homeComponents/OrderLists/OrderLists';
// import OrderDetails from './Orders/OrderDetails/OrderDetails';
// import AddMedicine from './AddMedicine/AddMedicine';
// import { MemoryRouter } from 'react-router';

// import EnzymeAdapter from 'enzyme-adapter-react-16';
// // JestHook.mock('expo-font');
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// configure({
//     adapter: new EnzymeAdapter
// })
// const mockStore = configureStore([]);



// describe('<AddMedicine />', () => {
//   let wrapper;

//   let store;

//   beforeEach(() => {
//     store = mockStore({ 
//     users:["user1", "user2"]
//   });
//   store.dispatch=jest.fn();
//   })
// test('invalid path should redirect to 404', () => 
// {  const wrapper = mount( 
//         <Provider store={store}><MemoryRouter initialEntries={['/random']}>   
//         <Ims match={{url:'/dms.prokurainnovations.com'}}/> 
//       </MemoryRouter></Provider>  
//       );  
//       expect(wrapper.find(MedicineListContainer)).toHaveLength(0);
//       expect(wrapper.find(MedicineTypes)).toHaveLength(0);
//       expect(wrapper.find(OrderDetails)).toHaveLength(0);
//       expect(wrapper.find(AddMedicine)).toHaveLength(0);
//       expect(wrapper.find(OrderLists)).toHaveLength(0);


//     });

// test('individual path', () => 
// {  const wrapper = mount( <Provider store={store}>
//         <MemoryRouter initialEntries={['dms.prokurainnovations.com/categories']}>   
//         <Ims match={{url:"dms.prokurainnovations.com"}}/> 
//       </MemoryRouter>  </Provider>
//       );  
//       expect(wrapper.find(MedicineListContainer)).toHaveLength(0);
//       expect(wrapper.find(MedicineTypes)).toHaveLength(1);
//       expect(wrapper.find(OrderDetails)).toHaveLength(0);
//       expect(wrapper.find(AddMedicine)).toHaveLength(0);
//       expect(wrapper.find(OrderLists)).toHaveLength(0);
//     });

//     test('individual path', () => 
// {  const wrapper = mount( <Provider store={store}>
//         <MemoryRouter initialEntries={['dms.prokurainnovations.com/addMedicine']}>   
//         <Ims match={{url:"dms.prokurainnovations.com"}}/> 
//       </MemoryRouter>  </Provider>
//       );  
//       expect(wrapper.find(MedicineListContainer)).toHaveLength(0);
//       expect(wrapper.find(MedicineTypes)).toHaveLength(0);
//       expect(wrapper.find(OrderDetails)).toHaveLength(0);
//       expect(wrapper.find(AddMedicine)).toHaveLength(1);
//       expect(wrapper.find(OrderLists)).toHaveLength(0);
//     });
//     test('individual path', () => 
// {  const wrapper = mount( <Provider store={store}>
//         <MemoryRouter initialEntries={['dms.prokurainnovations.com/medicineList']}>   
//         <Ims match={{url:"dms.prokurainnovations.com"}}/> 
//       </MemoryRouter>  </Provider>
//       );  
//       expect(wrapper.find(MedicineListContainer)).toHaveLength(1);
//       expect(wrapper.find(MedicineTypes)).toHaveLength(0);
//       expect(wrapper.find(OrderDetails)).toHaveLength(0);
//       expect(wrapper.find(AddMedicine)).toHaveLength(0);
//       expect(wrapper.find(OrderLists)).toHaveLength(0);
//     });
//     test('individual path', () => 
// {  const wrapper = mount( <Provider store={store}>
//         <MemoryRouter initialEntries={['dms.prokurainnovations.com/orders/lists']}>   
//         <Ims match={{url:"dms.prokurainnovations.com"}}/> 
//       </MemoryRouter>  </Provider>
//       );  
//       expect(wrapper.find(MedicineListContainer)).toHaveLength(0);
//       expect(wrapper.find(MedicineTypes)).toHaveLength(0);
//       expect(wrapper.find(OrderDetails)).toHaveLength(0);
//       expect(wrapper.find(AddMedicine)).toHaveLength(0);
//       expect(wrapper.find(OrderLists)).toHaveLength(1);
//     });
//     test('individual path', () => 
// {  const wrapper = mount( <Provider store={store}>
//         <MemoryRouter initialEntries={['dms.prokurainnovations.com/orders/details']}>   
//         <Ims match={{url:"dms.prokurainnovations.com"}}/> 
//       </MemoryRouter>  </Provider>
//       );  
//       expect(wrapper.find(MedicineListContainer)).toHaveLength(0);
//       expect(wrapper.find(MedicineTypes)).toHaveLength(0);
//       expect(wrapper.find(OrderDetails)).toHaveLength(1);
//       expect(wrapper.find(AddMedicine)).toHaveLength(0);
//       expect(wrapper.find(OrderLists)).toHaveLength(0);
//     });
//   })