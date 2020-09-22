import testSnapFunction from '../../../util/testSnapFunction';
import ToDoDetail from './index'
import React from 'react';
const dummy_data={
    onToDoUpdate:jest.fn(), 
    onLabelUpdate:jest.fn(), 
    onDeleteToDo:jest.fn(), 
    width:300, 
    user:{
        email:"s@gmail.com",
        name:"sa",
        avatar:"avatar"
    }
    , todo:[{id:1, id:2, id:3}]
}
testSnapFunction("<ToDoDetail/>", "Snapshot test for ToDoDetail",<ToDoDetail {...dummy_data}/> )
