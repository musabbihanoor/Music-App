import React, { Fragment, useState } from "react";
import AddSong from "./AddSong";
import Profile from "./Profile";
import DashboardMain from "./DashboardMain";
import { ListItem } from "./Song";
import DashboardSearch from "./DashboardSearch";

export const Dashboard = () => {
  const [addSong, setAddSong] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMain, setShowMain] = useState(true);
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

          <button className='setting'>
            <i className='fas fa-cog'></i>
          </button>
        </aside>

        <section className='body-section'>
          <div className='search-container-app'>
            <input
              value={""}
              onChange={(e) => console.log(e)}
              className='search-feild'
              placeholder='Search'
            />
            <div className='search-container'>
              <img
                className='search-icon'
                src={process.env.PUBLIC_URL + "/assets/images/search.png"}
              />
            </div>
            <div className='filter-container'>
              <img
                className='search-icon'
                src={process.env.PUBLIC_URL + "/assets/images/filter.png"}
              />
            </div>
          </div>
          {showMain ? (
            <DashboardMain
              showProfile={showProfile}
              showSong={showSong}
              setShowSong={setShowSong}
            />
          ) : (
            <DashboardSearch
              showProfile={showProfile}
              setShowMain={setShowMain}
            />
          )}
        </section>
      </section>

      {addSong && <AddSong setAddSong={setAddSong} />}
      <Profile
        showProfile={showProfile}
        setShowProfile={setShowProfile}
        setShowMain={setShowMain}
      />
    </Fragment>
  );
};
