import React from 'react';
import Statistics from './Statistics';
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
    return shallow( < Statistics {...props}  ></Statistics>
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

describe("Statistics Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup();
    expect(wrapper).toMatchSnapshot()

})

it("Props Statistics", () => {
    const wrapper= setup();   
    let value0= findByTestAttr(wrapper, "value0Comp")
    let value1= findByTestAttr(wrapper, "value1Comp") 
    let value2= findByTestAttr(wrapper, "value2Comp") 
    const clickComp= findByTestAttr(wrapper, "clickComp")     
    expect(value0).toHaveLength(1);
    expect(value1).toHaveLength(0);
    expect(value2).toHaveLength(0);
    clickComp.props().onClick(1)
    wrapper.update()
    value1= findByTestAttr(wrapper, "value1Comp") 
    expect(value1).toHaveLength(1);
    clickComp.props().onClick(2)
    wrapper.update()
    value2= findByTestAttr(wrapper, "value2Comp") 
    expect(value2).toHaveLength(1);

    
})
})