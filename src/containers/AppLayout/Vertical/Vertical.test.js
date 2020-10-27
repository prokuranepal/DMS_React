import React from 'react';
import Vertical from './index';
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
import { mockDevice } from '../../../util/testSnapFunction';

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


describe('<Vertical />', () => {
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

it("Components Vertical", () => {
    let wrapper = mount(<Provider store={store}> 
    <MemoryRouter >
        <IntlProvider locale="en" messages={
            {"popup.profile":"dheeel"}
            } id="popup.setting">
                < Vertical {...dummy_data}  >
                    <div data-test="childComp">
                        childComp
                    </div>
                </Vertical>
            </IntlProvider>
        </MemoryRouter>
    </Provider>)
    let drawerComp = findByTestAttr(wrapper, "drawerComp").at(0)
    expect(drawerComp.props().className).toEqual('app-container fixed-drawer')
    let childComp = findByTestAttr(wrapper, "childComp").at(0)
    expect(childComp.text()).toEqual('childComp') //not working as expected, should have been 'Follow'

})
})
