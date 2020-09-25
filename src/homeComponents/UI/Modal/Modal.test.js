import React from 'react';
import Modal from './Modal';
import {
    configure,
    mount
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {act} from 'react-dom/test-utils';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import testSnapFunction,{findByTestAttr} from '../../../util/testSnapFunction'
const mockStore = configureStore([]);
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


const onCloseFunction=jest.fn()
const onDeleteUser=jest.fn()
const preventDefault1=jest.fn()
const dummy_data={
    open:true, 
    onClose:onCloseFunction, 
    user:{
        username:"user1",
        image:"image.png",
        description:"des"
    }, 
    deleteUser:onDeleteUser
}

describe('Modal />', () => {
    let store;
  beforeEach(() => {
      store = mockStore({
    
      });
      store.dispatch=jest.fn();
    });
 

  afterEach(() => {
    jest.clearAllMocks();
  });

// testSnapFunction("<Modal />","Snapshot test",<Provider store={store}> < Modal {...dummy_data}  /> </Provider>)


it("Modal Components", () => {
      let wrapper=  mount(<Provider store={store}> < Modal {...dummy_data}  /> </Provider>)
   const onDelete = findByTestAttr(wrapper, "onDelete").at(0)
   const textFieldComp = findByTestAttr(wrapper, "textFieldComp").at(0)
   const dialogComp = findByTestAttr(wrapper, "dialogComp").at(0)
   const onClose = findByTestAttr(wrapper, "onClose").at(0)
    expect(dialogComp.props().open).toEqual(true)
    dialogComp.props().onClose();
    expect(onCloseFunction).toHaveBeenCalledTimes(1);
    expect(textFieldComp.props().value).toEqual("")
    act(()=>{textFieldComp.props().onChange({target:{value:"user1"}})
    })
    wrapper.update()
    const textFieldComp2 = findByTestAttr(wrapper, "textFieldComp").at(0)
    expect(textFieldComp2.props().value).toEqual("user1")
     const onDelete2 = findByTestAttr(wrapper, "onDelete").at(0)

    onDelete2.props().onClick({preventDefault:preventDefault1});
    wrapper.update()
    expect(preventDefault1).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
    expect(onCloseFunction).toHaveBeenCalledTimes(2)


})
})
