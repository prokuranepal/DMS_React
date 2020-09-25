import {findByTestAttr} from '../../../util/testSnapFunction';
import MissionListItem from './MissionListItem'
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TestRenderer from 'react-test-renderer';
import TextField from '@material-ui/core/TextField';
import { MemoryRouter } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {act} from 'react-dom/test-utils';
import {configure,shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Radio from '@material-ui/core/Radio';

configure({
    adapter: new EnzymeAdapter
})
const createUser1Function= jest.fn()
const createUser2Function= jest.fn()
const setAlertFunction= jest.fn()

const dummy_data= {
mission:{
    title:"dharan-dhangadi",
    value:22,
    waypoints:[{lat:45, lng:54},{lat:43, lng:53},{lat:44, lng:55}],
    dist:33,
    ETA: 40
}
}

const preventDefault1= jest.fn();

// testSnapFunction("<MissionListItem />", "Snapshot test for MissionListItem ",<MissionListItem {...dummy_data}><div>dsjfM</div> </MissionListItem> )

describe('<MissionListItem />', () => {

    
  it("Events and props test in MissionListItem", () =>
        {
          const wrapper = shallow(<MissionListItem  {...dummy_data} /> )
            //  expect(wrapper.find(<div></div>)).toHaveLength(6)
            expect(wrapper.find(Radio)).toHaveLength(1)
            let missionTitle= findByTestAttr(wrapper, "missionTitle").at(0)
            let missionWaypoints= findByTestAttr(wrapper, "missionWaypoints").at(0)
            let missionEta= findByTestAttr(wrapper, "missionEta").at(0)
            let missionDistance= findByTestAttr(wrapper, "missionDistance").at(0)
            let missionValue= findByTestAttr(wrapper, "missionValue").at(0)
            expect(missionValue.props().value).toEqual(22);
            expect(missionTitle.text()).toEqual('dharan-dhangadi');
            expect(missionWaypoints.props().children).toEqual(['Waypoints:',[{lat:45, lng:54},{lat:43, lng:53},{lat:44, lng:55}]]);
            expect(missionDistance.text()).toEqual('Distance:33m');
            expect(missionEta.text()).toEqual('ETA:40mins');


})
        
            });

