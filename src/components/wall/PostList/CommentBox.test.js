import React from 'react';
import CommentBox from './CommentBox';

import testSnapFunction from '../../../util/testSnapFunction';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
testSnapFunction("<CommentBox/>", "Snapshot test for CommentBox",<CommentBox /> )


const setup = (props = {}) => {
    return shallow( < CommentBox
     {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


describe("CommentBox",()=>{
    it("buttons",()=>{
        let wrapper = setup({commentData:"comment1"});
        let button1 = findByTestAttr(wrapper, "buttonComp1");
        let pressComp = findByTestAttr(wrapper, "pressComp");
        expect(button1.text()).toEqual('Like')
        button1.props().onClick();
        wrapper.update()
        button1 = findByTestAttr(wrapper, "buttonComp1");
        expect(button1.text()).toEqual('UnLike')
        let button2 = findByTestAttr(wrapper, "buttonComp2");
        
        expect(pressComp).toHaveLength(0)
        button2.props().onClick();
        wrapper.update()
        pressComp = findByTestAttr(wrapper, "pressComp");
        expect(pressComp).toHaveLength(1)
        pressComp.props().onKeyPress({key:"Enter"})
        wrapper.update()
        pressComp = findByTestAttr(wrapper, "pressComp");
        expect(pressComp).toHaveLength(0)


    })
})