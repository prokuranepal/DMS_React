import testSnapFunction from '../../util/testSnapFunction';
import IconWithTextCard from './IconWithTextCard'
import React from 'react';
const dummy_data= {
   data:{ 
    cardColor:"blue", 
    value:6, 
    name:"name", 
    icon:"icon.png", 
    style:{width:1}
}
}

testSnapFunction("<itemSecond/>", "Snapshot test for ProductGridItem",<IconWithTextCard {...dummy_data}/> )