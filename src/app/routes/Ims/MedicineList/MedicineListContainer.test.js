import React from 'react';
import MedicineListContainer,{rows} from './MedicineListContainer';
import {
    configure,
    shallow,
    mount
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
import { mockMaterialUI } from '../../../../util/testSnapFunction';
configure({
    adapter: new EnzymeAdapter
})


const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

describe('<MedicineListContainer />', () => {
  let wrapper;

  let store;

  beforeEach(() => {
    
  mockMaterialUI();
  })

  afterEach(() => {
    jest.clearAllMocks();
  });
 

it("MedicineListContainer snapshot", () => {
        // let wrapper = setup(dummy_data);
    wrapper = shallow( < MedicineListContainer  location={{aboutProps:{name:"Medicine1"}}}/>)

        expect(wrapper).toMatchSnapshot();

  
})
it("MedicineListContainer snapshot", () => {
    // let wrapper = setup(dummy_data);
wrapper = shallow( < MedicineListContainer location={{aboutProps:{name:"Medicine1"}}} />)

let buttonComp=findByTestAttr(wrapper, "buttonComp")
buttonComp.props().onClick()

// expect(rowsComp).toHaveLength(rows.length)

})
})