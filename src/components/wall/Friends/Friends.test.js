import React from 'react';
import Friends from './index';
import testSnapFunction from '../../../util/testSnapFunction';
const dummy_data={
    friendList:[{image:'image1.png', name:'name1', status:'online'},{image:'image1.png', name:'name1', status:'away'}]
}
testSnapFunction("<Friends/>", "Snapshot test for PhroductGridItem",<Friends {...dummy_data}/> )