import testSnapFunction from '../../../util/testSnapFunction';
import AddNew from './index'
import React from 'react';
const dummy_data={
    onTodoAdd:jest.fn(), 
    onClose:jest.fn()
    , user:{
        email:"s@gmail.com",
        name:"sa",
        avatar:"avatar"
    }
}
testSnapFunction("<AddNew/>", "Snapshot test for AddNew",<AddNew {...dummy_data}/> )
