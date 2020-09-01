import React from 'react';
import LineChartMain from './LineChartMain';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const setup = (props = {}) => {
    return shallow( < LineChartMain {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


it("LineChartMain",()=>{
    const wrapper= setup({data:[2,3,4], height:300});
    expect(wrapper).toMatchSnapshot();
})

it("LineChartMain props",()=>{
    const wrapper= setup({"data":[2,3,4], height:300});
    // let child0= findByTestAttr(wrapper, 'child0')
    let child1= findByTestAttr(wrapper, 'linechart-component')
    expect(child1).toHaveLength(1)
    expect(child1.props("data").data).toEqual([2,3,4])
})

it("LineChartMain props",()=>{
    const wrapper= setup({"data":[2,3,7], height:300});
    // let child0= findByTestAttr(wrapper, 'child0')
    let child1= findByTestAttr(wrapper, 'linechart-component')
    let child2= findByTestAttr(wrapper, 'responsive-component')
    expect(child1.props("data").data).toEqual([2,3,7])
    expect(child1).toHaveLength(1)
    expect(child2.props("data").height).toEqual(300)
})