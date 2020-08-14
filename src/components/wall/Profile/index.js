import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import {useSelector} from "react-redux";

const Profile = (props) => {

  const [isFollow, setIsFollow] = useState(false);

  const authUser = useSelector(({auth}) => auth.authUser);

  const handleToggle = () => {
    setIsFollow((previousState) => ({
      isFollow: !previousState.isFollow
    }));
  };

  const {user, userInfo} = props;
  const {id, name, image, address} = user;
  const {followers, following, frinds} = userInfo;
    return (
      <>
        <div className="jr-profileon">
          <div className="jr-profileon-thumb jr-profileon-thumb-htctrcrop">
            <img src={image} alt=''/>
          </div>
          <div className="jr-profileon-content">
            <p className="jr-profileon-title">{name}</p>
            <span className="jr-fs-sm">{address}</span>
          </div>
        </div>

        <div className="jr-follower text-center">
          <ul className="jr-follower-list">
            <li>
              <span className="jr-follower-title">{followers}</span>
              <span>Followers</span>
            </li>
            <li>
              <span className="jr-follower-title">{following}</span>
              <span>Following</span>
            </li>
            <li>
              <span className="jr-follower-title">{frinds}</span>
              <span>project</span>
            </li>
          </ul>
        </div>
        <div className="mb-xl-4 mb-3">
          <p>You are following {name}</p>
          {authUser === id ? null :
            <Button size="small" variant="contained" className="mb-0" color="primary"
                    onClick={handleToggle}>{isFollow === true ? 'Follow' : 'Unfollow'}</Button>
          }
        </div>
      </>
    )
};
export default Profile
