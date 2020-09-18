import React from 'react';
import PostList from './index';
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
    return (shallow( < PostList {...props}  />)
    )
}
const dummy_data={
    postList:[{id:2,  
        user:"user1", 
        date:"20 AUg, 2020",
         mediaList:[], viewCount:3, 
         likeCount:2, isLike:true, 
         commentList:[], text:"efdf"},
         {id:3,user:"user1", date:"20 AUg, 2020", mediaList:[],
          viewCount:3, likeCount:2, isLike:true, commentList:[], 
          text:"efdf"},{id:4,user:"user1", date:"20 AUg, 2020", 
          mediaList:[], viewCount:3, 
          likeCount:2, isLike:true, commentList:[], text:"efdf"}],
    user:"user1",
  
}
describe('<PostList />', () => {
  

it("PostList render", () => { 
        const wrapper= setup({...dummy_data});
        expect(wrapper).toMatchSnapshot();
  
})
})

