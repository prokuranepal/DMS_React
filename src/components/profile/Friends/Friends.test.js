import testSnapFunction from '../../../util/testSnapFunction';
import Friends from './index'
import React from 'react';
const dummy_data= {
friendList:[{image:"imageq.png", status:"online", name:"friend1"},{image:"image2.png", status:"offline", name:"friend2"}]
}
const dummy_data2= {
    friendList:[{image:"imageq.png", status:"away", name:"friend1"},{image:"image2.png", status:"offline", name:"friend2"}]
    }
const dummy_data3= {
    friendList:[{image:"imageq.png", status:"unknown", name:"friend1"},{image:"image2.png", status:"offline", name:"friend2"}]
    }
testSnapFunction("<Friends />", "Snapshot test for Friends ",<Friends {...dummy_data}/> )
testSnapFunction("<Friends />", "Snapshot test for Friends ",<Friends {...dummy_data2}/> )
testSnapFunction("<Friends />", "Snapshot test for Friends ",<Friends {...dummy_data3}/> )
