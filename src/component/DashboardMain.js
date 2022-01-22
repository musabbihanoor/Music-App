import React from "react";
import { ListItem } from "./Song";

const DashboardMain = ({ showProfile, showSong, setShowSong }) => {
  return (
    <>
      <div style={{ marginTop: 15, display: "flex" }}>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/single-caset.png"}
          />

          <div>
            <span>517 saves &#8231; 732 plays</span>
          </div>
          <div className='edit-container' style={{ marginTop: 10 }}>
            <div className='edit-container'>
              <button className='edit-play-botton'>edit</button>
              <img
                style={{ width: 30 }}
                src={process.env.PUBLIC_URL + "/assets/images/dotWhite.png"}
              />
            </div>
            <img
              style={{ width: 30 }}
              src={process.env.PUBLIC_URL + "/assets/images/play-button.png"}
            />
          </div>
        </div>
        <div>
          {!showSong && (
            <div className='photo-list-container'>
              {[1, 2, 3, 4].map((t, i) => (
                <div style={{ marginRight: 10, display: "grid" }}>
                  <img
                    className='photo-list'
                    src={
                      process.env.PUBLIC_URL + "/assets/images/Recruitments.jpg"
                    }
                  />

                  {i === 0 && <label>4 Photos</label>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={`song-list ${showProfile && "slide-left"} `}>
        {[1, 1, 1, 1, 1, 1, 1, 1].map((t) => (
          <ListItem setShowSong={setShowSong} />
        ))}
      </div>

      <div className={`bottom-overlay ${showSong && "slide-up"}`}>
        <button
          className='absolute-close'
          style={{ right: "70px" }}
          onClick={() => setShowSong(false)}
        >
          <i className='fas fa-times'></i>
        </button>
        <div className='photo-list-container'>
          {[1, 2, 3, 4].map((t, i) => (
            <div style={{ marginRight: 10, display: "grid" }}>
              <img
                className='photo-list'
                src={process.env.PUBLIC_URL + "/assets/images/Recruitments.jpg"}
              />

              {i === 0 && <label>4 Photos</label>}
            </div>
          ))}
        </div>
        <div className='played-song-container'>
          <img
            className='list-image'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjlmb-CiJgu_VkV24jxxNe9UxvOBzXCm72pw&usqp=CAU'
          />
          <div className='list-meta'>
            <label>Song Name</label>
            <label>Artist</label>
          </div>
          <div className='white-bar' />
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
