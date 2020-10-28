import React from 'react';
import MissionInfo from './MissionInfo';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../../util/testSnapFunction';
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
const startMissionFunction=jest.fn()
const uploadMissionFunction=jest.fn()

const dummy_data={
    onStartMission:startMissionFunction,
    uploadMission:uploadMissionFunction
}
const setup = (props = {}, state = null) => {
    return shallow( < MissionInfo {...props}  />
    )
}

 {/* test_function(["MissionInfo", 0], ["renders correctly", "renders the length of component"], [ < MissionInfo visit={3} newVisit={1}/ > , < div / > ]) */}
it("snapshot test", () => {
    let wrapper = setup(dummy_data);
    expect(wrapper).toMatchSnapshot()
})

it("Button test", () => {
    let wrapper = setup(dummy_data);
    let uploadComp=findByTestAttr(wrapper, "uploadComp")
    uploadComp.props().onClick();
    expect(uploadMissionFunction).toHaveBeenCalled()
    let startComp=findByTestAttr(wrapper, "startComp")
    startComp.props().onClick();
    expect(startMissionFunction).toHaveBeenCalled()
})