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



const setup = (props = {}) => {
    return shallow( < ChartCard
     {...props}  />
    )
}



 it("snapshot test chartcard", () => {
        let wrapper = setup({children:[<div></div>,<div></div>]});
        expect(wrapper).toMatchSnapshot();
}) 

it("Renders ChartCard", () => {
    const wrapper= setup({children:[<div></div>,<div></div>]});   
    const div= wrapper.find('div')
    expect(div).toHaveLength(4)

    })


