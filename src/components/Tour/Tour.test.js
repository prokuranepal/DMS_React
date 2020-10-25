import testSnapFunction from '../../util/testSnapFunction';
import Widget from './index'
import React from 'react';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

const dummy_data={
joyRide:{
    autoStart:true,
    resizeDebounce:12,
    scrollToFirstStep:true,
    steps:5,
    type:"broken"
}
}

// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})

{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
testSnapFunction("<Widget/>", "Snapshot test for Widget",<Widget {...dummy_data}/> )

const setup = (props = {}) => {
    return shallow( < Widget
     {...props}  />
    )
}

// const findByTestAttr=(wrapper, val)=>{
//     return wrapper.find(`[data-test='${val}']`)
// }
// const findByTestAttr2=(wrapper, val)=>{
//     return wrapper.find(`[data-testsss='${val}']`)
// }

it("Widget render", () => {
        let wrapper = setup(dummy_data);
        let instance1= wrapper.instance()
        instance1.handleNextButtonClick()
        instance1.componentDidMount()
        instance1.handleJoyrideCallback({
            type: "step:before",
            BelowNavHeader: true
            
        });
        // expect(wrapper).toMatchSnapshot();
}) 