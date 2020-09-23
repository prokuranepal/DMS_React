import testSnapFunction from '../../../util/testSnapFunction';
import MailList from './index'
import React from 'react';

const dummy_data={
    mails:["hell@gmail","sa@gmail.com","g@hotmail.com"], 
    onMailSelect:jest.fn(),
     onMailChecked:jest.fn(), 
     onStartSelect:jest.fn(), 
     width:300}
testSnapFunction("<MailList/>", "Snapshot test for PhroductGridItem",<MailList {...dummy_data}/> )