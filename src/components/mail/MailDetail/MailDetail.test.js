import testSnapFunction from '../../../util/testSnapFunction';
import MailDetail from './index'
import React from 'react';

const dummy_data={
    mail:{
        starred:false,
        important:true,
        subject:"subject",
        from:{
            avatar:"avatar",
            name:"john",
            email:"john@gmail.com",

        },
        to:[{email:"sa@gmail.com"},{email:"bill@hotmail.com"}],
        time:"5:50pm",
        message:"hello how you doing",
        hasAttachments:[{preview:"preview1", filename:"file1", size:"size1"},
        {preview:"preview2", filename:"file2", size:"size2"},
        {preview:"preview3", filename:"file3", size:"size3"}],

    }, 
    onStartSelect:jest.fn(), 
    onImportantSelect:jest.fn(), 
    width:300

}
testSnapFunction("<MailDetail/>", "Snapshot test for PhroductGridItem",<MailDetail {...dummy_data}/> )