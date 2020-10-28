import React from 'react';
import ContactCell from './index';
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
const addFavouriteFunction=jest.fn();
const onSaveContactFunction=jest.fn();
const onDeleteContactFunction=jest.fn();
const dummy_data = {
   contact:{
       name:"john",
       thumb:"thumbnail1",
       email:"john@gmail.com",
       phone:"984282033",
       designation:"ceo",
       starred:true,
       selected:false
   },
addFavourite:addFavouriteFunction,
onContactSelect:contactSelectFunction,
onSaveContact: onSaveContactFunction,
onDeleteContact:onDeleteContactFunction
}
const setup = (props = {}) => {
    return shallow( < ContactCell
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
it("Snapshot ContactCell", () => {
    let wrapper = setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected
    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")
    
})



it("Components ContactCell", () => {
    let wrapper = setup(dummy_data);
    let checkBoxComp = findByTestAttr(wrapper, "checkBoxComp");;
    expect(checkBoxComp.prop('checked')).toBe(false);
    checkBoxComp.props().onClick();
    wrapper.update()
    expect(contactSelectFunction).toHaveBeenCalled()
    expect(contactSelectFunction).toHaveBeenCalledWith({ name:"john",
    thumb:"thumbnail1",
    email:"john@gmail.com",
    phone:"984282033",
    designation:"ceo",
    starred:true,
    selected:false})
    let iconButtonComp = findByTestAttr(wrapper, "iconButtonComp");;
    iconButtonComp.props().onClick()
    wrapper.update()
    expect(addFavouriteFunction).toHaveBeenCalledWith(
        { name:"john",
    thumb:"thumbnail1",
    email:"john@gmail.com",
    phone:"984282033",
    designation:"ceo",
    starred:true,
    selected:false}
    )
    let noThumbComp = findByTestAttr(wrapper, "noThumbComp");
    expect(noThumbComp).toHaveLength(0)
    let thumbComp = findByTestAttr(wrapper, "thumbComp");
    expect(thumbComp.prop('src')).toEqual("thumbnail1")
    let nameComp = findByTestAttr(wrapper, "nameComp");
    expect(nameComp.text()).toEqual("john")
    let designationComp = findByTestAttr(wrapper, "designationComp");
    expect(designationComp.text()).toEqual("ceo")
    let emailComp = findByTestAttr(wrapper, "emailComp");
    expect(emailComp.text()).toEqual("john@gmail.com")
    let iconButton2 = findByTestAttr(wrapper, "iconButtonComp2");
    let menuComp = findByTestAttr(wrapper, "menuComp");
    expect(menuComp.prop('anchorEl')).toEqual(undefined)
    expect(menuComp.prop('open')).toEqual(false)

   
    iconButton2.props().onClick({currentTarget:"target1"})
    let menuComp1 = findByTestAttr(wrapper, "menuComp");;
    expect(menuComp1.prop('anchorEl')).toEqual("target1")
    expect(menuComp1.prop('open')).toEqual(true)
    menuComp1.props().onClose()
    wrapper.update()
    let menuComp2 = findByTestAttr(wrapper, "menuComp");;
    expect(menuComp2.prop('open')).toEqual(false)
    let menuItemComp = findByTestAttr(wrapper, "menuItemComp");;
    expect(menuItemComp).toHaveLength(2)
    expect(menuItemComp.at(0).text()).toEqual('Edit')
    let addContactComp = findByTestAttr(wrapper, "addContactComp");;
    expect(addContactComp).toHaveLength(0)
    menuItemComp.at(0).props().onClick();
    wrapper.update()
    let addContactComp1 = findByTestAttr(wrapper, "addContactComp");;
    expect(addContactComp1).toHaveLength(1)
    addContactComp1.props().onSaveContact();
    expect(onSaveContactFunction).toHaveBeenCalled()
    addContactComp1.props().onDeleteContact();
    expect(onDeleteContactFunction).toHaveBeenCalled()
    addContactComp1.props().onContactClose();
    wrapper.update()
    let addContactComp2 = findByTestAttr(wrapper, "addContactComp");;
    expect(addContactComp2).toHaveLength(0)
    expect(menuItemComp.at(1).text()).toEqual('Delete')
    menuItemComp.at(1).props().onClick();
    wrapper.update()
    let menuComp3 = findByTestAttr(wrapper, "menuComp");;
    expect(menuComp3.prop('open')).toEqual(false)
    expect(onDeleteContactFunction).toHaveBeenCalledTimes(2)

})