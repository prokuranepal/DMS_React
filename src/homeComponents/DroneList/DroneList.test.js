import React from 'react';
import DroneList from './DroneList';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()


/*
    name_length =[component name("<CustomButton>")"), 
        number of times the compnent is expected to render 
        component to corresponding index in elements( here 1 for View),2 for Text, 1 for Button]
    description= ["renders correctly", "renders the length of component ", ]-->description for each test here 2
    elements = [ component being tested (<CustomButton>), type of component expected(View),Text, Button]
*/

const setup = (props = {}, state = null) => {
    return (shallow( < DroneList {...props}  />)
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

 {/* test_function(["ActivityBoxComponent", 0], ["renders correctly", "renders the length of component"], [ < ActivityBoxComponent propValue="New Visit" / > , < div / > ]) */}
{/* it("number of div children", () => {
    let wrapper = setup();
    const children = wrapper.find('div')
    expect(children).toHaveLength(3);
  
}) */}


const dummy_data={
drones:[
    {name:"1",
    code:"601",
    type:"fixed wing"},
    {name:"2",
    code:"602",
    type:"quad"},
    {name:"3",
    code:"603",
    type:"vtol"}],
    abort:function_click,
    select:function_click

}

describe('<TestComponent />', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = setup(dummy_data)
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


it("DroneList render", () => {
        // let wrapper = setup(dummy_data);
    const wrapper2 = setup();
    const appValueComponent= findByTestAttr(wrapper2,"container-component")
    expect(appValueComponent).toHaveLength(1)
    const droneListComponent= findByTestAttr(wrapper2,"dronelist-component")
    expect(droneListComponent).toHaveLength(0)

    const droneListComponent1= findByTestAttr(wrapper,"dronelist-component")
    expect(droneListComponent1).toHaveLength(3)
    const droneAt1 = findByTestAttr(wrapper,"dronelist-component").at(1);
    expect(droneAt1.prop("drone")).toEqual( {name:"2",
    code:"602",
    type:"quad"})
  
})



it("radio Component", () => {
    const radioComponent= findByTestAttr(wrapper,"radio-component")
    expect(radioComponent.prop("value")).toEqual("1")
    radioComponent.props().onChange({target:{value:"77"}})
    wrapper.update()
    const radioComponent1= findByTestAttr(wrapper,"radio-component")
    expect(radioComponent1.prop('value')).toEqual('77')

})

it("button Component1", () => {
    const button1Component= findByTestAttr(wrapper,"button1-component")
    button1Component.props().onClick()
    wrapper.update()
    expect(function_click).toHaveBeenCalledTimes(1);    

})
it("button Component2", () => {
    const button2Component= findByTestAttr(wrapper,"button2-component")
    button2Component.props().onClick()
    wrapper.update()
    expect(function_click).toHaveBeenCalledTimes(1); 
    expect(function_click).toHaveBeenCalledWith("1")   

})

})
