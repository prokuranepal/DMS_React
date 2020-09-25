import testSnapFunction from '../../../util/testSnapFunction';
import AboutItem from './AboutItem'
import React from 'react';
const dummy_data= {
   data:{
       title:"title",
       icon:"icon.png", 
       desc:"this is a description", 
       userList:[{id:1},{id:2}]
   }
}

testSnapFunction("<AboutItem />", "Snapshot test for AboutItem ",<AboutItem {...dummy_data}/> )