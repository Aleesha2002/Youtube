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

const Sidebar = ({ sidebar,category,setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"} `}>
      <div className="scrollbar">
        <div className="scrollbar-inner">
          <div className="sortcut-links">
            <div
              className={`sidelinks ${category === 0 ? "active" : ""} `}
              onClick={() => setCategory(0)}
            >
              <HomeIcon color="action" className="icon" />
              <p>Home</p>
            </div>
            <div
              className={`sidelinks ${category === 43 ? "active" : ""} `}
              onClick={() => setCategory(43)}
            >
              <ExploreIcon color="action" className="icon" />
              <p>Explore</p>
            </div>
            <div
              className={`sidelinks account ${category === 0 ? "active" : ""} `}
              onClick={() => setCategory(0)}
            >
              <SubscriptionsIcon color="action" className="icon icon10" />
              <p>Subscriptions</p>
            </div>
            <hr />

            <div
              className={`sidelinks ${category === 0 ? "active" : ""} `}
              onClick={() => setCategory(0)}
            >
              <LibraryAddIcon color="action" className="icon" />
              <p>Library</p>
            </div>
            <div
              className={`sidelinks ${category === 0 ? "active" : ""} `}
              onClick={() => setCategory(0)}
            >
              <HistoryIcon color="action" className="icon " />
              <p>History</p>
            </div>
            <hr />

            <div className="account">
              <h3 className="text1">
                Sign in to like videos, comment and subscribe
              </h3>
              <div className="button flex-div sign">
                <div className="search-box flex-div">
                  <AccountCircleIcon className="icon1" />
                  <p className="text">SignIn</p>
                </div>
              </div>
            </div>

            <hr />

            <div
              className={`sidelinks account ${category === 20 ? "active" : ""} `}
              onClick={() => setCategory(20)}
            >
              <SportsEsportsIcon color="action" className="icon" />
              <p>Gaming</p>
            </div>
            <div
              className={`sidelinks ${category === 23 ? "active" : ""} `}
              onClick={() => setCategory(23)}
            >
              <WhatshotIcon color="action" className="icon" />
              <p>Trending</p>
            </div>
            <div
              className={`sidelinks account ${category === 10 ? "active" : ""} `}
              onClick={() => setCategory(10)}
            >
              <LibraryMusicIcon color="action" className="icon" />
              <p>Music</p>
            </div>
            <div
              className={`sidelinks account ${category === 24 ? "active" : ""} `}
              onClick={() => setCategory(24)}
            >
              <CameraRollIcon color="action" className="icon" />
              <p>Entertainment</p>
            </div>
            <div
              className={`sidelinks account ${category === 25 ? "active" : ""} `}
              onClick={() => setCategory(25)}
            >
              <NewspaperIcon color="action" className="icon" />
              <p>News</p>
            </div>
            <hr />
          </div>
          <div className="subscribed-list">
            <h3>Subscriptions</h3>
            <div
              className={`sidelinks account ${category === 0 ? "active" : ""} `}
              onClick={() => setCategory(0)}
            >
              <img src={jack} alt="" />
              <p>PewDiePie</p>
            </div>
            <div
              className={`sidelinks account ${category === 0 ? "active" : ""} `}
              onClick={() => setCategory(0)}
            >
              <img src={simon} alt="" />
              <p>MrBeast</p>
            </div>
            <div
              className={`sidelinks account ${category === 0 ? "active" : ""} `}
              onClick={() => setCategory(0)}
            >
              <img src={tom} alt="" />
              <p>Justin Bieber</p>
            </div>
            <div
              className={`sidelinks account ${category === 0 ? "active" : ""} `}
              onClick={() => setCategory(0)}
            >
              <img src={megan} alt="" />
              <p>5-Minute crafts</p>
            </div>
            <div
              className={`sidelinks account ${category === 0 ? "active" : ""} `}
              onClick={() => setCategory(0)}
            >
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
