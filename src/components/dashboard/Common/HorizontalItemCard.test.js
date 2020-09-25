import React from 'react';
import HorizontalItemCard from './HorizontalItemCard';

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
    return shallow( < HorizontalItemCard
     {...props}  />
    )
}

// const findByTestAttr=(wrapper, val)=>{
//     return wrapper.find(`[data-test='${val}']`)
// }

 it("snapshot test chartcard", () => {
        let wrapper = setup();
        expect(wrapper).toMatchSnapshot();
}) 
// it("CountryListItem",()=>{

//     let wrapper = setup();
//     const menuItem=findByTestAttr(wrapper, `countrylist-comp`);
//     expect(menuItem).toHaveLength(countryList1.length+countryList2.length);
//     const chart=findByTestAttr(wrapper, `chart-component`);
//     expect(chart.props().data).toEqual(chartData);



// })