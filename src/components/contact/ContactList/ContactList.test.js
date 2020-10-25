import React from 'react';
import ContactList from './index';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const contactSelectFunction=jest.fn();
const deleteContactFunction=jest.fn();
const addFavouriteFunction=jest.fn();
const onSaveContactFunction=jest.fn();
const dummy_data = {
   contactList:[{
       number:"981231232"
   },
   {
    number:"989938434"
},{
    number:"980032232"
}],
addFavourite:addFavouriteFunction,
onContactSelect:contactSelectFunction,
onDeleteContact:deleteContactFunction,
onSaveContact: onSaveContactFunction

}
const setup = (props = {}) => {
    return shallow( < ContactList
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
it("Snapshot ContactList", () => {
    let wrapper = setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected
    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")
    
})



it("Components ContactList", () => {
    let wrapper = setup(dummy_data);
    let contactCellComp = findByTestAttr(wrapper, "contactCellComp");;
    expect(contactCellComp).toHaveLength(3);
    expect(contactCellComp.at(0).prop('contact')).toEqual({ 
            number:"981231232"
    });
    expect(contactCellComp.at(1).prop('contact')).toEqual({
            number:"989938434"
});
expect(contactCellComp.at(2).prop('contact')).toEqual({
    number:"980032232"
});
contactCellComp.at(0).props().onSaveContact()
wrapper.update()
expect(onSaveContactFunction).toHaveBeenCalled();

contactCellComp.at(1).props().addFavourite()
wrapper.update()
expect(addFavouriteFunction).toHaveBeenCalled();

contactCellComp.at(2).props().onDeleteContact();
wrapper.update()
expect(deleteContactFunction).toHaveBeenCalled();

contactCellComp.at(0).props().onContactSelect()
wrapper.update()
expect(contactSelectFunction).toHaveBeenCalled();



})