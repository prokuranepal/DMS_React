import testSnapFunction from '../../util/testSnapFunction';
import StatBox from './index'
import React from 'react';
const dummy_data= {
types:"type 1"
}

testSnapFunction("<StatBox />", "Snapshot test for StatBox ",<StatBox {...dummy_data}><div>dsjfM</div> </StatBox> )