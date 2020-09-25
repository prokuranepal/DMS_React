import React from 'react';
import ImsCard from './ImsCard';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


const setup = (props = {}, state = null) => {
    return (shallow( < ImsCard {...props}  />)
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


const dummy_data=
    {name:"8",
    type:{
        image:"image",
        name:"name",
        type:"type1"
    }}


describe('ImsCard />', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = setup(dummy_data)
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


it("ImsCard snapshot", () => {
        // let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();

  
})

it("ImsCard Components", () => {
    const linkComponent= findByTestAttr(wrapper,"link-component")
    const img = wrapper.find('img')
    const h3 = wrapper.find('h3')
    expect(linkComponent.prop('to').aboutProps).toEqual({type:"type1"})
    expect(img.prop("src")).toEqual("image")
    expect(img.prop("alt")).toEqual("name")
    expect(h3.text()).toEqual("name")


})
})
