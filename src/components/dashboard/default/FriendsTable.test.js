import React from 'react';
import FriendsTable from './FriendsTable';
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
    return shallow( < FriendsTable {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


describe("FriendsTable Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup();
    expect(wrapper).toMatchSnapshot()

})
it("Props",()=>{
    const wrapper= setup();
    let FriendsCell= wrapper.find('[data-test="FriendsCell"]')
    expect(FriendsCell).toHaveLength(4)
})
})