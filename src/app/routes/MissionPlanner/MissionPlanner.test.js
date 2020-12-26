
import React from 'react';
import MissionPlanner,{missionView, missionLists} from './MissionPlanner';
import {
    configure,
    shallow,
    mount
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router';
configure({
    adapter: new EnzymeAdapter
})
const mockStore = configureStore([]);

describe('<AddMedicine />', () => {
  let wrapper;

  let store;

  beforeEach(() => {
    store = mockStore({ 
    users:["user1", "user2"]
  });
  store.dispatch=jest.fn();
  })






test('invalid path should redirect to 404', () => 
{  const wrapper = mount( 
        <Provider store={store}><MemoryRouter initialEntries={['dms.prokurainnovations.com/drone']}>   
        <MissionPlanner match={{url:"dms.prokurainnovations.com"}}/> 
      </MemoryRouter>  </Provider> 
      );  
      expect(wrapper.find(missionView)).toHaveLength(0);
      expect(wrapper.find(missionLists)).toHaveLength(0);

    });
    test('missionView', () => 
{  const wrapper = mount( 
        <Provider store={store}><MemoryRouter initialEntries={['dms.prokurainnovations.com/missionview']}>   
        <MissionPlanner match={{url:"dms.prokurainnovations.com"}}/> 
      </MemoryRouter>  </Provider> 
      );  
      expect(wrapper.find(missionView)).toHaveLength(1);
      expect(wrapper.find(missionLists)).toHaveLength(0);

    });
    test('missionLists', () => 
{  const wrapper = mount( 
        <Provider store={store}><MemoryRouter initialEntries={['dms.prokurainnovations.com/missionlist']}>   
        <MissionPlanner match={{url:"dms.prokurainnovations.com"}}/> 
      </MemoryRouter>  </Provider> 
      );  
      expect(wrapper.find(missionView)).toHaveLength(0);
      expect(wrapper.find(missionLists)).toHaveLength(1);

    });
  })