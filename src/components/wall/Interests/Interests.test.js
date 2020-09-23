import React from 'react';
import Interests from './index';
import testSnapFunction from '../../../util/testSnapFunction';

const dummy_data={
    interestList:[{id:"1", interest:"interest1"},
    {id:"2", image:"interest2"}]
}

testSnapFunction("<Interests/>", "Snapshot test for Interests",<Interests {...dummy_data}/> )
