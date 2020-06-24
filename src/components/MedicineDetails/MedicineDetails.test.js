  
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';

import MedicineDetails from './MedicineDetails';
import Button from '@material-ui/core/Button';

configure({adapter: new Adaptor()});

const setup = () => {
    return shallow(<MedicineDetails />);
};

it('should render Medicine with no error', () => {
    const wrapper = setup();
    const findByTestAttr = wrapper.find('[data-test="MedicineDetails-component"]');
    expect(findByTestAttr.length).toBe(1);
});

it('should render Medicine image', () => {
    const wrapper = setup();
    const findByTestAttr = wrapper.find('[data-test="Medicine-image"]');
    expect(findByTestAttr.length).toBe(1);
});

it('should render Medicine name', () => {
    const wrapper = setup();
    const findByTestAttr = wrapper.find('[data-test="Medicine-name"]');
    expect(findByTestAttr.length).toBe(1);
});

it('should render Medicine types', () => {
    const wrapper = setup();
    const findByTestAttr = wrapper.find('[data-test="Medicine-types"]');
    expect(findByTestAttr.length).toBe(1);
});

it('should render Medicine quantity', () => {
    const wrapper = setup();
    const findByTestAttr = wrapper.find('[data-test="Medicine-quantity"]');
    expect(findByTestAttr.length).toBe(1);
});

it('should render Edit button', () => {
    const wrapper = setup();
    const findButton = wrapper.find(Button);
    expect(findButton.length).toBe(1);
});