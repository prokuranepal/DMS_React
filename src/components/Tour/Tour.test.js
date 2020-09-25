import testSnapFunction from '../../util/testSnapFunction';
import Widget from './index'
import React from 'react';
const dummy_data={
joyRide:"joyRide"
}
testSnapFunction("<Widget/>", "Snapshot test for Widget",<Widget {...dummy_data}/> )
