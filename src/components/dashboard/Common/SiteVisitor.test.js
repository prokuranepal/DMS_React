import React from 'react';
import SiteVisitor from './SiteVisitor';
import {countryList1} from "./country_routes";

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
    return shallow( < SiteVisitor
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

 it("snapshot test chartcard", () => {
        let wrapper = setup();
        expect(wrapper).toMatchSnapshot();
}) 
it("CountryListItem",()=>{

    let wrapper = setup({children:<div data-test="children1"></div>});
    const menuItem=findByTestAttr(wrapper, `countrylist-component`);
    expect(menuItem).toHaveLength(countryList1.length);

    const children=findByTestAttr(wrapper, `children1`);
    expect(children).toHaveLength(1);


})