import React from 'react';
import OrderList from './OrderList';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const dummy_data= {
    data:{
    id:1, 
    orderId:"33432", 
    name:"Paracetamol", 
    image:"image", 
    orderDate:"5 Aug, 2020", 
    deliveryDate:"7 Aug, 2020", 
    from:"Dharan Hospital", 
    status:"pending"
}
}

const setup = (props = {}, state = null) => {
    return (shallow( < OrderList {...props}  />)
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}



describe('OrderList />', () => {
  
  afterEach(() => {
    jest.clearAllMocks();
  });


it("OrderList snapshot", () => {
    const wrapper = setup(dummy_data)

        // let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();

  
})

it("Link Component", () => {
    const wrapper = setup(dummy_data)

   const linkcomponent = findByTestAttr(wrapper, "link-component")
    expect(linkcomponent.text()).toEqual("");
})
it("Components test", () => {
    const wrapper = setup(dummy_data)

    const orderIdcomponent = findByTestAttr(wrapper, "orderId-component")
     expect(orderIdcomponent.text()).toEqual("33432");
     const imageComponent = findByTestAttr(wrapper, "image-component")
     expect(imageComponent.prop("src")).toEqual("image");
     expect(imageComponent.prop("alt")).toEqual("Paracetamol");
     const usernameComponent = findByTestAttr(wrapper, "username-component")
     expect(usernameComponent.text()).toEqual("Paracetamol");
     const orderdatecomponent = findByTestAttr(wrapper, "orderdate-component")
     expect(orderdatecomponent.text()).toEqual("5 Aug, 2020");
     const deliveryDate = findByTestAttr(wrapper, "deliverydate-component")
     expect(deliveryDate.text()).toEqual("7 Aug, 2020");
     const fromComponent = findByTestAttr(wrapper, "from-component")
     expect(fromComponent.text()).toEqual("Dharan Hospital");
 })

 it("IconButton test", () => {
    const wrapper = setup(dummy_data)

    const iconButton = findByTestAttr(wrapper, "iconbutton-component")
    const cardMenu = findByTestAttr(wrapper, "cardmenu-component")
    expect(cardMenu.prop("menuState")).toEqual(false)
    expect(cardMenu.prop("anchorEl")).toEqual(undefined)
    iconButton.props().onClick({currentTarget:"current"})
    wrapper.update()
    const cardMenu2 = findByTestAttr(wrapper, "cardmenu-component")
    expect(cardMenu2.prop("menuState")).toEqual(true)
    expect(cardMenu2.prop("anchorEl")).toEqual("current")
 })

 it("CardMenu test", () => {
     const wrapper = setup(dummy_data)
    const cardMenu = findByTestAttr(wrapper, "cardmenu-component")
    expect(cardMenu.prop("menuState")).toEqual(false)
    expect(cardMenu.prop("anchorEl")).toEqual(undefined)
    const linkcomponent = findByTestAttr(wrapper, "link-component")
    expect(linkcomponent.text()).toEqual("");
    cardMenu.props().handleRequestClose("Update Data")
    wrapper.update()
    const linkcomponent2 = findByTestAttr(wrapper, "link-component")
    expect(linkcomponent2.text()).toEqual("<Redirect />");
    const cardMenu2 = findByTestAttr(wrapper, "cardmenu-component")
    expect(cardMenu2.prop("menuState")).toEqual(false)
    
 })

})
