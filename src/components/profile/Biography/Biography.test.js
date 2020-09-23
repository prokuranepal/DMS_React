import testSnapFunction from '../../../util/testSnapFunction';
import Biography from './index'
import React from 'react';
const dummy_data= {
   data:{
       title:"title",
       icon:"icon.png", 
       desc:"this is a description", 
       userList:[{id:1},{id:2}]
   }
}

testSnapFunction("<Biography />", "Snapshot test for Biography ",<Biography {...dummy_data}/> )