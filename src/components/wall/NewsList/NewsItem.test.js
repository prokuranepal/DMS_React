import React from 'react';
import NewsItem from './NewsItem';

const dummy_data={
   data:{
       image:"image.png",
       descriptio:"abcdef"
   }
}
import testSnapFunction from '../../../util/testSnapFunction';
testSnapFunction("<NewsItem/>", "Snapshot test for NewsItem",<NewsItem {...dummy_data}/> )
