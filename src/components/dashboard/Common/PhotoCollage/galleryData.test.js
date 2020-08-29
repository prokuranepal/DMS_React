import React from 'react';
import GalleryData from './index';
import gallery from "./galleryData";

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
    return shallow( < GalleryData
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
it("Props GalleryData", () => {
    const wrapper= setup();   
    const container= findByTestAttr(wrapper, "container-component") 
    expect(container).toHaveLength(gallery.length);
    const image = findByTestAttr(wrapper, "image-component3")
    expect(image.props().src).toEqual("https://via.placeholder.com/500x350")
    expect(image.props().alt).toEqual("Olive oil")

})