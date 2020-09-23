import testSnapFunction from '../../util/testSnapFunction';
import ProductListItem from './ProductListItem';
import React from 'react';


const dummy_data={
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
testSnapFunction("<ProductListItem/>", "Snapshot test for ProductListItem",<ProductListItem {...dummy_data}/>)