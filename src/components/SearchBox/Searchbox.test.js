import testSnapFunction from '../../util/testSnapFunction';
import SearchBox from './index'
import React from 'react';
const dummy_data= {
 styleName:"style1", 
 placeholder:"search", 
 onChange:jest.fn(), 
 value:"value"
}

testSnapFunction("<SearchBox />", "Snapshot test for SearchBox ",<SearchBox {...dummy_data}><div>dsjfM</div> </SearchBox> )