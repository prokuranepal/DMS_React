import React from 'react';
import CheckListItem from './CheckListItem';
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
    return (shallow( < CheckListItem {...props}  />)
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
name:"dms",
checked:true,
onChange:function_click
}

describe('<TestComponent />', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = setup(dummy_data)
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


it("CheckListItem render", () => {
        // let wrapper = setup(dummy_data);

    const appValueComponent= findByTestAttr(wrapper,"container-component")
    expect(appValueComponent).toHaveLength(1)

  
})


it("Events and props test in CheckListItem", () => {
        const checkComponent= findByTestAttr(wrapper,"checkbox-component")
        const pil = wrapper.find('p')
        expect(pil.text()).toEqual("dms")
        checkComponent.props().onChange()
        wrapper.update()
        expect(function_click).toHaveBeenCalledTimes(1)
})
})
