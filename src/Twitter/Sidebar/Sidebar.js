import React from "react";
import "./Sidebar.css";
import { SiTwitter } from "react-icons/si";
import SidebarOption from "../SidebarOption/SidebarOption";
import { BiHash, BiHomeCircle, BiBookmark } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";
import { Button } from "@material-ui/core";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import { RiFileList2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <SiTwitter className="twitter_icon" />

        <SidebarOption
          active
          Icon={<BiHomeCircle className="sidebar_twitter_icon" />}
          text="Home"
        />
        <SidebarOption
          Icon={<BiHash className="sidebar_twitter_icon" />}
          text="Explore"
        />
        <SidebarOption
          Icon={<IoMdNotificationsOutline className="sidebar_twitter_icon" />}
          text="Notifications"
        />
        <SidebarOption
          Icon={<FiMail className="sidebar_twitter_icon" />}
          text="Messages"
        />
        <SidebarOption
          Icon={<BiBookmark className="sidebar_twitter_icon" />}
          text="Bookmarks"
        />
        <SidebarOption
          Icon={<RiFileList2Line className="sidebar_twitter_icon" />}
          text="Lists"
        />
        <SidebarOption
          Icon={<AiOutlineUser className="sidebar_twitter_icon" />}
          text="Profile"
        />
        <SidebarOption
          Icon={<CgMoreO className="sidebar_twitter_icon" />}
          text="More"
        />
        <Button varient="outlined" fullWidth className="tweet_button">
          Tweet
        </Button>
      </div>
    </>
  );
}
