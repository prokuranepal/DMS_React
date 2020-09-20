import React from 'react';
import GridImage from './GridImage';

const dummy_data={
    mediaList:[{image:2},{image:3},{image:4}],
    handleToggle:jest.fn()
}
import testSnapFunction from '../../../util/testSnapFunction';
testSnapFunction("<GridImage/>", "Snapshot test for GridImage",<GridImage {...dummy_data}/> )
