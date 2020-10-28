import React from 'react';
import Auth from './Auth';
import {
    configure,
    mount
} from 'enzyme';
import {IntlProvider} from 'react-intl';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
import { MemoryRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {act} from 'react-dom/test-utils';

const mockStore = configureStore([]);

configure({
    adapter: new EnzymeAdapter
})
const includeFunction=jest.fn()
includeFunction.mockReturnValue("fixed-drawer")
const navFunction=jest.fn();
const preventDefaultFunction=jest.fn()
const dummy_data={
   history:{
       push: navFunction
   }
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


describe('<Auth />', () => {
    let store;
beforeEach(()=>{
    store = mockStore({
        auth:{
            token:"abcdefgh",
            error:'No error'
      },
      });
      store.dispatch=jest.fn();
})
afterEach(() => {
    jest.clearAllMocks();
  });

it("Components Auth", () => {
    let wrapper = mount(<Provider store={store}> 
    <MemoryRouter >
        <IntlProvider locale="en" messages={
            {"popup.profile":"dheeel"}
            } id="popup.setting">
                < Auth {...dummy_data}  >
                    <div data-test="childComp">
                        childComp
                    </div>
                </Auth>
            </IntlProvider>
        </MemoryRouter>
    </Provider>)
    expect(navFunction).toHaveBeenCalled()
    let errorComp = findByTestAttr(wrapper, "errorComp").at(0)
    let emailChangeComp = findByTestAttr(wrapper, "emailChangeComp").at(0)
    let languageSwitcherComp = findByTestAttr(wrapper, "languageSwitcherComp").at(0)
    let dropDownComp2 = findByTestAttr(wrapper, "dropDownComp2").at(0)
    let dropDownComp3 = findByTestAttr(wrapper, "dropDownComp3").at(0)
    expect(errorComp.text()).toEqual("No error")
    expect(emailChangeComp.prop('defaultValue')).toEqual("9840016544");
    
    act(()=>{emailChangeComp.props().onChange({target:{value:"9842203043"}})})
    wrapper.update()
    let emailChangeComp2 = findByTestAttr(wrapper, "emailChangeComp").at(0)

    expect(emailChangeComp2.prop('defaultValue')).toEqual("9842203043");


    let passwordChangeComp = findByTestAttr(wrapper, "passwordChangeComp").at(0)
    expect(passwordChangeComp.prop('defaultValue')).toEqual("sushil");
    
    act(()=>{passwordChangeComp.props().onChange({target:{value:"newPassword"}})})
    wrapper.update()
    let passwordChangeComp2 = findByTestAttr(wrapper, "passwordChangeComp").at(0)

    expect(passwordChangeComp2.prop('defaultValue')).toEqual("newPassword");

    let submitComp = findByTestAttr(wrapper, "submitComp").at(0)
    act(()=>{submitComp.props().onClick({preventDefault:preventDefaultFunction});})
    wrapper.update()
    expect(preventDefaultFunction).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalled()
    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function))

})
})
