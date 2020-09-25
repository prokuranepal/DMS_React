import React from 'react';
import MediaControlCard from './index';
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
    return shallow( < MediaControlCard {...props}  />
    ).dive()
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


it("Snapshot",()=>{
    const wrapper= setup({classes:{}});
    expect(wrapper).toMatchSnapshot();
})

it("Does not throw error with expected props",()=>{
    // const expectedProps={classes:"hello"}
    // const propError = checkPropTypes(MediaControlCard, "prop",expectedProps)
    const result = checkPropTypes(MediaControlCard.propTypes,{classes:{}}, 'prop', MediaControlCard.name);
    expect(result).toBe(undefined)

})


