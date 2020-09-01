import React from 'react';
import ActivityBox from './index';
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
    return shallow( < ActivityBox {...props}  /
        >
    )
}

 {/* test_function(["ActivityBox", 0], ["renders correctly", "renders the length of component"], [ < ActivityBox visit={3} newVisit={1}/ > , < div / > ]) */}
it("number of div children", () => {
    let wrapper = setup();
    const children = wrapper.find('div')
    expect(children).toHaveLength(1);
})
