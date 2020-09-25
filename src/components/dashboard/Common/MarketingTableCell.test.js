import React from 'react';
import MarketingTableCell from './MarketingTableCell';

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
    return shallow( < MarketingTableCell
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}
export const dummy_data = { data:
    {id:1, name:"hello", desc:"abc", icon:"https://ff.com/df/350x350", color:'green', budget:3000, growth:"dk"}}

 it("snapshot test MarketingTableCell", () => {
        let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();
}) 