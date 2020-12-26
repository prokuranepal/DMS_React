import testSnapFunction, {findByTestAttr} from '../../../../util/testSnapFunction';
import MailListItem from './index'
import React from 'react';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


const mailChecked=jest.fn()
const stopPropagationFunc=jest.fn()
const startSelect=jest.fn()
const mailSelect=jest.fn()
const dummy_data={
    mail:{
        starred:false,
        important:true,
        subject:"subject",
        from:{
            avatar:"avatar",
            name:"john",
            email:"john@gmail.com",

        },
        to:[{email:"sa@gmail.com"},{email:"bill@hotmail.com"}],
        time:"5:50pm",
        message:"hello how you doing",
        hasAttachments:[{preview:"preview1", filename:"file1", size:"size1"},
        {preview:"preview2", filename:"file2", size:"size2"},
        {preview:"preview3", filename:"file3", size:"size3"}],

    }, 
    onMailSelect:mailSelect, 
    onMailChecked:mailChecked, 
    onStartSelect:startSelect
}
testSnapFunction("<MailListItem/>", "Snapshot test for PhroductGridItem",<MailListItem {...dummy_data}/> )

it("props and events",()=>{
    const wrapper = shallow(<MailListItem {...dummy_data} />)
    let checkboxComp = findByTestAttr(wrapper, "checkboxComp")
    checkboxComp.props().onClick({stopPropagation:stopPropagationFunc})
    expect(stopPropagationFunc).toHaveBeenCalledTimes(1)
    expect(mailChecked).toHaveBeenCalledTimes(1)
    expect(mailChecked).toHaveBeenCalledWith(dummy_data.mail)


    let iconButtonComp = findByTestAttr(wrapper, "iconButtonComp")    
    iconButtonComp.props().onClick()
    expect(startSelect).toHaveBeenCalledTimes(1)
    expect(startSelect).toHaveBeenCalledWith(dummy_data.mail)
    let onMailSelectComp = findByTestAttr(wrapper, "onMailSelectComp")

    onMailSelectComp.props().onClick()
    expect(mailSelect).toHaveBeenCalledTimes(1)
    expect(mailSelect).toHaveBeenCalledWith(dummy_data.mail)


}
)