import React from 'react';
import PostList from './index';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


const setup = (props = {}) => {
    return shallow( < PostList
     {...props}  />
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

import testSnapFunction from '../../../util/testSnapFunction';
testSnapFunction("<PostList/>", "Snapshot test for PostList",<PostList {...dummy_data}/> )



describe("PostList",()=>{
    it("buttons",()=>{
        let wrapper = setup({postList:["1","2","3"], user:"user1"});
        let postComp = findByTestAttr(wrapper, "postComp");
        expect(postComp).toHaveLength(3)
        expect(postComp.at(1).prop('postData')).toEqual("2")

        let writeComp = findByTestAttr(wrapper, "writeComp");
        writeComp.props().addPost("comment1", ["image1", "image2"])

        expect(postComp.at(2).prop('postData')).toEqual("3")

    })
})