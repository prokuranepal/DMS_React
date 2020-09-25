import testSnapFunction from '../../util/testSnapFunction';
import ItemThird from './ItemThird'
import React from 'react';
const dummy_data= {
    styleName:{width:2}, 
    headerStyle:{fontSize:3}, 
    itemStyle:{border:2}, 
    footerStyle:{color:"yellow"}
}

testSnapFunction("<itemThird/>", "Snapshot test for PhroductGridItem",<ItemThird {...dummy_data}/> )