
import React from 'react';
import MediaList from './MediaList';
import testSnapFunction from '../../../util/testSnapFunction';
import { exportAllDeclaration } from '@babel/types';
import {
    configure,
    mount,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
it("snapshot", ()=>{
    let wrapper = mount(<MediaList mediaList={[{ke:"f"},{ke:"fff"}]}></MediaList>)
    expect(wrapper).toMatchSnapshot()
})