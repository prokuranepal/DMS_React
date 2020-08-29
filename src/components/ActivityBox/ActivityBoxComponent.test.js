import React from 'react';
import ActivityBoxComponent from './ActivityBoxComponent';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import test_function from '../../test/test_function';
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
    return shallow( < ActivityBoxComponent {...props}  /
        >
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

 {/* test_function(["ActivityBoxComponent", 0], ["renders correctly", "renders the length of component"], [ < ActivityBoxComponent propValue="New Visit" / > , < div / > ]) */}
it("number of div children", () => {
    let wrapper = setup({propValue:4, propTitle:"New Visit"});
    const children = wrapper.find('div')
    expect(children).toHaveLength(3);
  
})

it("div for title", () => {
        let wrapper = setup({propValue:4, propTitle:"New Visit"});

    const appValueComponent= findByTestAttr(wrapper,"prop-title-component")
    expect(appValueComponent).toHaveLength(1)
    expect(appValueComponent.text()).toEqual("New Visit");

  
})

it("div for value", () => {
        let wrapper = setup({propValue:4, propTitle:"New Visit"});
    const appValueComponent= findByTestAttr(wrapper,"prop-value-component")
    expect(appValueComponent).toHaveLength(1)
    expect(appValueComponent.text()).toEqual("4");
})

