import {findByTestAttr} from '../../util/testSnapFunction';
import MissionList from './MissionList'
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TestRenderer from 'react-test-renderer';
import MissionListItem from './MissionListItem/MissionListItem';
import CustomScrollbars from '../../util/CustomScrollbars';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {act} from 'react-dom/test-utils';
import RadioGroup from '@material-ui/core/RadioGroup';

import {configure,mount} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';

const mockStore = configureStore([]);
configure({
    adapter: new EnzymeAdapter
})
const abort1= jest.fn()
const selectValue1= jest.fn()

const dummy_data= {
abort:abort1,
select:selectValue1
}
const preventDefault1= jest.fn();

// testSnapFunction("<MissionList />", "Snapshot test for MissionList ",<MissionList {...dummy_data}><div>dsjfM</div> </MissionList> )

describe('<MissionList />', () => {

    let store;
 
    beforeEach(() => {
      store = mockStore({
         mission:{
              missions:[{missionId:1,data:{}},{missionId:2,data:{}}]
         }
      });
      store.dispatch=jest.fn();
    });
 
    afterEach(() => {
        jest.clearAllMocks();
      });
    
  it("Events and props test in MissionList", () =>
        {
          const wrapper = mount(<Provider store={store}><MissionList  {...dummy_data} /> </Provider>)
             wrapper.update()
             expect(wrapper.find(FormControl)).toHaveLength(1)
            expect(wrapper.find(RadioGroup)).toHaveLength(1)
            expect(wrapper.find(CustomScrollbars)).toHaveLength(1)
            expect(wrapper.find(MissionListItem)).toHaveLength(2)
            expect(store.dispatch).toHaveBeenCalled()
            let abortButton= findByTestAttr(wrapper, "abortButton").at(0)
            let selectButton= findByTestAttr(wrapper, "selectButton").at(0)
            let missionList= findByTestAttr(wrapper, "missionList")
            let radioGroup= findByTestAttr(wrapper, "radioGroup").at(0)
            expect(wrapper.find(RadioGroup).at(0).props().value).toEqual('1')
            act(()=>{selectButton.props().onClick()})           
            act(()=>{radioGroup.props().onChange({target:{value:'2'}})})
            wrapper.update();
            expect(selectValue1).toHaveBeenCalledWith('1')
            expect(wrapper.find(RadioGroup).at(0).props().value).toEqual('2')
            expect(missionList.at(0).props().mission).toEqual({missionId:1,data:{}})
            expect(missionList.at(1).props().mission).toEqual({missionId:2,data:{}})
            let selectButton2= findByTestAttr(wrapper, "selectButton").at(0)
            act(()=>{abortButton.props().onClick()})
            act(()=>{selectButton2.props().onClick()})           
            wrapper.update()
            expect(selectValue1).toHaveBeenCalledWith('2')
            expect(abort1).toHaveBeenCalled()

        
            });

        });