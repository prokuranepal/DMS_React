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


export  const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)
}

export const findByTestProps=(wrapper,val)=>{
    return wrapper.findByProps({"data-test": val})
}

//  jest.mock("Platform",()=>"android")
export const mockPlatform = OS => {
    jest.resetModules();
    jest.doMock('react-native/Libraries/Utilities/Platform', () => ({
      OS,
      select: config => config[OS],
    }));
  };
export const mockAlert = ()=>{
    jest.resetModules();
    jest.doMock('react-native/Libraries/Alert/Alert', () => ({
        alert:jest.fn()
      }));
    };

export const mockDevice = ()=>{
    jest.resetModules();
    jest.doMock('react-device-detect', () => ({
        isIOS:false,
        isMobile:true
      }));
    };
const useHistoryFunc=jest.fn();
const listenFunc = jest.fn();
useHistoryFunc.mockReturnValue({
    listen:listenFunc
})
export const mockHistory = ()=>{
    jest.resetModules();
    // jest.doMock('react-router-dom/cjs/react-router-dom', () => ({
    //     useHistory: listenFunc
    //   }));

    };
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

