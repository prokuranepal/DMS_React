import React from 'react';
import EventItem from './EventItem';
import testSnapFunction from '../../../util/testSnapFunction';

const dummy_data={
  data:{  image:"image.png",
    title:"hello",
    date:"20 Nov, 2020",
    address:"kupondole"
}
}
testSnapFunction("<EventItem/>", "Snapshot test for PhroductGridItem",<EventItem {...dummy_data}/> )
