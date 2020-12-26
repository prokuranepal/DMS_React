// import React from 'react';
// import UserInfoPopup from './UserInfoPopup';
// import {IntlProvider} from 'react-intl';
// import {
//     configure,
//     mount
// } from 'enzyme';
// import EnzymeAdapter from 'enzyme-adapter-react-16';
// import {findByTestAttr} from '../../util/testSnapFunction';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import {act} from 'react-dom/test-utils'
// const mockStore = configureStore([]);
// configure({
//     adapter: new EnzymeAdapter
// })




// describe('<UserInfoPopup />', () => {
//     let store;
//     beforeEach(() => {
//         store= mockStore();
//         store.dispatch=jest.fn();
   
//     });

//     afterEach(() => {
//         jest.clearAllMocks();
//       });

    
//   it("Snapshot", () =>
//         {
//             const wrapper = mount(<Provider store={store}><IntlProvider locale="en" messages={
//             {"popup.profile":"dheeel"}
//             } id="popup.setting"><UserInfoPopup  /></IntlProvider></Provider>).at(0)
//             expect(wrapper).toMatchSnapshot();
  
//             //     act(()=>{onClickComp.props().onClick({currentTarget:<UserInfoPopup></UserInfoPopup>})})
//             // wrapper.update();
//             // let menuComp1= findByTestAttr(wrapper, "menuComp").at(0)
//             // expect(menuComp1.prop("open")).toBe(true)
//             // expect(menuComp1.prop("anchorEl")).toBe("setting")
//             // let menuItemComp= findByTestAttr(wrapper, "menuItemComp").at(0)
//             // act(()=>{menuItemComp.props().onClick()})
//             // wrapper.update()
//             // let menuComp2= findByTestAttr(wrapper, "menuComp").at(0)
//             // expect(menuComp2.prop("open")).toBe(false)
//             // expect(store.dispatch).toHaveBeenCalled()
//             // expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function))    
//         });

    
//         });