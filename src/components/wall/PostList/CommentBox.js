import React, {useEffect, useState} from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import DisplayDate from "../DisplayDate/index";
import {Input} from "reactstrap";

const CommentBox = (props) => {

  const [isComment, setIsComment] = useState(false);

  const [commentData, setCommentData] = useState({
    id: 0,
    user: {},
    isLike: true,
    likeCount: 0,
    date: '',
    commentList: [],
    comment: ''
  });

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommentToggle();
    }
  };

  useEffect(() => {
    setCommentData(props.commentData)
  }, [props.commentData]);


  const handleLikeToggle = () => {
    setCommentData({
      ...commentData,
      isLike: !commentData.isLike,
      likeCount: (commentData.isLike === true ? commentData.likeCount - 1 : commentData.likeCount + 1)
    });
  };

  const handleCommentToggle = () => {
    setIsComment((previousState) => ({
        isComment: !previousState.isComment,
      }
    ));
  };

  const {user, isLike, date, comment} = commentData;
  return (
    <div className="media flex-nowrap jr-wall-user-info mb-3">
      <Avatar alt="..." className="mr-3 jr-size-40" src={user.image}/>
      <div className="media-body">
        <h5 className="jr-wall-user-title">{user.name}</h5>
        <DisplayDate date={date}/>
        <p className="mt-2">{comment}</p>
        <div className="flex-row">
          <Button variant="contained" color="primary" className="mr-3 mb-1" size="small"
                  onClick={handleLikeToggle}>{isLike === true ? 'Like' : 'UnLike'}</Button>
          <Button variant="contained" className="bg-light-blue text-white mb-1" size="small"
                  onClick={handleCommentToggle}>Comment</Button>
        </div>
        {isComment === true ? <div className="media mt-3">
          <Avatar className="mr-3 size-30" src={user.image}/>
          <div className="media-body">
            <Input
              id="required" className="border-0"
              placeholder="Type Comments"
              onKeyPress={(event) => handleKeyPress(event)}
            />
          </div>
        </div> : null}

      </div>
    </div>
  )
};
export default CommentBox;
