import testSnapFunction,{findByTestAttr} from '../../../util/testSnapFunction';
import Button from './Button'
import React from 'react';
import {shallow } from 'enzyme';

const function_click=jest.fn();
testSnapFunction("<Button/>", "Snapshot test for Button",<Button /> )
it ("click and children" ,()=>{
    const wrapper = shallow(<Button onClick={function_click}>save</Button>);
    let button1 = findByTestAttr(wrapper,"button")
    button1.props().onClick();
    wrapper.update();
    expect(function_click).toHaveBeenCalledTimes(1)
    expect(button1.text()).toEqual("save")

})