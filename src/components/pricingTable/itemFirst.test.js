import testSnapFunction from '../../util/testSnapFunction';
import ItemFirst from './ItemFirst'
import React from 'react';
const dummy_data= {
    styleName:{width:2}, 
    headerStyle:{fontSize:3}, 
    itemStyle:{border:2}, 
    footerStyle:{color:"yellow"}
}

testSnapFunction("<itemFirst/>", "Snapshot test for PhroductGridItem",<ItemFirst {...dummy_data}/> )