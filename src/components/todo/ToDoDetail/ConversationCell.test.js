import testSnapFunction from '../../../util/testSnapFunction';
import ConversationCell from './ConversationCell'
import React from 'react';
const dummy_data={
   conversation:{
       thumb:"thumbnail",
       name:"john",
       sentAt:"4:45",
       message:"hello how are"
   },
   todo:[{id:1, id:2, id:3}]
}
testSnapFunction("<ConversationCell/>", "Snapshot test for ConversationCell",<ConversationCell {...dummy_data}/> )
