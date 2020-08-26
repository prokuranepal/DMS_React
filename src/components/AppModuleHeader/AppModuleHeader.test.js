import React from 'react';
import AppModuleHeader from './index';
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
    return (shallow( < AppModuleHeader {...props}  />)
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
placeholder:"placeholder"
, onChange:function_click, 
value:"inputValue", 
user:{
    name:"Jon",
    email:"jon@gmail.com",
    avatar:"image"
}}

describe('<TestComponent />', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = setup(dummy_data)
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


it("AppModuleHeader render", () => {
        // let wrapper = setup(dummy_data);

    const appValueComponent= findByTestAttr(wrapper,"container-component")
    expect(appValueComponent).toHaveLength(1)

  
})


it("Events and props test in AppModuleHeader", () => {
        const popOverComponent= findByTestAttr(wrapper,"popover-component")
        const pointerComponent= findByTestAttr(wrapper,"pointer-component")
        expect(popOverComponent.props().isOpen).toEqual(false)
        popOverComponent.props().toggle();
        
        wrapper.update()
        const popOverComponent2= findByTestAttr(wrapper,"popover-component")
        expect(popOverComponent2.prop("isOpen")).toEqual(true)
        
        const searchComponent= findByTestAttr(wrapper,"search-component")
        expect(searchComponent.prop("value")).toEqual("inputValue")
        searchComponent.props().onChange()
        // wrapper.update()
        expect(function_click).toHaveBeenCalledTimes(1)

        const inputComponent= findByTestAttr(wrapper,"input-component")
        expect(inputComponent.prop("value")).toEqual("inputValue")
        inputComponent.props().onChange()
        wrapper.update()
        expect(function_click).toHaveBeenCalledTimes(2)
        // popOverComponent.simulate('click')
        // wrapper.update()
        // expect(setState).toHaveBeenCalled();
})

it("Events and props test in AppModuleHeader", () => {
    const h3= wrapper.find('h3')
    const h4= wrapper.find('h4')
    expect(h3.text()).toEqual("Jon")
    expect(h4.text()).toEqual("jon@gmail.com")
    const popOverComponent= findByTestAttr(wrapper,"popover-component")

    expect(popOverComponent.props().isOpen).toEqual(false)
   
    const pointerComponent= findByTestAttr(wrapper,"pointer-component")
    pointerComponent.props().onClick();    
    wrapper.update()
    const popOverComponent2= findByTestAttr(wrapper,"popover-component")
    expect(popOverComponent2.prop("isOpen")).toEqual(true)

})


it("Events and props test in AppModuleHeader", () => {
    const pointerComponent= findByTestAttr(wrapper,"pointer-component")

    pointerComponent.props().onMouseEnter();   
    wrapper.update()

    const popOverComponent3= findByTestAttr(wrapper,"popover-component")
    expect(pointerComponent.prop('src')).toEqual("image");
    expect(popOverComponent3.prop("isOpen")).toEqual(true)
})
it("Events and props test in AppModuleHeader(DropDown COmponent)", () => {
    const dropdownComponent= findByTestAttr(wrapper,"dropdown-component")
    expect(dropdownComponent.prop("isOpen")).toEqual(false)
    dropdownComponent.props().toggle();   
    wrapper.update()

    const dropdownComponent2= findByTestAttr(wrapper,"dropdown-component")
    expect(dropdownComponent2.prop("isOpen")).toEqual(true)
})


})