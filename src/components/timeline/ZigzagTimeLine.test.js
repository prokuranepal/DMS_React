import testSnapFunction from '../../util/testSnapFunction';
import ZigzagTimeLineItem from './ZigzagTimeLineItem'
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
testSnapFunction("<ZigzagTimeLineItem/>", "Snapshot test for ZigzagTimeLineItem",<ZigzagTimeLineItem {...dummy_data}/> )
