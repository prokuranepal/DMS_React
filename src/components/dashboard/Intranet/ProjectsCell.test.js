import React from 'react';
import ProjectsCell from './ProjectsCell';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const dummy_data={
    data:{
        id:1,
        name:"name1",
        date: "4 dec, 2020",
        color:"gray",
        teamList:[{id:1, image:"image1"}, {id:2, image:"image2"}],
        progressValue:67
    }
}
const setup = (props = {}) => {
    return shallow( < ProjectsCell {...props}  />
    )
}


it("ProjectsCell",()=>{
    const wrapper= setup(dummy_data);
    expect(wrapper).toMatchSnapshot();
})