import React from "react";
import "./Sidebar.css";
import { jack, simon, tom, megan, cameron } from "../../assets";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import HistoryIcon from "@mui/icons-material/History";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"} `}>
      <div className="scrollbar">
        <div className="scrollbar-inner">
          <div className="sortcut-links">
            <div className="sidelinks">
              {/* <img src={home} alt="" /> */}
              <HomeIcon color="action" className="icon" />
              <p>Home</p>
            </div>
            <div className="sidelinks">
              {/* <img src={ExploreIcon} alt="" /> */}
              <ExploreIcon color="action" className="icon" />
              <p>Explore</p>
            </div>
            <div className="sidelinks">
              {/* <img src={ExploreIcon} alt="" /> */}
              <SubscriptionsIcon color="action" className="icon" />
              <p>Subscriptions</p>
            </div>
            <hr />

            <div className="sidelinks">
              {/* <img src={ExploreIcon} alt="" /> */}
              <LibraryAddIcon color="action" className="icon" />
              <p>Library</p>
            </div>
            <div className="sidelinks">
              {/* <img src={ExploreIcon} alt="" /> */}
              <HistoryIcon color="action" className="icon " />
              <p>History</p>
            </div>
            <hr />

            <div>
              <h3 className="text1">
                Sign in to like videos, comment and subscribe
              </h3>
              <div className="button flex-div">
                <div className="search-box flex-div">
                  <AccountCircleIcon className="icon1" />
                  <p className="text">SignIn</p>
                </div>
              </div>
            </div>

            <hr />

            <div className="sidelinks">
              <SportsEsportsIcon color="action" className="icon" />
              <p>Gaming</p>
            </div>
            <div className="sidelinks">
              <WhatshotIcon color="action" className="icon" />
              <p>Trending</p>
            </div>
            <div className="sidelinks">
              <LibraryMusicIcon color="action" className="icon" />
              <p>Music</p>
            </div>
            <div className="sidelinks">
              <CameraRollIcon color="action" className="icon" />
              <p>Entertainment</p>
            </div>
            <div className="sidelinks">
              <NewspaperIcon color="action" className="icon" />
              <p>News</p>
            </div>
            <hr />
          </div>
          <div className="subscribed-list">
            <h3>Subscriptions</h3>
            <div className="sidelinks">
              <img src={jack} alt="" />
              <p>PewDiePie</p>
            </div>
            <div className="sidelinks">
              <img src={simon} alt="" />
              <p>MrBeast</p>
            </div>
            <div className="sidelinks">
              <img src={tom} alt="" />
              <p>Justin Bieber</p>
            </div>
            <div className="sidelinks">
              <img src={megan} alt="" />
              <p>5-Minute crafts</p>
            </div>
            <div className="sidelinks">
              <img src={cameron} alt="" />
              <p>Nas Daily</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
