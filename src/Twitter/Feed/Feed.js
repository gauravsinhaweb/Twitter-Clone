import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox/TweetBox";
import Post from "./Post/Post";
import { HiOutlineSparkles } from "react-icons/hi";
import db from "../../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <>
      <div className="feed">
        <div className="feed_header">
          <span>Home</span>
          <HiOutlineSparkles className="sparkle" />
        </div>
        <TweetBox />
        {posts.map((post) => (
          <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </div>
    </>
  );
}

export default Feed;
