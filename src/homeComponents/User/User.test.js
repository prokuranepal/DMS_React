import React from 'react';
import User from './User';
import {
    configure,
    mount,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {act} from 'react-dom/test-utils'

const mockStore = configureStore([]);
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const changedFunction=jest.fn();
const dummy_data = {
  title:"title",
  users:[
      {
          username:"sa"
      },
      {
        username:"ga"
    },
    {
        username:"la"

    }
  ]
}

const store = mockStore({
    });


const setup = (props = {}) => {
    return mount(<Provider store={store}><MemoryRouter>< User
     {...props}  /></MemoryRouter></Provider>
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
it("Snapshot User", () => {
    let wrapper = setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
   
})



it("Components User", () => {
    let wrapper = setup(dummy_data);
    let titleComp = findByTestAttr(wrapper, "titleComp").at(0);
    expect(titleComp.text()).toEqual("title")
    let listItemComp = findByTestAttr(wrapper, "listItemComp").at(3);
    expect(listItemComp.prop('primary')).toEqual("ga")
    let iconButtonComp = findByTestAttr(wrapper, "iconButtonComp").at(3);
    // expect(iconButtonComp.prop('primary')).toEqual("sa")
    let modalComp=findByTestAttr(wrapper,"modalComp").at(0)

    expect(modalComp.prop('open')).toBe(false)
    expect(modalComp.prop('user')).toEqual({})

    act(()=>{iconButtonComp.props().onClick()})
    wrapper.update()
    let modalComp1=findByTestAttr(wrapper,"modalComp").at(0)

    expect(modalComp1.prop('open')).toBe(true)
    expect(modalComp1.prop('user')).toEqual( {
        username:"sa"
    },)
    act(()=>{modalComp1.props().onClose()})
    wrapper.update()
    let modalComp2=findByTestAttr(wrapper,"modalComp").at(0)

    expect(modalComp2.prop('open')).toBe(false)  

})
