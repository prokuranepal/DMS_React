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


  export const mockSocket = OS => {
    jest.resetModules();
    jest.doMock('../socket', () => ({
      socket:{
          emit:jest.fn(),
          on:jest.fn(),
          off:jest.fn()

      },
      emit:jest.fn(),
      on:jest.fn(),
      off:jest.fn()
    }));
  };
  
    export const mockMaterialUI = ()=>{
      jest.doMock('@material-ui/styles', () => ({
          Theme:{
            spacing:{
              unit:20
            }
          },makeStyles:jest.fn(),
          createStyles:jest.fn()
        }));
      };
    export const mockAvatar = ()=>{
      jest.resetModules();
      jest.doMock('@material-ui/core/es/Avatar/Avatar', (props) => <div >{props.children}</div>);
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

