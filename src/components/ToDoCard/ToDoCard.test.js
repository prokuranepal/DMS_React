import testSnapFunction from '../../util/testSnapFunction';
import ToDoCard from './index'
import React from 'react';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const switchLangFunction=jest.fn();
const requestCloseFunction = jest.fn();
const dummy_data={
    data:[{id:1,selected:true}, {id:2,selected:false}]
    }

const setup = (props = {}) => {
    return shallow( < ToDoCard
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
testSnapFunction("<ToDoCard/>", "Snapshot test for ToDoCard",<ToDoCard {...dummy_data}/> )

it("Props ToDoCard", () => {
    let wrapper = setup(dummy_data);
    const todoComp= findByTestAttr(wrapper,"todoComp");
    expect(todoComp).toHaveLength(2)
    expect(todoComp.at(1).prop("todo")).toEqual({id:2, selected:false})
    expect(todoComp.at(0).prop("todo")).toEqual({id:1,selected:true})

    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected
    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")
    
})

it("Event Simulations ToDoCard", () => {
    let wrapper = setup(dummy_data);
    const todoComp= findByTestAttr(wrapper,"todoComp");
    todoComp.at(0).props().onTodoChecked()
    wrapper.update();
    const todoComp1= findByTestAttr(wrapper,"todoComp");
    expect(todoComp1).toHaveLength(2)
    expect(todoComp1.at(0).prop("todo")).toEqual({id:1,selected:false})
    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected
    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")

})