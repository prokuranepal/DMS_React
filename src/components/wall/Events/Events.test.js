import React from 'react';
import Events from './index';
import testSnapFunction from '../../../util/testSnapFunction';
const dummy_data= {
    eventList:[{id:3},{id:1},{id:2},{id:4}]
}

testSnapFunction("<Events/>", "Snapshot test for PhroductGridItem",<Events {...dummy_data}/> )

