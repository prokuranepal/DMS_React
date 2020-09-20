import React from 'react';
import PostList from './index';

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
