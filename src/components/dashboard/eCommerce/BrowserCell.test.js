import React from 'react';
import BrowserCell from './BrowserCell';
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
    return shallow( < BrowserCell {...props}  />
    )
}

// const findByTestAttr=(wrapper, val)=>{
//     return wrapper.find(`[data-test='${val}']`)
// }
let getContextFunction=jest.fn()
getContextFunction.mockReturnValue({
    stroke: "stroke",
});

const canvas={
    getContext:getContextFunction,

}
const dummy_props={
  browser:{
      id:"id1",
  image:"image1",
  title:"title1",
  subTitle: "subTitle1"
}}
describe("BrowserCell Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup(dummy_props);
    expect(wrapper).toMatchSnapshot()

})
it("Props",()=>{
    const wrapper= setup(dummy_props);
    // let avatarComp= findByTestAttr(wrapper,"avatarComp")
    let avatarComp = wrapper.find('[data-test="avatarComp"]')
    expect(avatarComp.prop('alt')).toEqual("title1")
    expect(avatarComp.prop('src')).toEqual("image1")
    let titleComp= wrapper.find('[data-test="titleComp"]')
    expect(titleComp.props().children).toEqual("title1")
    let subTitleComp= wrapper.find('[data-test="subTitleComp"]')
    expect(subTitleComp.props().children).toEqual("subTitle1")

})
})