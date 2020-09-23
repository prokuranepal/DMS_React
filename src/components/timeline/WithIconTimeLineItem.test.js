import testSnapFunction from '../../util/testSnapFunction';
import WithIconTimeLineItem from './WithIconTimeLineItem'
import React from 'react';
const dummy_data={
   styleName:"style1",
   timeLine:{
    time:"5:45pm",
     title:"title", 
     image:"image1.png", 
     description:"abcde"
   },
   color:"yellow",
   children:"children"
}
testSnapFunction("<WithIconTimeLineItem/>", "Snapshot test for WithIconTimeLineItem",<WithIconTimeLineItem {...dummy_data}/> )
