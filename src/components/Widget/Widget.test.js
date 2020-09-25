import testSnapFunction from '../../util/testSnapFunction';
import Widget from './index'
import React from 'react';
const dummy_data={
  title:"title",
  style:"style",
  children:"children",
  styleName:"style"
}
testSnapFunction("<Widget/>", "Snapshot test for Widget",<Widget {...dummy_data}/> )
