import React from 'react';
import SideNavOption from './SideNavOption';
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


describe('<SideNavOption />', () => {
    let store;
beforeEach(()=>{
    store = mockStore({
        settings:{
            themeColor:"black", 
            darkTheme:true, 
            isDirectionRT:true,
            drawerType:'fixed_drawer'
        }});
      store.dispatch=jest.fn();
})
afterEach(() => {
    jest.clearAllMocks();
  });

it("Components SideNavOption", () => {
    let wrapper = mount(<Provider store={store}> 
    <MemoryRouter >
                < SideNavOption {...dummy_data}  >
                </SideNavOption>
        </MemoryRouter>
    </Provider>)
    let buttonComp1 = findByTestAttr(wrapper, "buttonComp1").at(0)
    let buttonComp2 = findByTestAttr(wrapper, "buttonComp2").at(0)
    let buttonComp3 = findByTestAttr(wrapper, "buttonComp3").at(0)
    expect(buttonComp1.prop('className')).toEqual('jr-btn  active ')
    expect(buttonComp2.prop('className')).toEqual('jr-btn false ')
    expect(buttonComp3.prop('className')).toEqual('jr-btn false ')
    act(()=>buttonComp2.props().onClick())
    wrapper.update()
    expect(store.dispatch).toHaveBeenCalledTimes(1)
    expect(store.dispatch).toHaveBeenCalledWith({"drawerType": "collapsible", "type": "DRAWER_TYPE"})
    act(()=>buttonComp1.props().onClick())
    wrapper.update()
    expect(store.dispatch).toHaveBeenCalledTimes(2)
    expect(store.dispatch).toHaveBeenCalledWith({"drawerType": "fixed_drawer", "type": "DRAWER_TYPE"})
    act(()=>buttonComp3.props().onClick())
    wrapper.update()
    expect(store.dispatch).toHaveBeenCalledTimes(3)
    expect(store.dispatch).toHaveBeenCalledWith({"drawerType": "mini_drawer", "type": "DRAWER_TYPE"})
    
})
})
