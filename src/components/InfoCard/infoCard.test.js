import testSnapFunction from '../../util/testSnapFunction';
import InfoCard from './index'
import React from 'react';

const dummy_data={
    data:{
        color:"yello",
        icon:"icon",
        title:"title",
        subtitle:"subtitle"
    }
}
testSnapFunction("<InfoCard/>", "Snapshot test for PhroductGridItem",<InfoCard {...dummy_data}/> )