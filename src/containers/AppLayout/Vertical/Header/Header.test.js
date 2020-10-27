import React from 'react';
import Header from './index';
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
import { mockDevice } from '../../../../util/testSnapFunction';

const mockStore = configureStore([]);

configure({
    adapter: new EnzymeAdapter
})
const includeFunction=jest.fn()
includeFunction.mockReturnValue("fixed-drawer")

const dummy_data={
    user:{
        id:"id1",
        name:"shree",
        image:"image1",
        address:"dharan"
    },
    userInfo:{
        followers:400,
        following:300,
        frinds: 1000
    }
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


describe('<Header />', () => {
    let store;
beforeEach(()=>{
    store = mockStore({
        settings:{
            drawerType:{
                includes:includeFunction
            },
            locale:{
                icon:"icon1"
            }, 
            navCollapsed:true
      },
      });
      store.dispatch=jest.fn();
    mockDevice()
})
afterEach(() => {
    jest.clearAllMocks();
  });

it("Components Header", () => {
    let wrapper = mount(<Provider store={store}> 
    <MemoryRouter >
        <IntlProvider locale="en" messages={
            {"popup.profile":"dheeel"}
            } id="popup.setting">
                < Header {...dummy_data}  >
                    <div data-test="childComp">
                        childComp
                    </div>
                </Header>
            </IntlProvider>
        </MemoryRouter>
    </Provider>)
    let iconButtonComp = findByTestAttr(wrapper, "iconButtonComp").at(0)
    let dropDownComp = findByTestAttr(wrapper, "dropDownComp").at(0)
    let languageSwitcherComp = findByTestAttr(wrapper, "languageSwitcherComp").at(0)
    let dropDownComp2 = findByTestAttr(wrapper, "dropDownComp2").at(0)
    let dropDownComp3 = findByTestAttr(wrapper, "dropDownComp3").at(0)
    expect(dropDownComp.prop('isOpen')).toEqual(false)
    expect(dropDownComp3.prop('isOpen')).toEqual(false);
    expect(dropDownComp2.prop('isOpen')).toEqual(false);
    iconButtonComp.props().onClick();
    wrapper.update()
    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith({"isNavCollapsed": false, "type": "TOGGLE_COLLAPSED_NAV"})
    dropDownComp.props().toggle()
    wrapper.update();
    let dropDownComp9 = findByTestAttr(wrapper, "dropDownComp").at(0)
    expect(dropDownComp9.prop('isOpen')).toEqual(true)
    languageSwitcherComp.props().switchLanguage()
    expect(store.dispatch).toHaveBeenCalledTimes(2)
    expect(store.dispatch).toHaveBeenCalledWith( {"payload": undefined, "type": "SWITCH_LANGUAGE"})
    languageSwitcherComp.props().handleRequestClose()
    wrapper.update();
    let dropDownComp8 = findByTestAttr(wrapper, "dropDownComp").at(0)
    expect(dropDownComp8.prop('isOpen')).toEqual(false)
    let dropDownComp7 = findByTestAttr(wrapper, "dropDownComp2").at(0)
    
    dropDownComp2.props().toggle();
    wrapper.update()

    expect(dropDownComp7.prop('isOpen')).toEqual(false)

    let dropDownComp6 = findByTestAttr(wrapper, "dropDownComp2").at(0)
    
    dropDownComp6.props().toggle();
    wrapper.update()

    expect(dropDownComp6.prop('isOpen')).toEqual(true)
})
})
