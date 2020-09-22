import testSnapFunction from '../../util/testSnapFunction';
import SaleBox from './index'
import React from 'react';
const dummy_data= {
    styleName:{width:2}, 
    headerStyle:{fontSize:3}, 
    itemStyle:{border:2}, 
    footerStyle:{color:"yellow"},
    heading:360, 
    title:"title", 
    detail:"detail1", 
    children:"children", 
    subHeadingColor:"black"
}

testSnapFunction("<SaleBox/>", "Snapshot test for PhroductGridItem",<SaleBox {...dummy_data}/> )