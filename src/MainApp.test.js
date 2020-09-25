import React from 'react';
import MainApp from './MainApp';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const setup = (props = {}, state = null) => {
    return shallow( < MainApp /
        >
    )
}
it("Renders <MainApp /> component correctly", () => {
    const div = document.createElement('div');
    ReactDOM.render( < MainApp / > , div);
})