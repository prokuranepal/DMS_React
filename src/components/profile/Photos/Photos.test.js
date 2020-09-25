import testSnapFunction from '../../../util/testSnapFunction';
import Photos from './index'
import React from 'react';
const dummy_data= {
photoList:[{image:"imageq.png"},{image:"image2.png"}]
}

testSnapFunction("<Photos />", "Snapshot test for Photos ",<Photos {...dummy_data}/> )