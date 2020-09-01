import React from 'react';
import CheckList, {checks1} from './CheckList';
import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()


/*
    name_length =[component name("<CustomButton>")"), 
        number of times the compnent is expected to render 
        component to corresponding index in elements( here 1 for View),2 for Text, 1 for Button]
    description= ["renders correctly", "renders the length of component ", ]-->description for each test here 2
    elements = [ component being tested (<CustomButton>), type of component expected(View),Text, Button]
*/

const setup = (props = {}, state = null) => {
    return (shallow( < CheckList {...props} />)
    )
}

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

 {/* test_function(["ActivityBoxComponent", 0], ["renders correctly", "renders the length of component"], [ < ActivityBoxComponent propValue="New Visit" / > , < div / > ]) */}
{/* it("number of div children", () => {
    let wrapper = setup();
    const children = wrapper.find('div')
    expect(children).toHaveLength(3);
  
}) */}



describe('<TestComponent />', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = setup({abort:true})
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


it("CheckList render",()=> {
        // let wrapper = setup(dummy_data);

    const appValueComponent= findByTestAttr(wrapper,"container-component")
    expect(appValueComponent).toHaveLength(1)

  
})


it("Events and props test in CheckList", () =>
        {
            checks1.map((check,index)=>{
            let checkListComponent= findByTestAttr(wrapper,`checklist-component${index}`)
            expect(checkListComponent.prop("name")).toEqual(check.name)
            expect(checkListComponent.prop("checked")).toEqual(check.value)
            checkListComponent.props().onChange({target:{checked:false}})
            wrapper.update()
            let checkListComponent2= findByTestAttr(wrapper,`checklist-component${index}`)
            expect(checkListComponent2.prop("checked")).toEqual(false)
            })

            })
})
