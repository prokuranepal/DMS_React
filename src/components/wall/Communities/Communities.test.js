import React from 'react';
import Communities from './index';
import testSnapFunction from '../../../util/testSnapFunction';

const dummy_data={
    communitiesList:[{title:"title1", image:"image1.png"},
    {title:"title1", image:"image1.png"}]
}

testSnapFunction("<Communities/>", "Snapshot test for PhroductGridItem",<Communities {...dummy_data}/> )
