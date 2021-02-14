import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";
import {
  AiOutlinePicture,
  AiOutlineSchedule,
  AiOutlineGif,
} from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { GrEmoji } from "react-icons/gr";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars.githubusercontent.com/u/75125943?s=400&u=211c424499aee235a8fd0532ca232c01a670b6e4&v=4" />
          <input placeholder="What's happening?" />
        </div>
        <div className="tweetBox__iconBox">
          {" "}
          <AiOutlinePicture className="tweetBox__icons" />
          <AiOutlineGif className="tweetBox__icons" />
          <BiPoll className="tweetBox__icons" />
          <GrEmoji className="tweetBox__icons" />
          <AiOutlineSchedule className="tweetBox__icons" />
          <Button className="tweetBox__tweetButton">Tweet</Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
