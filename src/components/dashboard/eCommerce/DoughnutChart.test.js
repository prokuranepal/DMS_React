import React from 'react';
import DoughnutChart, {data, createData} from './DoughnutChart';
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
    return shallow( < DoughnutChart {...props}  />
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
describe("DoughnutChart Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup(dummy_props);
    expect(wrapper).toMatchSnapshot()

})
it("Props",()=>{
    
    let dummy_data={
        getContext:(param)=>{
            switch(param){
                case('2d'):
                return {
                   stroke:{apply:jest.fn()},
                    save:jest.fn(),
                    shadowColor: "dfd",
                    shadowOffsetX:9,
                    shadowOffsetY:1,
                    restore:jest.fn()
                }
            }
        }
    }
    data({...dummy_data});
})
})