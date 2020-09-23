import React from 'react';
import Photos from './index';

const dummy_data={
    photoList:[{image:"a,bs"},{image:"sdfd"}],
    title:"photoTitle"
}
import testSnapFunction from '../../../util/testSnapFunction';
testSnapFunction("<Photos/>", "Snapshot test for Photos",<Photos {...dummy_data}/> )
