import React from 'react';
import LanguageItem from './LanguageItem';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const switchLangFunction=jest.fn();
const requestCloseFunction = jest.fn();
const dummy_data={
language:{
    icon:"icon1",
    name:"english"
},
switchLanguage:switchLangFunction,
handleRequestClose:requestCloseFunction
}

const setup = (props = {}) => {
    return shallow( < LanguageItem
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}
const findByTestAttr2=(wrapper, val)=>{
    return wrapper.find(`[data-testsss='${val}']`)
}




{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
it("Snapshot LanguageItem", () => {
    let wrapper = setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected
    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")
    
})

it("Props LanguageItem", () => {
    let wrapper = setup(dummy_data);
    const languageName= wrapper.find("h4");
    expect(languageName.text()).toEqual("english")
    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected
    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")
    
})

it("Event Simulations LanguageItem", () => {
    let wrapper = setup(dummy_data);
    const liClick= findByTestAttr(wrapper,"liClick");
    liClick.props().onClick();
    wrapper.update();
    expect(requestCloseFunction).toHaveBeenCalled();
    expect(switchLangFunction).toHaveBeenCalledWith({
        icon:"icon1",
        name:"english"
    });

    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected
    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")

})