import React from 'react';
import Stepper from './Stepper';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const changedFunction=jest.fn();
const dummy_data = {
  invalid:false,
  shouldValidate:true,
  touched:true,
  value:"value1",
  changed:changedFunction,
  elementConfig:{
      options:[{value:"value1", displayValue:"displayValue1"},{value:"value2", displayValue:"displayValue2"},{value:"value3", displayValue:"displayValue3"}]
  },
  label:"label1",
  elementType:"input"
}




const setup = (props = {}) => {
    return shallow( < Stepper
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
it("Snapshot Stepper", () => {
    let wrapper = setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
   
})



it("Components Stepper", () => {
    let wrapper = setup(dummy_data);
    let stepLabelComp = findByTestAttr(wrapper, "stepLabelComp");;
    expect(stepLabelComp).toHaveLength(5)
    let stepperComp = findByTestAttr(wrapper, "stepperComp");;
    expect(stepperComp.props().activeStep).toEqual(0)
    let buttonComp = findByTestAttr(wrapper, "buttonComp");;
    buttonComp.props().onClick()
    wrapper.update()
    let stepperComp1 = findByTestAttr(wrapper, "stepperComp");;
    expect(stepperComp1.props().activeStep).toEqual(1)


})

