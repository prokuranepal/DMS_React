import React from 'react';
import OrderTableCell, {data, createData} from './OrderTableCell';
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
    return shallow( < OrderTableCell {...props}  />
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

let includeFunction=jest.fn()
const dummy_props={
 data:{id:"id1",
 orderId:"order1",
 name:"name1",
 image:"image1",
 orderDate:"24 Dec, 2020",
 deliveryDate:"2 Jan, 2021",
 status: {includes:includeFunction
}
}
}
describe("OrderTableCell Comp",()=>{
it("Snapshot",()=>{
    const wrapper= setup(dummy_props);
    expect(wrapper).toMatchSnapshot()

})
it("Props",()=>{
    const wrapper= setup({...dummy_props});
    let buttonComp= wrapper.find('[data-test="buttonComp"]')
    let cardMenuComp= wrapper.find('[data-test="cardMenuComp"]')
    expect(cardMenuComp.prop('menuState')).toEqual(false);
    expect(cardMenuComp.prop('anchorEl')).toEqual(undefined);
    buttonComp.props().onClick({currentTarget:'target1'});
    wrapper.update()
    let cardMenuComp1= wrapper.find('[data-test="cardMenuComp"]')
    expect(cardMenuComp1.prop('menuState')).toEqual(true);
    expect(cardMenuComp1.prop('anchorEl')).toEqual("target1");
    
})
})