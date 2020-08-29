import React from 'react';
import ContainerHeader from './index';
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
    return shallow( < ContainerHeader {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


it("ContainerHeader",()=>{
    const wrapper= setup({title:"address", match:{path:"#hello.com/ht/docs/harry-potter"}});
    expect(wrapper).toMatchSnapshot();
})


const dummy_data ="#example.com/hello-ok/chelsea-club"

it("ContainerHeader props children",()=>{
    const wrapper= setup({title:"address", match:{path:dummy_data}});
    const breadCrumb = findByTestAttr(wrapper, "breadCrumb-component");
    const h2= wrapper.find('h2');
    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual("address");
    expect(breadCrumb).toHaveLength(3);

})