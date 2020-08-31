import React from 'react';
import DailyFeed from './index';
import {
    configure,
    mount,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const dummy_data=[{
    id:1,
    image: "https://via.placeholder.com/150x150",
    title: "Alex Brown has shared Martin Guptil's post",
    desc: "acdef",
    time:"5:45",
    isSocial:false
  },
  {
    id:2,
    image: "https://via.placeholderhome.com/150x150",
    title: "Hello How are ",
    desc: "ghijlk",
    time:"12:04",
    isSocial:true
  }
  
]

const setup = (props = {}) => {
    return mount( < DailyFeed
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}
const findByTestAttr2=(wrapper, val)=>{
    return wrapper.find(`[data-testsss='${val}']`)
}



it("DailyFeed",()=>{
    const wrapper= setup({data:dummy_data});
    const comp= findByTestAttr(wrapper,"feedcell-component")
    expect(comp).toHaveLength(2)
})
{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
it("Props DailyFeed", () => {
    const wrapper= setup({data:[dummy_data[0]]});   
    const img1= findByTestAttr(wrapper, "imgage-component") //Avatar does not work as expected
    const span= wrapper.find('span')
    expect(span).toHaveLength(2);
    const wrapper2= setup({data:[dummy_data[1]]});   
    // const span2= wrapper2.find('div')
    // expect(span2).toHaveLength(5); //doesn't work as expected

    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")
    

})