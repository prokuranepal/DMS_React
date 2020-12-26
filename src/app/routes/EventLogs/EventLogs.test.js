import React from 'react';
import EventLogs,{rows} from './EventLogs';
import {
    configure,
    shallow,
    mount
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

describe('<EventLogs />', () => {
  let wrapper;


  beforeEach(() => {
 
  })

  afterEach(() => {
    jest.clearAllMocks();
  });
 

it("EventLogs snapshot", () => {
        // let wrapper = setup(dummy_data);
    wrapper = shallow( < EventLogs  />)

        expect(wrapper).toMatchSnapshot();

  
})
it("EventLogs snapshot", () => {
    // let wrapper = setup(dummy_data);
wrapper = shallow( < EventLogs  />)

let rowsComp=findByTestAttr(wrapper, "rowsComp")
expect(rowsComp).toHaveLength(rows.length)

})
})