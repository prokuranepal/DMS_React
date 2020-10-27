import React from 'react';
import Input from './Input';
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
    return shallow( < Input
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
it("Snapshot Input", () => {
    let wrapper = setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
   
})



it("Components Input", () => {
    let wrapper = setup(dummy_data);
    let inputElementComp = findByTestAttr(wrapper, "inputElementComp");;
    expect(inputElementComp).toHaveLength(1)
    expect(inputElementComp.prop('value')).toEqual("value1")
    inputElementComp.props().onChange()
    expect(changedFunction).toHaveBeenCalled()
})

it("Components TextArea", () => {
    let wrapper = setup({...dummy_data,elementType:"textarea"});
    let inputElementComp = findByTestAttr(wrapper, "textElementComp");;
    expect(inputElementComp).toHaveLength(1)
    expect(inputElementComp.prop('value')).toEqual("value1")
    inputElementComp.props().onChange()
    expect(changedFunction).toHaveBeenCalled()
})

it("Components Select", () => {
    let wrapper = setup({...dummy_data,elementType:"select"});
    let inputElementComp = findByTestAttr(wrapper, "selectElementComp");;
    expect(inputElementComp).toHaveLength(1)
    expect(inputElementComp.prop('value')).toEqual("value1")
    inputElementComp.props().onChange()
    expect(changedFunction).toHaveBeenCalled()
    let optionComp = findByTestAttr(wrapper, "optionComp");;
    expect(optionComp).toHaveLength(3)
    expect(optionComp.at(1).text()).toBe('displayValue2')
})