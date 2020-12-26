import React from 'react';
import MedicineTypes from './MedicineTypes';
import {
    configure,
    shallow,
    mount
} from 'enzyme';
import types from '../../../../JSONFiles/medicineTypes';

import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
import { mockMaterialUI } from '../../../../util/testSnapFunction';
configure({
    adapter: new EnzymeAdapter
})


const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

describe('<MedicineTypes />', () => {
  let wrapper;

  let store;

  beforeEach(() => {
    
  mockMaterialUI();
  })

  afterEach(() => {
    jest.clearAllMocks();
  });
 

it("MedicineTypes snapshot", () => {
        // let wrapper = setup(dummy_data);
    wrapper = shallow( < MedicineTypes  />)

        expect(wrapper).toMatchSnapshot();

  
})
it("MedicineTypes comp", () => {
    // let wrapper = setup(dummy_data);
wrapper = shallow( < MedicineTypes  />)

let cardComp=findByTestAttr(wrapper, "cardComp")
expect(cardComp).toHaveLength(types.length)

// expect(rowsComp).toHaveLength(rows.length)

})
})