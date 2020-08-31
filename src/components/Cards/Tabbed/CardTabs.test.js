import React from 'react';
import CardTabs,{TabContainer} from './CardTabs';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { checkPropTypes } from 'prop-types';

// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


const setup = (props = {}) => {
    return shallow( < CardTabs {...props}  />).dive()
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


it("RecipeReview snapshot",()=>{
    const wrapper= setup();
    expect(wrapper).toMatchSnapshot();
})

it("SwipeableViews",()=>{
    const wrapper = setup();
    let swipeButtonComponent=findByTestAttr(wrapper,"swipe-component")
    // console.log(swipeButtonComponent.props())
    expect(swipeButtonComponent.prop('index')).toEqual(0)
    swipeButtonComponent.props().onChangeIndex(3);   
    wrapper.update()

    const swipeButtonComponent2= findByTestAttr(wrapper,"swipe-component")
    expect(swipeButtonComponent2.prop("index")).toEqual(3)
})


it("tabableViews",()=>{
    const wrapper = setup();
    let tabButtonComponent=findByTestAttr(wrapper,"tab-component")
    // console.log(tabButtonComponent.props())
    expect(tabButtonComponent.prop('value')).toEqual(0)
    tabButtonComponent.props().onChange("event",3);   
    wrapper.update()

    const tabButtonComponent2= findByTestAttr(wrapper,"tab-component")
    expect(tabButtonComponent2.prop("value")).toEqual(3)
})
it("Does not throw error with expected props",()=>{
    // const expectedProps={classes:"hello"}
    // const propError = checkPropTypes(MediaControlCard, "prop",expectedProps)
const result = checkPropTypes(TabContainer.propTypes,{dir:"helo",children:<div></div>}, 'prop', TabContainer.name);
    expect(result).toBe(undefined)

})

it("TabContainer",()=>{
    const props= {dir:"helo",children:<span></span>};
    const wrapper = shallow( < TabContainer  {...props} />)
    const div= wrapper.find('div')
    const span = wrapper.find('span');
    expect(div.props().dir).toEqual("helo")
    expect(span).toHaveLength(1)
})
