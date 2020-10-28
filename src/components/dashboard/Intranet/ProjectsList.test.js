import React from 'react';
import ProjectsList from './ProjectsList';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { mockAvatar } from '../../../util/testSnapFunction';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const dummy_data={
    data:[{id:1, data:'data1'},{id:2, data:'data2'}]
}
const setup = (props = {}) => {
    return shallow( < ProjectsList {...props}  />
    )
}

mockAvatar();
it("ProjectsList",()=>{
    const wrapper= setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
})