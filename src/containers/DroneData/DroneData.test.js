import React from 'react';
import DroneData from './DroneData';
import {
    configure,
    mount
} from 'enzyme';
import {IntlProvider} from 'react-intl';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {act} from 'react-dom/test-utils';
import { tsConstructorType } from '@babel/types';
import {mockSocket} from '../../util/testSnapFunction'
const mockStore = configureStore([]);

configure({
    adapter: new EnzymeAdapter
})
const includeFunction=jest.fn()
includeFunction.mockReturnValue("fixed-drawer")
const navFunction=jest.fn();
const preventDefaultFunction=jest.fn()
const hasFunction = jest.fn();
const getFunction = jest.fn()

// const itemClass = new Item();
const dummy_data={
  
  }


const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


describe('<DroneData />', () => {
    let store;
beforeEach(()=>{
    store = mockStore({
       droneControl:{
           activeDrones:['drone1','drone2','drone3','drone4'],
           missions:[{missionId:1,data:{}},{missionId:2,data:{}}]       
        }});
      store.dispatch=jest.fn();
      mockSocket()
})
afterEach(() => {
    jest.clearAllMocks();
  });

it("Components DroneData", () => {
    let wrapper = mount(<Provider store={store}> 
                < DroneData {...dummy_data}  >
                </DroneData>
    </Provider>)
    let openMissionComp = findByTestAttr(wrapper, "openMissionComp").at(0)
    let droneInfoComp = findByTestAttr(wrapper, "droneInfoComp").at(0)
    let missionInfoComp = findByTestAttr(wrapper, "missionInfoComp").at(0)
    let modalComp = findByTestAttr(wrapper, "modalComp").at(0)
    let openDroneComp = findByTestAttr(wrapper, "openDroneComp").at(0)
    expect(store.dispatch).toHaveBeenCalledTimes(0)
    let modalComp3 = findByTestAttr(wrapper, "modalComp3").at(0)
    expect(modalComp.prop('open')).toEqual(false)

    act(()=>openMissionComp.props().onClick())
    wrapper.update()
    expect(store.dispatch).toHaveBeenCalledTimes(1)
    let modalComp21 = findByTestAttr(wrapper, "modalComp").at(0)
    expect(modalComp21.prop('open')).toEqual(true)
    expect(modalComp3.prop('open')).toEqual(false)
    act(()=>openDroneComp.props().onClick())
    wrapper.update()
    expect(store.dispatch).toHaveBeenCalledTimes(2)
    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function))
    let modalComp31 = findByTestAttr(wrapper, "modalComp3").at(0)
    expect(modalComp31.prop('open')).toEqual(true)
    let droneListComp = findByTestAttr(wrapper, "droneListComp").at(0)

    expect(droneListComp.prop('drones')).toEqual(['drone1','drone2','drone3','drone4'])
    expect(droneInfoComp).toHaveLength(0)
    expect(missionInfoComp).toHaveLength(0)
    act(()=>droneListComp.props().select())
    wrapper.update()
    let modalComp311 = findByTestAttr(wrapper, "modalComp3").at(0)
    let droneInfoComp1 = findByTestAttr(wrapper, "droneInfoComp").at(0)
    expect(droneInfoComp1).toHaveLength(1)
    expect(modalComp311.prop('open')).toEqual(false)
    act(()=>droneListComp.props().abort())
    let modalComp_du = findByTestAttr(wrapper, "modalComp").at(0)
    expect(modalComp_du.prop('open')).toEqual(true)
    let handleOpenCheckComp = findByTestAttr(wrapper, "handleOpenCheckComp").at(0)
    act(()=>handleOpenCheckComp.props().onClick())
    wrapper.update()
    let modalTestComp24 = findByTestAttr(wrapper, "modalTestComp2").at(0)
    expect(modalTestComp24.prop('open')).toEqual(true)
    let missionListComp = findByTestAttr(wrapper, "missionListComp").at(0)
    act(()=>missionListComp.props().select())
    wrapper.update()
    let missionInfoComp2 = findByTestAttr(wrapper, "missionInfoComp").at(0)
    expect(missionInfoComp2).toHaveLength(1)

    let modalTestComp2 = findByTestAttr(wrapper, "modalTestComp2").at(0)
    expect(modalTestComp2.prop('open')).toEqual(true)
    act(()=>modalTestComp2.props().onClose())
    wrapper.update()
    let modalTestComp2_dub = findByTestAttr(wrapper, "modalTestComp2").at(0)
    expect(modalTestComp2_dub.prop('open')).toEqual(false)
    
    let modalComp88 = findByTestAttr(wrapper, "modalComp").at(0)
    act(()=>modalComp88.props().onClose());
    wrapper.update()
    let modalComp_dubb = findByTestAttr(wrapper, "modalComp").at(0)
    expect(modalComp_dubb.prop('open')).toEqual(false)
    


})
})
