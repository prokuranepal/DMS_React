import React from 'react';
import CreateUser from './CreateUser';

import {
    configure,
    mount
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {findByTestAttr} from '../../util/testSnapFunction';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TextField from '@material-ui/core/TextField';
import { MemoryRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {act} from 'react-dom/test-utils';
const mockStore = configureStore([]);
configure({
    adapter: new EnzymeAdapter
})

const preventDefault1= jest.fn();
const createUser1Function= jest.fn();
const createUser2Function= jest.fn();
const dummy_data={
    history:"history1",
    createUser1:createUser1Function,
    createUser2:createUser2Function,
 
}


describe('<CreateUser />', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
       users:null
        });
        store.dispatch=jest.fn();
   
    });

    afterEach(() => {
        jest.clearAllMocks();
      });

    
  it("Events and props test in CreateUser", () =>
        {
            const wrapper = mount(<Provider store={store}><MemoryRouter><CreateUser {...dummy_data} /></MemoryRouter></Provider>)
            wrapper.update()

            // expect(store.dispatch).toHaveBeenCalledWith('')
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

            let username= findByTestAttr(wrapper, "username").at(0)
            expect(username.props().value).toEqual('');
            act(() => { username.props().onChange({target:{
               name:"username",
               value:"saj"
            }})});
            wrapper.update()
            let username2= findByTestAttr(wrapper, "username").at(0)
            expect(username2.props().value).toEqual("saj")
            // callComp.props().pressHandler()
            // expect(function_dial).toHaveBeenCalledTimes(1);
            // expect(function_dial).toHaveBeenCalledWith('tel:${}')
          
 
            // const naviProp = { navigation:{navigate: function_click ,getParam: function_click }}
            // let navOption= CreateUser.navigationOptions(naviProp)
            // console.log(navOption)
            // expect(typeof navOption).toBe("object");
        
        
            });

    
        });