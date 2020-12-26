
import React from 'react';
import Table,{route_comp} from './dms';
import {
    configure,
    shallow,
    mount
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
import { MemoryRouter } from 'react-router';
configure({
    adapter: new EnzymeAdapter
})





test('invalid path should redirect to 404', () => 
{  const wrapper = mount( 
        <MemoryRouter initialEntries={['/random']}>   
        <Table match={{url:'/dms.prokurainnovations.com'}}/> 
      </MemoryRouter>  
      );  
      expect(wrapper.find(route_comp)).toHaveLength(0);
    });

test('invalid path should redirect to 404', () => 
{  const wrapper = mount( 
        <MemoryRouter initialEntries={['dms.prokurainnovations.com/drone']}>   
        <Table match={{url:"dms.prokurainnovations.com"}}/> 
      </MemoryRouter>  
      );  
      expect(wrapper.find(route_comp)).toHaveLength(1);
    });