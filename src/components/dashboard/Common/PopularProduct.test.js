import React from 'react';
import PopularProduct from './PopularProduct';

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
    return shallow( < PopularProduct
     {...props}  />
    )
}

export const dummy_data = { product:
    {image:"https://fhd.com/ere/350x350", title:"pfouct", description:"abc", offerPrice:3000, mrp:2000}}
 it("snapshot test PopularProduct", () => {
        let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();
}) 