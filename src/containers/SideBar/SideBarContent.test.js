import React from 'react';
import SideBarContent from './SideBarContent';
import {
    configure,
    shallow
} from 'enzyme';
import {IntlProvider} from 'react-intl';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
import { MemoryRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {act} from 'react-dom/test-utils';
import { tsConstructorType } from '@babel/types';

const mockStore = configureStore([]);

configure({
    adapter: new EnzymeAdapter
})

// const itemClass = new Item();
describe('<SideBarContent />', () => {
it("Components SideBarContent", () => {
    let wrapper = shallow(
                < SideBarContent>
                </SideBarContent>
)
    expect(wrapper).toMatchSnapshot()
})
})
