import testSnapFunction from '../../util/testSnapFunction';
import ToDoCard from './index'
import React from 'react';
const dummy_data={
data:[{id:1}, {id:2}]
}
testSnapFunction("<ToDoCard/>", "Snapshot test for ToDoCard",<ToDoCard {...dummy_data}/> )
