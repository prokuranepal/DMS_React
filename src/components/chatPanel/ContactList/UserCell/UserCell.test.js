import React from 'react';
import UserCell from './index';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const selectUserFunction = jest.fn();
const dummy_data={
onSelectUser:selectUserFunction,
selectedSectionId:"id1",
user:{
    id:"id1",
    thumb:"thumbnail1",
    status:"active",
    name:"john",
    mood:"happy"
}
}

const setup = (props = {}) => {
    return shallow( < UserCell
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}
const findByTestAttr2=(wrapper, val)=>{
    return wrapper.find(`[data-testsss='${val}']`)
}




{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
it("Snapshot UserCell", () => {
    let wrapper = setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected
    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")
    
})

it("Props UserCell", () => {
    let wrapper = setup(dummy_data);
    const imageComp= findByTestAttr(wrapper,"imageComp");
    expect(imageComp.prop("src")).toEqual("thumbnail1");
    const nameComp= findByTestAttr(wrapper,"nameComp");
    expect(nameComp.prop("children")).toEqual("john");
    const moodComp= findByTestAttr(wrapper,"moodComp");
    expect(moodComp.prop("children")).toEqual("happy...");
   
    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected
    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")
    
})

it("Event Simulations UserCell", () => {
    let wrapper = setup(dummy_data);
    const onClickComp= findByTestAttr(wrapper,"onClickComp");
    onClickComp.props().onClick();
    wrapper.update();
    expect(selectUserFunction).toHaveBeenCalledTimes(1);
    expect(selectUserFunction).toHaveBeenCalledWith({
        id:"id1",
        thumb:"thumbnail1",
        status:"active",
        name:"john",
        mood:"happy"
    });

})