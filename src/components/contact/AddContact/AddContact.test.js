import React from 'react';
import AddContact from './index';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


/*
    name_length =[component name("<CustomButton>")"), 
        number of times the compnent is expected to render 
        component to corresponding index in elements( here 1 for View),2 for Text, 1 for Button]
    description= ["renders correctly", "renders the length of component ", ]-->description for each test here 2
    elements = [ component being tested (<CustomButton>), type of component expected(View),Text, Button]
*/

const setup = (props = {}, state = null) => {
    const wrapper = shallow( < AddContact {...props}  />);
        if (state)
        {
            wrapper.setState(state)
        }
return wrapper;
    
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
const onSaveContactFunction = jest.fn();
const onContactCloseFunction = jest.fn();

const dummy_data={
  contact: {id:1, 
            thumb:"thumb", 
            name:"dean", 
            email:"dean@gmail.com", 
            phone:"56739375", 
            designation: "peon", 
            selected:true, 
            starred:false, 
            frequently:true
  },
  onSaveContact:onSaveContactFunction, 
  onContactClose:onContactCloseFunction,
   open:true, 
}

describe('<AddContact />', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = setup(dummy_data)
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  

it("AddContact render", () => {
        // let wrapper = setup(dummy_data);

    const appValueComponent= findByTestAttr(wrapper,"container-component")
    expect(appValueComponent).toHaveLength(1)

  
})


it("initial states in AddContact", () => {
        const initialStateId= wrapper.state('id')
        const initialStateThumb= wrapper.state('thumb')
        const initialStateName= wrapper.state('name')
        const initialStateEmail= wrapper.state('email')
        const initialStatePhone= wrapper.state('phone')
        const initialStateDesignation= wrapper.state('designation')
        const initialStateSelected= wrapper.state('selected')
        const initialStateStarred= wrapper.state('starred')
        const initialStateFrequently= wrapper.state('frequently')
        expect(initialStateDesignation).toBe("peon");
        expect(initialStateId).toBe(1);
        expect(initialStateThumb).toBe("thumb");
        expect(initialStateEmail).toBe("dean@gmail.com");
        expect(initialStatePhone).toBe("56739375");
        expect(initialStateName).toBe("dean");
        expect(initialStateSelected).toBe(true);
        expect(initialStateFrequently).toBe(true);  
        expect(initialStateStarred).toBe(false);  
})

it("checking thumb",()=>{
    const img = wrapper.find('img');
    expect(img.props().src).toEqual("thumb");
    const wrapper2= setup({...dummy_data, contact:{...dummy_data.contact, thumb:''}});
    const img2= wrapper2.find('img')
    expect(img2.props().src).toEqual("https://via.placeholder.com/225x225");
})

it("checking container Modal",()=>{
        const containerComponent= findByTestAttr(wrapper,"container-component");
        expect(containerComponent.props().isOpen).toEqual(true);
        containerComponent.props().toggle()
        expect(onContactCloseFunction).toHaveBeenCalledTimes(1);

})

it("checking IntlMessages based on contact name",()=>{
    const intlSaveComponent= findByTestAttr(wrapper,"intlSave-component");
    const intlAddComponent= findByTestAttr(wrapper,"intlAdd-component");
    expect(intlAddComponent).toHaveLength(0);
    expect(intlSaveComponent).toHaveLength(1);
    const wrapper2= setup({...dummy_data, contact:{...dummy_data.contact, name:''}});
    const intlSaveComponent2= findByTestAttr(wrapper2,"intlSave-component");
    const intlAddComponent2= findByTestAttr(wrapper2,"intlAdd-component");
    expect(intlAddComponent2).toHaveLength(1);
    expect(intlSaveComponent2).toHaveLength(0);


})

it("checking IconButton Component click",()=>{
    const iconButtonComponent= findByTestAttr(wrapper,"iconbutton-component");
    iconButtonComponent.props().onClick();
    wrapper.update();
    expect(onContactCloseFunction).toHaveBeenCalledTimes(1);

})

it("Image component",()=>{
    const img= wrapper.find('img');
    expect(img.prop('src')).toEqual("thumb");
    expect(img.prop('alt')).toEqual("thumb");

})


it("TextField1 Component",()=>{
    const event={target:{value:"newName"}}
    const textFieldComponent= findByTestAttr(wrapper,"textfield1-component");
    expect(textFieldComponent.prop("defaultValue")).toEqual("dean")
    textFieldComponent.props().onChange(event);
    wrapper.update();
    const textFieldComponent2= findByTestAttr(wrapper,"textfield1-component");    
    expect(textFieldComponent2.prop("defaultValue")).toEqual("newName")
})

it("TextField2 Component",()=>{
    const event={target:{value:"newEmail"}}
    const textFieldComponent= findByTestAttr(wrapper,"textfield2-component");
    expect(textFieldComponent.prop("value")).toEqual("dean@gmail.com")
    textFieldComponent.props().onChange(event);
    wrapper.update();
    const textFieldComponent2= findByTestAttr(wrapper,"textfield2-component");
    expect(textFieldComponent2.prop("value")).toEqual("newEmail")
})
it("TextField3 Component",()=>{
    const event={target:{value:"newPhone"}}
    const textFieldComponent= findByTestAttr(wrapper,"textfield3-component");
    expect(textFieldComponent.prop("value")).toEqual("56739375")
    textFieldComponent.props().onChange(event);
    wrapper.update();
    const textFieldComponent2= findByTestAttr(wrapper,"textfield3-component");
    expect(textFieldComponent2.prop("value")).toEqual("newPhone")
})
it("TextField4 Component",()=>{
    const event={target:{value:"newDesignation"}}
    const textFieldComponent= findByTestAttr(wrapper,"textfield4-component");
    expect(textFieldComponent.prop("value")).toEqual("peon")
    textFieldComponent.props().onChange(event);
    wrapper.update();
    const textFieldComponent2= findByTestAttr(wrapper,"textfield4-component");
    expect(textFieldComponent2.prop("value")).toEqual("newDesignation")
})

it("Button Component",()=>{
    const buttonComponent= findByTestAttr(wrapper,"button-component");
    buttonComponent.props().onClick();
    wrapper.update()
    expect(onContactCloseFunction).toHaveBeenCalledTimes(1);
    expect(onSaveContactFunction).toHaveBeenCalledTimes(1);
    expect(onSaveContactFunction).toHaveBeenCalledWith(dummy_data.contact)
    const finalStateId= wrapper.state('id')
    const finalStateThumb= wrapper.state('thumb')
    const finalStateName= wrapper.state('name')
    const finalStateEmail= wrapper.state('email')
    const finalStatePhone= wrapper.state('phone')
    const finalStateDesignation= wrapper.state('designation')
    expect(finalStateDesignation).toBe("");
    expect(finalStateId).toBe(2);
    expect(finalStateThumb).toBe("");
    expect(finalStateEmail).toBe("");
    expect(finalStatePhone).toBe("");
    expect(finalStateName).toBe("");

})

})