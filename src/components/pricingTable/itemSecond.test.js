import testSnapFunction from '../../util/testSnapFunction';
import ItemSecond from './ItemSecond'
import React from 'react';
const dummy_data= {
    styleName:{width:2}, 
    headerStyle:{fontSize:3}, 
    itemStyle:{border:2}, 
    footerStyle:{color:"yellow"}
}

testSnapFunction("<itemSecond/>", "Snapshot test for PhroductGridItem",<ItemSecond {...dummy_data}/> )