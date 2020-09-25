import React from 'react';
import CardMenu,{options} from './CardMenu';

import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const function_click=jest.fn()


const setup = (props = {}) => {
    return shallow( < CardMenu
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

const dummy_data={
    menuState:true,
     anchorEl:"hello", 
     handleRequestClose:function_click
}



{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
it("Renders CardMenu", () => {
    const wrapper= setup(dummy_data);   
    const container= findByTestAttr(wrapper, "container-component");
    expect(container).toHaveLength(1);

  
})
it("Renders CardMenu", () => {
    const wrapper= setup(dummy_data);   
    const container= findByTestAttr(wrapper, "container-component");
    expect(container).toHaveLength(1);
    options.map((option,index)=>{
        const menuItem=findByTestAttr(wrapper, `menu-component${index}`);
        expect(menuItem).toHaveLength(1);
        expect(menuItem.props().children).toEqual(option)
        menuItem.simulate('click');
        wrapper.update()
        expect(function_click).toHaveBeenCalledTimes(index+1)

    })


})