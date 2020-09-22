import testSnapFunction from '../../../util/testSnapFunction';
import ToDoItem from './index'
import React from 'react';
const dummy_data={
todo:{
    selected:true,
    notes:"notes"
},
onToDoChecked:jest.fn()
}
testSnapFunction("<ToDoItem/>", "Snapshot test for ToDoItem",<ToDoItem {...dummy_data}/> )
