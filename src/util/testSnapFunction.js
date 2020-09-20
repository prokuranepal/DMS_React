import React from 'react';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


export default function testSnapFunction(oDesc, descriptions,element){
    describe(oDesc, () => {

        afterEach(() => {
            jest.clearAllMocks();
          });

        test(descriptions, () => {
            const tree = shallow(element);
            expect(tree).toMatchSnapshot();
        });
    
    })
}

