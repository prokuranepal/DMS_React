import React from 'react';
import NewsList from './index';

const dummy_data={
    newsList: [{id:3},{id:1},{id:2}]
}
import testSnapFunction from '../../../util/testSnapFunction';
testSnapFunction("<NewsList/>", "Snapshot test for NewsList",<NewsList {...dummy_data}/> )
