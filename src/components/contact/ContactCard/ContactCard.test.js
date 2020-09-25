import React from 'react';
import ContactCard from './index';
import {
    configure,
    mount,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const function_click=jest.fn()

const dummy_data=[{
    name:"Frank",
    id:0,
    status:"online",
    thumb:"https://via.placeholder.com/93x9",
    lastMessage:"okk",
    unreadMessage:"what's up",
    lastMessageTime:"15:45 20 Aug,2020"
  },
  {name:"Robin",
  id:1,
  status:"offline",
  thumb:"https://via.placeholder.com/93x9",
  lastMessage:"bye",
  unreadMessage:"hi",
  lastMessageTime:"15:45 20 Aug,2020"
  }]

const setup = (props = {}) => {
    return mount( < ContactCard {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


it("ContactCard",()=>{
    const wrapper= setup({chatUsers:dummy_data, onSelectUser:function_click});
    expect(wrapper).toMatchSnapshot();
})
{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
it("Props and clicks for each component of ContactCard", () => {
    let arr= [];

    Object.keys(dummy_data).forEach(function(key) {
        arr.push(dummy_data[key].id);
    })
    let props={chatUsers:dummy_data, onSelectUser:function_click};
    const wrapper= setup(props);

    expect(wrapper.props()).toEqual(props)
        arr.map((component, index)=>{
            let current_data = {...props.chatUsers.filter(data => data.id === component)};
        const userCell = findByTestAttr(wrapper, `usercell-component${component}`)
        expect(userCell).toHaveLength(1)
        const userCellMounted = findByTestAttr(wrapper, `usercell-componentmounted${component}`);

        expect(userCell.props()).toEqual({chat: current_data[0], selectedSectionId:props.selectedSectionId, onSelectUser:props.onSelectUser,"data-test": `usercell-component${component}`, "identifier":component})
        userCellMounted.simulate('click')
         wrapper.update();
        expect(function_click).toHaveBeenCalledTimes(index+1)
        expect(function_click).toHaveBeenCalledWith(current_data[0])
    })
    })