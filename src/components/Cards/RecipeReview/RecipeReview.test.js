import React from 'react';
import RecipeReviewCard from './index';
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
    return shallow( < RecipeReviewCard {...props}  />).dive()
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


it("RecipeReview snapshot",()=>{
    const wrapper= setup();
    expect(wrapper).toMatchSnapshot();
})

it("RecipeReviewCard",()=>{
    const wrapper = setup({classes:{}});
    let iconButtonComponent=findByTestAttr(wrapper,"icon-component")
    // console.log(iconButtonComponent.props())
    expect(iconButtonComponent.prop('aria-expanded')).toEqual(false)
    iconButtonComponent.props().onClick();   
    wrapper.update()

    const iconButtonComponent2= findByTestAttr(wrapper,"icon-component")
    expect(iconButtonComponent2.prop("aria-expanded")).toEqual(true)
})


it("Does not throw error with expected props",()=>{
    // const expectedProps={classes:"hello"}
    // const propError = checkPropTypes(MediaControlCard, "prop",expectedProps)
    const result = checkPropTypes(RecipeReviewCard.propTypes,{classes:{}}, 'prop', RecipeReviewCard.name);
    expect(result).toBe(undefined)

})