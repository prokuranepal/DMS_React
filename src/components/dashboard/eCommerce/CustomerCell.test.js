import React from 'react';
import CustomerCell from './CustomerCell';
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
    return shallow( < CustomerCell {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


const dummy_props={
  data:{id:"id1",
  image:"image1",
  name:"name1",
  order: "order1",
  userId:"user1"
  }
}
describe("CustomerCell Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup(dummy_props);
    expect(wrapper).toMatchSnapshot()

})
it("Props",()=>{
    const wrapper= setup({...dummy_props});
    let avatarComp= wrapper.find('[data-test="avatarComp"]')
    expect(avatarComp.prop('alt')).toEqual("name1")
    expect(avatarComp.prop('src')).toEqual("image1")
    let nameComp= wrapper.find('[data-test="nameComp"]')
    expect(nameComp.props().children).toEqual("name1")
    let userId= wrapper.find('[data-test="userId"]')
    expect(userId.props().children).toEqual("user1")

})
})