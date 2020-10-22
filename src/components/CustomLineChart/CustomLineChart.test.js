import React from 'react';
import CustomLineChart from './index';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { exportAllDeclaration, jsxEmptyExpression } from '@babel/types';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const setup = (props = {}) => {
    return shallow( < CustomLineChart {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}
let getContextFunction=jest.fn()
getContextFunction.mockReturnValue({
    stroke: "stroke",
});

const canvas={
    getContext:getContextFunction,

}
const dummy_props={
    labels:"value",
    label:"d",
    borderColor:"red",
    chartData:[2],
    pointBackgroundColor:"black",
    height:2,
    pointBorderColor:"black",
    borderWidth:2,
    shadowColor:"black",
    pointBorderWidth:2,
    lineTension:2,
    pointRadius:2,
    pointHoverBorderColor:"gray",
    gridLinesDisplay:true,
    gridLineWidth:2
}
it("Renders without error",()=>{
    const wrapper= setup(dummy_props);
    const line_comp = findByTestAttr(wrapper, 'line-component');
    expect(line_comp).toHaveLength(1)
    line_comp.props().data(canvas)

})