import React from 'react';
import PostItem,{new_date} from './PostItem';
import {
    configure,
    mount,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
import {act} from 'react-dom/test-utils';

configure({
    adapter: new EnzymeAdapter
})


const setup = (props = {}) => {
    return mount( < PostItem
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}
const user_dummy={name:"user1", image:"image1"}
const dummy_data={
    postData:{id:2,  
        user:user_dummy, 
        date:"20 AUg, 2020",
         mediaList:[], viewCount:3, 
         likeCount:2, isLike:true,
        commentList:[{user:user_dummy, isLike:true, date:"26 Nov", comment:"comment1"},{user:{name:"user7", image:"image7"}, isLike:false, date:"26 Nov", comment:"comment2"}]}, 
        //  commentList:[{id:1, comment:"comment1"},{id:2, comment:"comment2"}], text:"efdf"},
        //  {id:3,user:{name:"user3", image:"image3"}, date:"20 AUg, 2020", mediaList:[],
        //   viewCount:3, likeCount:2, isLike:true, commentList:[], 
        //   text:"efdf"},{id:4,user:{name:"user4", image:"image4"}, date:"20 AUg, 2020", 
        //   mediaList:[], viewCount:3, 
        //   likeCount:2, isLike:true, commentList:[], text:"efdf"}],
    user:{name:"user1", image:"image1"},
}
import testSnapFunction from '../../../util/testSnapFunction';
import { exportAllDeclaration } from '@babel/types';
testSnapFunction("<PostItem/>", "Snapshot test for PostItem",<PostItem {...dummy_data}/> )


describe("PostItem",()=>{
    it("buttons",()=>{
        let wrapper = setup({...dummy_data});
        
        let commentListComp = findByTestAttr(wrapper, "commentListComp").at(0);
        let inputComp = findByTestAttr(wrapper, "inputComp").at(1)
        expect(commentListComp.prop('commentData')).toEqual({ "comment": "comment1",
           "date": "26 Nov",
           "isLike": true,
           "user": {
             "image": "image1",
             "name": "user1"}})
        expect(inputComp.prop('value')).toEqual("")
        act(() => {inputComp.props().onKeyPress({key:"Enter"})})
        wrapper.update()
        commentListComp = findByTestAttr(wrapper, "commentListComp").at(2);
        expect(commentListComp.prop('commentData')).toEqual({
            "comment": "",
       "commentList": [],
       "date": new_date,
       "isLike": true,
       "likeCount": 0,
       "user": {
         "image": "image1",
         "name": "user1",
        }})
        inputComp = findByTestAttr(wrapper, "inputComp").at(0)
        expect(inputComp.prop('value')).toEqual("")

        act(() => {inputComp.props().onChange({target:{value:"newValue"}})});
        wrapper.update()
        inputComp = findByTestAttr(wrapper, "inputComp").at(0)
        expect(inputComp.prop('value')).toEqual("newValue")

    })
})