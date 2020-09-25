import React from 'react';
import PostItem from './PostItem';

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
testSnapFunction("<PostItem/>", "Snapshot test for PostItem",<PostItem {...dummy_data}/> )
