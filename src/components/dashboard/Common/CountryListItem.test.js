import React from 'react';
import CountryListItem from './CountryListItem';

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
    return shallow( < CountryListItem
     {...props}  />
    )
}


 it("snapshot test chartcard", () => {
        let wrapper = setup({country:{name:"usa",badge:"yellow"}});
        expect(wrapper).toMatchSnapshot();
}) 



