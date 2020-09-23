import testSnapFunction from '../../../util/testSnapFunction';
import Alert from './Alert'
import React from 'react';


testSnapFunction("<Alert/>", "Snapshot test for Alert",<Alert alerts={["alert1","are you sure"]}/> )