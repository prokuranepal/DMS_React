import testSnapFunction from '../../util/testSnapFunction';
import ProductGridItem from './ProductGridItem'
import React from 'react';
const dummy_data={
    eventList:[{id:1, name:"event1"},{id:2, name:"event2"},{id:3, name:"event3"}],
    product:{
        thumb:"thumbnail",
        name:"product1",
        price: 75,
        mrp: 80,
        offer:78,
        variant:"black",
        rating:5,
        description:"very good"
    }
}
testSnapFunction("<ProductGridItem/>", "Snapshot test for ProductGridItem",<ProductGridItem {...dummy_data}/> )
