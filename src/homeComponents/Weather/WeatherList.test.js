import React from 'react';
import WeatherList from './WeatherList';
import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../util/testSnapFunction';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})


const setup = (props = {}) => {
    return shallow( < WeatherList
     {...props}  />
    )
}


{/* it("Custom Scrollable render", () => {
        let wrapper = setup(dummy_data);
        // expect(wrapper).toMatchSnapshot();
}) */}
it("Snapshot WeatherDetail", () => {
    let wrapper = setup({weather:[{main:{temp:6}, dt_txt:"text1", weather:[{id:0},{id:1}]},{main:{temp:16}, dt_txt:"text2",  weather:[{id:3},{id:4}]}]});
    expect(wrapper).toMatchSnapshot();
   
})

it("Snapshot WeatherDetail", () => {
    let wrapper = setup({weather:[{main:{temp:6}, dt_txt:"text1", weather:[{id:0},{id:1}]},{main:{temp:16}, dt_txt:"text2",  weather:[{id:3},{id:4}]}]});
    let weatherComp=findByTestAttr(wrapper, "weather")
    expect(weatherComp.length).toEqual(2)  
    wrapper = setup({weather:[{main:{temp:30}, dt_txt:"text1", weather:[{id:0},{id:1}]},{main:{temp:30}, dt_txt:"text2",  weather:[{id:3},{id:4}]}]});
    wrapper = setup({weather:[{main:{temp:25}, dt_txt:"text1", weather:[{id:0},{id:1}]},{main:{temp:25}, dt_txt:"text2",  weather:[{id:3},{id:4}]}]});
    wrapper = setup({weather:[{main:{temp:15}, dt_txt:"text1", weather:[{id:0},{id:1}]},{main:{temp:15}, dt_txt:"text2",  weather:[{id:3},{id:4}]}]});
    wrapper = setup({weather:[{main:{temp:5}, dt_txt:"text1", weather:[{id:0},{id:1}]},{main:{temp:5}, dt_txt:"text2",  weather:[{id:3},{id:4}]}]});
    wrapper = setup({weather:[{main:{temp:-2}, dt_txt:"text1", weather:[{id:0},{id:1}]},{main:{temp:-2}, dt_txt:"text2",  weather:[{id:3},{id:4}]}]});

})
