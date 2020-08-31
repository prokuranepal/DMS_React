import React from 'react';
import ProjectsCell from './ProjectsCell';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const dummy_data={data:{
    id:1,
    name: "Alex Brown has shared Martin Guptil's post",
    desc: "acdef",
    date:"22 Aug,2020",
    color:"green",
    status:"standby"
  }}

const setup = (props = {}) => {
    return shallow( < ProjectsCell
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}





it("snapshot projectcell", () => {
        let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();
}) 
it("Props ProjectCell", () => {
    const wrapper= setup(dummy_data);   
    const date= findByTestAttr(wrapper, "date-component") //Avatar does not work as expected
    const name= findByTestAttr(wrapper, "name-component")
    const badge= findByTestAttr(wrapper, "badge-component")
    expect(date).toHaveLength(1);
    expect(name.text()).toEqual("Alex Brown has shared Martin Guptil's post")
    expect(date.text()).toEqual("22 Aug,2020")
    expect(badge).toHaveLength(1);
    expect(date).toHaveLength(1);
    expect(badge.props().children).toEqual("standby")

    

})