import React from 'react';
import DroneInfo from './DroneInfo';
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
    return shallow( < DroneInfo {...props}  />
    )
}

 {/* test_function(["DroneInfo", 0], ["renders correctly", "renders the length of component"], [ < DroneInfo visit={3} newVisit={1}/ > , < div / > ]) */}
it("snapshot test", () => {
    let wrapper = setup();
    expect(wrapper).toMatchSnapshot()
})
