import React from "react";

export const ListItem = ({ setShowSong }) => {
  return (
    <div className='list-container' onClick={() => setShowSong(true)}>
      <img
        className='list-image'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjlmb-CiJgu_VkV24jxxNe9UxvOBzXCm72pw&usqp=CAU'
      />
      <div className='list-meta-container'>
        <div className='list-meta'>
          <label>Song Name</label>
          <label>Artist</label>
        </div>
        <div className='list-icons-container'>
          {/* <img
            style={{ width: 20, marginRight: 20 }}
            src={process.env.PUBLIC_URL + "/assets/images/heart.png"}
          /> */}
          <button>
            <i className='fas fa-heart'></i>
          </button>
          <img
            style={{ width: 20 }}
            src={process.env.PUBLIC_URL + "/assets/images/dot.png"}
          />
        </div>
      </div>
    </div>
  );
};
