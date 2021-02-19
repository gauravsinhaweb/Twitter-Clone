import "./Post.css";
import React from "react";
import { Avatar } from "@material-ui/core";
import { GoVerified } from "react-icons/go";
import { RiChat3Line } from "react-icons/ri";
import { HiOutlineHeart } from "react-icons/hi";
import { AiOutlineRetweet } from "react-icons/ai";
import { FiShare } from "react-icons/fi";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}
              {verified && <GoVerified size={16} className="post__badge" />}
              <span className="post__headerUsername"> @{username}</span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="post__footer">
          <RiChat3Line size={20} className="footerIcon" />
          <AiOutlineRetweet size={20} className="retweetIcon" />
          <HiOutlineHeart size={20} className="likeIcon" />
          <FiShare size={20} className="footerIcon" />
        </div>
      </div>
    </div>
  );
}

export default Post;
