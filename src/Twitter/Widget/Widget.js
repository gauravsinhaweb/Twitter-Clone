import React from "react";
import "./Widget.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import { RiSearch2Line } from "react-icons/ri";
import { Tweet } from "react-twitter-widgets";

function Widget() {
  return (
    <>
      <div className="widgets">
        <div className="widget_container">
          <div className="widgets_input">
            <RiSearch2Line className="widgets_searchIcon" />
            <input placeholder="Search Twitter" type="text" />
          </div>
        </div>
        <div className="widget_widgetContainer">
          <h2>What's happening</h2>

          <Tweet tweetId="1360272714641121283" />
          <Tweet tweetId="1354850081816637441" />
          <Tweet tweetId="1346901737341292545" />
        </div>
      </div>
    </>
  );
}

export default Widget;
