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
const selectUserFunction = jest.fn();
const dummy_data={
onSelectUser:selectUserFunction,
selectedSectionId:"id1",
contactList:[{
    id:"id1",
    thumb:"thumbnail1",
    status:"active",
    name:"john",
    mood:"happy"
},
{
    id:"id2",
    thumb:"thumbnail2",
    status:"inactive",
    name:"shawn",
    mood:"confused"
},
{
    id:"id3",
    thumb:"thumbnail3",
    status:"active",
    name:"sam",
    mood:"sad"
}
]
}

const setup = (props = {}) => {
    return shallow( < ContactList
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
it("Snapshot ContactList", () => {
    let wrapper = setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected
    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")
    
})

it("Props ContactList", () => {
    let wrapper = setup(dummy_data);
    const userCellComp= findByTestAttr(wrapper,"userCellComp");
    expect(userCellComp).toHaveLength(3);
    expect(userCellComp.at(0).prop("user")).toEqual({
        id:"id1",
        thumb:"thumbnail1",
        status:"active",
        name:"john",
        mood:"happy"
    })
    expect(userCellComp.at(1).prop("user")).toEqual({
        id:"id2",
        thumb:"thumbnail2",
        status:"inactive",
        name:"shawn",
        mood:"confused"
    },
   )
    expect(userCellComp.at(2).prop("user")).toEqual({
        id:"id3",
        thumb:"thumbnail3",
        status:"active",
        name:"sam",
        mood:"sad"
    })
    expect(userCellComp.at(2).prop("selectedSectionId")).toEqual("id1")
   
    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected
    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")
    
})

it("Event Simulations ContactList", () => {
    let wrapper = setup(dummy_data);
    const userCellComp= findByTestAttr(wrapper,"userCellComp");
    userCellComp.at(0).props().onSelectUser();
    wrapper.update();
    expect(selectUserFunction).toHaveBeenCalledTimes(1);
    
})