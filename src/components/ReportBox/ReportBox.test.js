import testSnapFunction from '../../util/testSnapFunction';
import ReportBox from './index'
import React from 'react';
const dummy_data= {
 styleName:'style1', 
 icon:"icon1.png", 
 price:32, 
 detail:"no more details", 
}

testSnapFunction("<ReportBox />", "Snapshot test for ReportBox ",<ReportBox {...dummy_data}><div>dsjfM</div> </ReportBox> )