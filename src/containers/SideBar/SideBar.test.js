import React from 'react';
import SideBar from './index';
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
import { tsConstructorType } from '@babel/types';

const mockStore = configureStore([]);

configure({
    adapter: new EnzymeAdapter
})
const includeFunction=jest.fn()
includeFunction.mockReturnValue("fixed-drawer")

// const itemClass = new Item();
const dummy_data={
  
  }


const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


describe('<SideBar />', () => {
    let store;
beforeEach(()=>{
    store = mockStore({
        settings:{
           navCollapsed:false,
           drawerType:["fixed_drawer", "collapsing"],
           width:800,
           navigationStyle:"horizontal_navigation"
        }});
      store.dispatch=jest.fn();
})
afterEach(() => {
    jest.clearAllMocks();
  });

it("Components SideBar", () => {
    let wrapper = mount(<Provider store={store}> 
    <MemoryRouter >
                < SideBar {...dummy_data}  >
                </SideBar>
        </MemoryRouter>
    </Provider>)
    let drawerComp = findByTestAttr(wrapper, "drawerComp").at(0)
    // let switchComp = findByTestAttr(wrapper, "switchComp").at(0)

    // let spanComp1 = wrapper.find(<span/>) //was not able to find span component no matter what
    expect(drawerComp.prop('open')).toEqual(false)
    drawerComp.props().onClose()
    wrapper.update()
    let drawerComp2 = findByTestAttr(wrapper, "drawerComp").at(0)

    expect(store.dispatch).toHaveBeenCalled()
    expect(store.dispatch).toHaveBeenCalledWith({"isNavCollapsed": undefined, "type": "TOGGLE_COLLAPSED_NAV"})
    // spanComp1.props().onClick()
    // wrapper.update()
    // expect(store.dispatch).toHaveBeenCalledTimes(1);
    // expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function))
    // switchComp.props().onClick()
    // expect(store.dispatch).toHaveeBeenCalledTimes(2)
    // expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function))

})
})
