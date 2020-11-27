import React from 'react';
import GridImage from './GridImage';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const setup = (props = {}) => {
    return shallow( < GridImage
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

const dummy_data={
    mediaList:[{image:2},{image:3},{image:4}],
    handleToggle:jest.fn()
}
import testSnapFunction from '../../../util/testSnapFunction';
import { exportAllDeclaration } from '@babel/types';
testSnapFunction("<GridImage/>", "Snapshot test for GridImage",<GridImage {...dummy_data}/> )

const toggleFunction=jest.fn();

describe("GridImage",()=>{
    it("buttons",()=>{
        let wrapper = setup({mediaList:[{image:"media1"}], handleToggle:toggleFunction});
        let wrapper2 = setup({mediaList:[{image:"media1"},{image:"media2"}], handleToggle:toggleFunction});
        let wrapper3 = setup({mediaList:[{image:"media1"},{image:"media2"},{image:"media3"}], handleToggle:toggleFunction});
        let wrapper4 = setup({mediaList:[{image:"media1"},{image:"media2"},{image:"media3"},{image:"media4"}], handleToggle:toggleFunction});
        


    })
})