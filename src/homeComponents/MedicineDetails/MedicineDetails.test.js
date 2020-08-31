import React from 'react';
import MedicineDetails from './MedicineDetails';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


const setup = (props = {}, state = null) => {
    return (shallow( < MedicineDetails {...props}  />)
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


const dummy_data=
    {
        medicineName:"paracetamol",
        medicineType: "pain killer",
        medicineQuantity: 120
    }


describe('MedicineDetails />', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = setup(dummy_data)
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


it("MedicineDetails snapshot", () => {
        // let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();

  
})

it("MedicineDetails Components", () => {

    const h3 = wrapper.find('h3')
    expect(h3.at(0).text()).toEqual("Medicine Name: paracetamol")
    expect(h3.at(1).text()).toEqual("Medicine Types: pain killer")
    expect(h3.at(2).text()).toEqual("Medicine Quantity: 120")


})
})
