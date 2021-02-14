import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
import { HiOutlineSparkles } from "react-icons/hi";
function Feed() {
  return (
    <>
      <div className="feed">
        <div className="feed_header">
          <span>Home</span>
          <HiOutlineSparkles className="sparkle" />
        </div>
        <TweetBox />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
}

export default Feed;
