import React, { Fragment, useState } from "react";
import AddSong from "./AddSong";
import Profile from "./Profile";
import DashboardMain from "./DashboardMain";
import { ListItem } from "./Song";
import DashboardSearch from "./DashboardSearch";
import Playlist from "./Playlist";
import PlaylistList from "./PlaylistList";

export const Dashboard = () => {
  const [addSong, setAddSong] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [show, setShow] = useState("playlist");
  const [showSong, setShowSong] = useState(false);

  return (
    <Fragment>
      <section className='dashboard-container'>
        <aside className='dashboard-aside'>
          <div className='option-container side-image-container'>
            <img
              onClick={() => setShowProfile(true)}
              className='side-image'
              src={process.env.PUBLIC_URL + "/assets/images/profile.png"}
            />
          </div>
          <div className='option-container '>
            <button
              className='side-button cursor-pointer'
              onClick={() => setAddSong(true)}
            >
              <i className='fas fa-plus'></i>
            </button>
          </div>

          <div className='option-container side-button options-text'>
            <label className='options-text'>Saved</label>
          </div>

          <div className='option-container side-button options-text'>
            <label className='options-text'>Tagged</label>
          </div>

          {show === "playlist" && <PlaylistList />}

          <button className='setting'>
            <i className='fas fa-cog'></i>
          </button>
        </aside>

        <section className='body-section'>
          {show === "main" ||
            (show === "search" && (
              <div className='search-container-app'>
                <input
                  value={""}
                  onChange={(e) => console.log(e)}
                  className='search-feild'
                  placeholder='Search'
                />
                <div className='search-container'>
                  {/* <img
                className='search-icon'
                src={process.env.PUBLIC_URL + "/assets/images/search.png"}
              /> */}
                </div>
                <div className='filter-container'>
                  <img
                    className='search-icon'
                    src={process.env.PUBLIC_URL + "/assets/images/filter.png"}
                  />
                </div>
              </div>
            ))}
          {show === "playlist" && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <button onClick={() => setShow("main")} className='back'>
                <i className='fas fa-long-arrow-alt-left'></i>
              </button>
              <button className='apple'>
                <a href='#'>
                  Apple music
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/music.jpg"}
                  />
                </a>
              </button>
            </div>
          )}
          {show === "main" && (
            <DashboardMain
              showProfile={showProfile}
              showSong={showSong}
              setShowSong={setShowSong}
            />
          )}
          {show === "search" && (
            <DashboardSearch showProfile={showProfile} setShow={setShow} />
          )}
          {show === "playlist" && (
            <Playlist showProfile={showProfile} setShow={setShow} />
          )}
        </section>
      </section>

      {addSong && <AddSong setAddSong={setAddSong} />}
      <Profile
        showProfile={showProfile}
        setShowProfile={setShowProfile}
        setShow={setShow}
      />
    </Fragment>
  );
};
