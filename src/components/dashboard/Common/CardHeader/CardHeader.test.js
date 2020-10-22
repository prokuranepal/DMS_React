import React from 'react';
import CardHeader from './index';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const dummy_data={
    heading:"heading",
    subHeading:"subHeading",
    styleName:{font:"black"}
}

const setup = (props = {}) => {
    return shallow( < CardHeader
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
it("Props CardHeader", () => {
    let wrapper = setup(dummy_data);
    const headingComp= findByTestAttr(wrapper,"headingComp");
    expect(headingComp.text()).toEqual("heading");  
    const subHeadingComp= findByTestAttr(wrapper,"subHeading");
    expect(subHeadingComp.text()).toEqual("subHeading");

    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected

    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")
    

})

it("Event Simulations CardHeader", () => {
    let wrapper = setup(dummy_data);
    const iconButton= findByTestAttr(wrapper,"iconButton");
    const cardMenu= findByTestAttr(wrapper,"cardMenu");
    expect(cardMenu.prop('menuState')).toEqual(false)
    expect(cardMenu.prop('anchorEl')).toEqual(undefined)
    iconButton.props().onClick({currentTarget:"target1"});
    wrapper.update();
    let cardMenu1= findByTestAttr(wrapper,"cardMenu");
    expect(cardMenu1.prop("menuState")).toEqual(true)
    expect(cardMenu1.prop("anchorEl")).toEqual("target1")
    cardMenu.props().handleRequestClose();
    wrapper.update();
    let cardMenu2= findByTestAttr(wrapper,"cardMenu");
    expect(cardMenu2.prop("menuState")).toEqual(false)

    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected
    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")

})