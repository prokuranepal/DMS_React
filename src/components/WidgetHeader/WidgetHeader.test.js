import testSnapFunction from '../../util/testSnapFunction';
import WidgetHeader from './index'
import React from 'react';
const dummy_data={
  title:"title",
  extra:"extra",
  styleName:"style"
}
testSnapFunction("<WidgetHeader/>", "Snapshot test for WidgetHeader",<WidgetHeader {...dummy_data}/> )
