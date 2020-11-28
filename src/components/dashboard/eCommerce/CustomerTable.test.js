import React from 'react';
import CustomerTable, {data, createData} from './CustomerTable';
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
    return shallow( < CustomerTable {...props}  />
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
describe("CustomerTable Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup(dummy_props);
    expect(wrapper).toMatchSnapshot()

})
it("Props",()=>{
    const wrapper= setup({...dummy_props});
    let avatarComp= wrapper.find('[data-test="customerCell"]')
    expect(avatarComp).toHaveLength(3)
    expect(avatarComp.at(2).prop('data')).toEqual({id:3, name:'Domnic Brown', userId:'Co-Founder', image:"https://via.placeholder.com/150x150", order:'0'})
    

    

})
})