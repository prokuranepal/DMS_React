// import React from 'react';
// import radar , {data, shadowed} from './radar';
// import {
//     configure,
//     shallow,
// } from 'enzyme';
// import EnzymeAdapter from 'enzyme-adapter-react-16';
// // JestHook.mock('expo-font');
// configure({
//     adapter: new EnzymeAdapter
// })

// const dummy_data={
    
// }
// const setup = (props = {}) => {
//     return shallow( < radar {...props}  />
//     )
// }

// const findByTestAttr=(wrapper, val)=>{
//     return wrapper.find(`[data-test='${val}']`)
// }


// describe("radar Comp",()=>{
// it("Snapshot",()=>{
//     const wrapper= setup();
//     expect(wrapper).toMatchSnapshot()


// })
// it("props",()=>{
//     let getContextFunction= jest.fn()
//     let createLinearGradientFunction = jest.fn()
//     let addColorStopFunction= jest.fn()
//     createLinearGradientFunction.mockReturnValue({
//         addColorStop:()=>addColorStopFunction()
//     })
//     let dummy_data={
//         getContext:(param)=>{
//             switch(param){
//                 case('2d'):
//                 return {
//                     createLinearGradient: createLinearGradientFunction
//                 }
//             }
//         }
//     }
//     const wrapper= setup();
//     let radarComp = findByTestAttr(wrapper, "radarComp")
//     // radarComp.props.data(dummy_data)
//     data({...dummy_data})
//     expect(createLinearGradientFunction).toHaveBeenCalledTimes(4)
//     expect(addColorStopFunction).toHaveBeenCalledTimes(8)

// })
// })