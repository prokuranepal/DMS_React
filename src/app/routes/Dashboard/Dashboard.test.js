import React from 'react';
import Dashboard from './Dashboard';
import {
    configure,
    shallow,
    mount
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
configure({
    adapter: new EnzymeAdapter
})
import * as cards from '../../../JSONFiles/dashboardCards';


const mockStore = configureStore([]);

const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}


const dummy_data=
    {name:"8",
    type:{
        image:"image",
        name:"name"
    }}


describe('Dashboard />', () => {
  let wrapper;

  let store;
  const date = new Date();
  const year = date.getFullYear();
  beforeEach(() => {
 
    store = mockStore({dashboard:{
        cardData:['data1', 'data2', 'data3'], 
        loading:false, 
        graphs:{healthPosts:[{data:{[year]:{"name":"healthPost1","date":"1990","location":"ktm"}}}, 
        {data:{[year]:{"name":"healthPost2","date":"2020","location":"dharan" }}},{data:{[year]:"healthPost3","date":"1994","location":"patan"}}],
        hospital:{'1990':"hospital1", '2000':"hospital2", '1994':"hospital3", '2020':"hospital3"}}
    }
    
  });
  store.dispatch=jest.fn();

})

  afterEach(() => {
    jest.clearAllMocks();
  });


it("Dashboard snapshot", () => {
        // let wrapper = setup(dummy_data);
    wrapper = shallow( <Provider store={store}>< Dashboard {...dummy_data}  /></Provider>)

        expect(wrapper).toMatchSnapshot();

  
})

it("Dashboard Components", () => {
    wrapper = mount( <Provider store={store}>< Dashboard {...dummy_data}  /></Provider>)
    const linkComponent= findByTestAttr(wrapper,"cardMap")
    expect(linkComponent).toHaveLength(4)
    // const lineComp= findByTestAttr(wrapper,"lineComp")
    // expect(lineComp).toHaveLength(4)
    // expect(lineComp.at(0).props('labels')).toEqual(["name","date","location"])
    // expect(lineComp.at(1).props('chartData')).toEqual(["healthPost2","2020","dharan"])

})
})
