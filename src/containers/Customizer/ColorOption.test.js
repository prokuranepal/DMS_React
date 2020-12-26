import React from 'react';
import ColorOption from './ColorOption';
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
const navFunction=jest.fn();
const preventDefaultFunction=jest.fn()
const hasFunction = jest.fn();
const getFunction = jest.fn()

// const itemClass = new Item();
const dummy_data={
  
  }


const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


describe('<ColorOption />', () => {
    let store;
beforeEach(()=>{
    store = mockStore({
        settings:{
            themeColor:"black", 
            darkTheme:true, 
            isDirectionRT:true
        }});
      store.dispatch=jest.fn();
})
afterEach(() => {
    jest.clearAllMocks();
  });

it("Components ColorOption", () => {
    let wrapper = mount(<Provider store={store}> 
    <MemoryRouter >
                < ColorOption {...dummy_data}  >
                </ColorOption>
        </MemoryRouter>
    </Provider>)
    let iconButtonComp1 = findByTestAttr(wrapper, "iconButtonComp1").at(0)
    let drawerComp = findByTestAttr(wrapper, "drawerComp").at(0)
    // let switchComp = findByTestAttr(wrapper, "switchComp").at(0)

    // let spanComp1 = wrapper.find(<span/>) //was not able to find span component no matter what
    expect(drawerComp.prop('open')).toEqual(false)


    // expect(spanComp1.prop('className')).toEqual('jr-link bg-indigo false')
    // expect(switchComp.prop('checked')).toEqual(true)
    // iconButtonComp1.props().onClick();
    // wrapper.update()
    // let drawerComp1 = findByTestAttr(wrapper, "drawerComp").at(0)

    // expect(drawerComp1.prop('open')).toEqual(true)
    drawerComp.props().onClose()
    wrapper.update()
    let drawerComp2 = findByTestAttr(wrapper, "drawerComp").at(0)

    expect(drawerComp2.prop('open')).toEqual(false)
    // spanComp1.props().onClick()
    // wrapper.update()
    // expect(store.dispatch).toHaveBeenCalledTimes(1);
    // expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function))
    // switchComp.props().onClick()
    // expect(store.dispatch).toHaveeBeenCalledTimes(2)
    // expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function))

})
})
