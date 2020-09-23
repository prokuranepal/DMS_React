import testSnapFunction from '../../util/testSnapFunction';
import DefaulttimeLineItem from './DefaultTimeLineItem'
import React from 'react';
const dummy_data={
   styleName:"style1",
   timeLine:{
    time:"5:45pm",
     title:"title", 
     image:"image1.png", 
     description:"abcde"
   }
}
testSnapFunction("<DefaulttimeLineItem/>", "Snapshot test for DefaulttimeLineItem",<DefaulttimeLineItem {...dummy_data}/> )
