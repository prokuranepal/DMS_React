import {findByTestAttr} from '../../util/testSnapFunction';
import EditUser from './EditUser'
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TestRenderer from 'react-test-renderer';
import TextField from '@material-ui/core/TextField';
import { MemoryRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {act} from 'react-dom/test-utils';
import {configure,mount} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';

const mockStore = configureStore([]);
configure({
    adapter: new EnzymeAdapter
})
const createUser1Function= jest.fn()
const createUser2Function= jest.fn()
const setAlertFunction= jest.fn()

const dummy_data= {
history:"history", 
createUser1:createUser1Function, 
createUser2:createUser2Function, 
locations:{
    state:{
        user:{
        fullname:"john",
        institution: "la",
        level: 'Level 1',
        image: 'image.png',
        username:"user1"
    }},
    alerts:['confirm','yes']
}, 
setAlert:setAlertFunction
}
const preventDefault1= jest.fn();

// testSnapFunction("<EditUser />", "Snapshot test for EditUser ",<EditUser {...dummy_data}><div>dsjfM</div> </EditUser> )

describe('<EditUser />', () => {

    let store;
 
    beforeEach(() => {
      store = mockStore({
    
      });
      store.dispatch=jest.fn();
    });
 
    afterEach(() => {
        jest.clearAllMocks();
      });
    
  it("Events and props test in EditUser", () =>
        {
          const wrapper = mount(<Provider store={store}><MemoryRouter ><EditUser  {...dummy_data} /> </MemoryRouter></Provider>)
             wrapper.update()
             expect(wrapper.find(TextField)).toHaveLength(4)
            expect(wrapper.find(Button)).toHaveLength(2)
            expect(wrapper.find(FormControl)).toHaveLength(5)

            let formSubmit= findByTestAttr(wrapper, "formSubmit").at(0)
             console.log(formSubmit.props().onSubmit(   {
                preventDefault:preventDefault1
            }))
            wrapper.update()
            expect(preventDefault1).toHaveBeenCalledTimes(1)
            expect(store.dispatch).toHaveBeenCalledTimes(1);
            expect(store.dispatch).toHaveBeenCalledWith( expect.any(Function));

            let username= findByTestAttr(wrapper, "usernameComp").at(0)
            expect(username.props().value).toEqual('john');
            act(() => { username.props().onChange({target:{
               name:"fullname",
               value:"saj"
            }})});
            wrapper.update()
            let username2= findByTestAttr(wrapper, "usernameComp").at(0)
            expect(username2.props().value).toEqual("saj")
  
        
            });

        });