import React from 'react';
import AddMedicine,{rows} from './AddMedicine';
import {
    configure,
    shallow,
    mount
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mockMaterialUI } from '../../../../util/testSnapFunction';
configure({
    adapter: new EnzymeAdapter
})
const mockStore = configureStore([]);

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

describe('<AddMedicine />', () => {
  let wrapper;

  let store;

  beforeEach(() => {
    store = mockStore({ 
    
  });
  store.dispatch=jest.fn();
  mockMaterialUI();
  })

  afterEach(() => {
    jest.clearAllMocks();
  });
 

it("AddMedicine snapshot", () => {
        // let wrapper = setup(dummy_data);
    wrapper = shallow( <Provider store={store}>< AddMedicine  /></Provider>)

        expect(wrapper).toMatchSnapshot();

  
})
// it("AddMedicine snapshot", () => {
//     // let wrapper = setup(dummy_data);
// wrapper = mount( <Provider store={store}>< AddMedicine  /></Provider>)

// let textComp=findByTestAttr(wrapper, "textComp")
// textComp.props('value').toEqual('')
// textComp.prop.onChange('hello')
// let textComp2=findByTestAttr(wrapper, "textComp")
// expect(textComp2.props('value')).toEqual('hello')
// let selectComp=findByTestAttr(wrapper, "selectComp")
// selectComp.props('value').toEqual('')
// selectComp.prop.onChange('type1')
// let selectComp2=findByTestAttr(wrapper, "selectComp")
// expect(selectComp2.props('value')).toEqual('type1')
// let quantityComp=findByTestAttr(wrapper, "quantityComp")
// let dateComp=findByTestAttr(wrapper, "dateComp")
// let addMedicineComp=findByTestAttr(wrapper, "addMedicineComp")


// // expect(rowsComp).toHaveLength(rows.length)

// })
})