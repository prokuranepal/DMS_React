import React from 'react';
import ChartCard from './ChartCard';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

const setup = (props = {}) => {
    return shallow( < ChartCard
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

const findByTestKey=(wrapper, val)=>{
    return wrapper.find(`[data-tests='${val}']`)
}

it("ChartCard",()=>{
    const wrapper= setup({children:[,]});
    expect(wrapper).toMatchSnapshot();
})

it("ChartCard props",()=>{
    const wrapper= setup({children:[<div data-test="child1-component"></div>, <div data-test="child2-component"></div>]});

    let child0= findByTestAttr(wrapper,'child1-component')
    let child1= findByTestAttr(wrapper,'child2-component')
    expect(child0).toHaveLength(1)
    expect(child1).toHaveLength(1)
    

})
