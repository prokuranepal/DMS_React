import testSnapFunction from '../../../util/testSnapFunction';
import EventItem from './EventItem'
import React from 'react';
const dummy_data= {
   data:{
       title:"title",
      image:"image.png",
      address:"patan",
      date:"Nov 3, 2020"
   }
}

testSnapFunction("<EventItem />", "Snapshot test for EventItem ",<EventItem {...dummy_data}/> )