import React from 'react';
import UserList from './UserList';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const dummy_data={users:
    [{  id:1,
        name:"john",
        detail:"health assistant",
        about:"lives in new jersey", 
        image:"https://x.com/23/350/420", 
        color:"orange"},
        {
            id:2,
            name:"kennedy",
            detail:"doctor",
            about:"lives in new york", 
            image:"https://x.com/23/350/420", 
            color:"blue"
        },
        {
            id:3,
            name:"vince",
            detail:"health worker",
            about:"lives in seatle", 
            image:"https://x.com/23/350/420", 
            color:"red"
        }
]}

const setup = (props = {}) => {
    return shallow( < UserList
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}





it("snapshot projectcell", () => {
        let wrapper = setup(dummy_data);
        expect(wrapper).toMatchSnapshot();
}) 
it("Props UserList", () => {
    const wrapper= setup(dummy_data);   
    const user= findByTestAttr(wrapper, "user-component") 
    expect(user).toHaveLength(3);
    // expect(project.props().data).toEqual(dummy_data)

    

})