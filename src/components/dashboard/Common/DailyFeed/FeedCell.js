import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const FeedCell = ({feed}) => {
  const {id, desc, time, updateTime, image, isSocial} = feed;
  return (

    <div key={id} className="media user-profile user-profile-border">
      <Avatar
        alt="..."
        src={image}
        className="user-avatar"
        data-test={`imgage-component` }
      />
      <div className="media-body align-self-center">
        <h5 className="mb-0 jr-fs-13">{desc}</h5>
        <span className="meta-date-light jr-fs-sm"  >{time} </span>
        {isSocial &&
        <div className="mt-2 btn-group-mins" >
          <span className="btn jr-btn-xs btn-primary jr-link"><i
            className="zmdi zmdi-thumb-up mr-1"/>&nbsp;Like</span>
          <span className="btn jr-btn-xs btn-info jr-link"><i
            className="zmdi zmdi-share mr-1"/>&nbsp;Share</span>
        </div>
        }
      </div>
      <span className="ml-1 text-blue-grey text-lighten-2 jr-fs-sm">{updateTime}</span>
    </div>

  );
};

import {
    configure,
    shallow,
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// JestHook.mock('expo-font');
configure({
    adapter: new EnzymeAdapter
})

const dummy_data=[{
  id:1,
  image: "https://via.placeholder.com/150x150",
  title: "Alex Brown has shared Martin Guptil's post",
  desc: "acdef",
  time:"5:45",
  isSocial:false
},
{
  id:2,
  image: "https://via.placeholderhome.com/150x150",
  title: "Hello How are ",
  desc: "ghijlk",
  time:"12:04",
  isSocial:true
}

]
const setup = (props = {}) => {
  return shallow( <FeedCell
   {...props}  />
  )
}

const findByTestAttr=(wrapper, val)=>{
  return wrapper.find(`[data-test='${val}']`)
}
it("Props DailyFeed", () => {
    const wrapper= setup({feed:dummy_data[0]});   
    const img1= findByTestAttr(wrapper, "imgage-component") //Avatar does not work as expected
    expect(img1).toHaveLength(1)
    expect(img1.props().src).toEqual("https://via.placeholder.com/150x150")
    const span= wrapper.find('span')
    expect(span).toHaveLength(2);
    const wrapper2= setup({feed:dummy_data[1]}); 
    const span2= wrapper2.find('span')
    expect(span2).toHaveLength(4); //doesn't work as expected either

    // expect(img1.props("src")).toEqual("https://via.placeholder.com/150x150")
    

})


export default FeedCell;
