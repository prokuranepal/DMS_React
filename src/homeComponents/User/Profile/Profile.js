import React,{useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import About from "../../../components/profile/About/index";
import Biography from "../../../components/profile/Biography/index";
import Events from "../../../components/profile/Events/index";
import Contact from "../../../components/profile/Contact/index";
import Friends from "../../../components/profile/Friends/index";
// import Photos from "../../../components/profile/Photos/index";
import ProfileHeader from "../../../components/profile/ProfileHeader/index";
import Auxiliary from "../../../util/Auxiliary";
import {friendList} from './data'
import * as actions from '../../../store/actions/users';
import Users from "../../../app/routes/Users/Users";
// import {photoList} from "../Wall/data";

const Profile = (props) => {
    console.log(props.location)
    const dispatch = useDispatch();
    const userProfile = useSelector(({users}) => users.userProfile)

    useEffect(() => {
        if(props.location !== undefined) {
        dispatch(actions.getUserProfile(props.location.state.id))
        }
    },[dispatch, props.location])

    useEffect(() => {
        console.log(userProfile);
    },[userProfile]);

    
  return (
    <Auxiliary>
        <div className="app-wrapper">
      <ProfileHeader/>
      <div className="jr-profile-content">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-7 col-12">
            <About/>
            <Biography/>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-5 col-12">
            <Contact/>
            <div className="row">
              <div className="col-12">
                <Friends friendList={friendList}/>
              </div>
              {/* <div className="col-12">
                <Photos photoList={photoList}/>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      </div>
    </Auxiliary>
  );
};

export default Profile;


