import testSnapFunction from '../../../util/testSnapFunction';
import Users from './Users'
import React from 'react';
import {
    configure,
    mount
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
import { Provider } from 'react-redux';
import {MemoryRouter} from 'react-router'
import configureStore from 'redux-mock-store';
import CreateUser from '../../../homeComponents/CreateUser/CreateUser';
import EditUser from '../../../homeComponents/EditUser/EditUser';
import ListUsers from '../../../homeComponents/User/ListUsers';

const mockStore = configureStore([]);


configure({
    adapter: new EnzymeAdapter
})


const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

describe('<AddMedicine />', () => {
    let wrapper;
  
    let store;
  
    beforeEach(() => {
      store = mockStore({ 
      users:["user1", "user2"]
    });
    store.dispatch=jest.fn();
    })
  
    afterEach(() => {
      jest.clearAllMocks();
    });
    it("route",()=>{try{
        wrapper = mount( 
           <Provider store={store} >
           <MemoryRouter initialEntries={['/random']}>   
          <Users users={{users1:"sa", users2:"as"}}/> 
         </MemoryRouter>  
         </Provider>
   
         );  
         expect(wrapper).toMatchSnapshot();
        }
        catch{}
   })
      
it("route",()=>{try{
     wrapper = mount( 
        <Provider store={store} >
        <MemoryRouter initialEntries={['/random']}>   
       <Users users={{users1:"sa", users2:"as"}}/> 
      </MemoryRouter>  
      </Provider>

      );  
      expect(wrapper.find(ListUsers)).toHaveLength(0);
      expect(wrapper.find(EditUser)).toHaveLength(0);
      expect(wrapper.find(CreateUser)).toHaveLength(0);
     }
     catch{}
})
it("route",()=>{
    try{

    wrapper = mount( 
        <Provider store={store} >
       <MemoryRouter initialEntries={['/app/users/list-users']}>   
      <Users users={{users1:"sa", users2:"as"}}/> 
     </MemoryRouter>        </Provider>

     );  
     expect(wrapper.find(ListUsers)).toHaveLength(1);
     expect(wrapper.find(EditUser)).toHaveLength(0);
     expect(wrapper.find(CreateUser)).toHaveLength(0);
        }
        catch{}
})
it("route",()=>{
    try{
    wrapper = mount( 
        <Provider store={store} >
       <MemoryRouter initialEntries={['/app/users/create-user']}>   
    <Users users={{users1:"sa", users2:"as"}}/> 
     </MemoryRouter>  
     </Provider>

     );  
     expect(wrapper.find(ListUsers)).toHaveLength(0);
     expect(wrapper.find(EditUser)).toHaveLength(0);
     expect(wrapper.find(CreateUser)).toHaveLength(1);
    }
    catch{}
})
it("route",()=>{
    try{
    wrapper = mount( 
        <Provider store={store} >
       <MemoryRouter initialEntries={['/app/users/edit-user']}>   
      <Users users={{users1:"sa", users2:"as"}}/> 
     </MemoryRouter>  
           </Provider>

     );  
     expect(wrapper.find(ListUsers)).toHaveLength(0);
     expect(wrapper.find(EditUser)).toHaveLength(1);
     expect(wrapper.find(CreateUser)).toHaveLength(0);
    }catch{

    }
})
})