import React, { useState } from "react";
import ProfileTape from "./ProfileTape";

const Profile = ({ showProfile, setShowProfile, setShowMain }) => {
  const [selectedTape, setSelectedTape] = useState(null);
  return (
    <div className={`profile ${!showProfile && "hide"}`}>
      <button
        className='hide'
        onClick={() => {
          setShowProfile(false);
          setSelectedTape(null);
        }}
      >
        <i className='fas fa-chevron-right'></i>
      </button>
      <h3>My profile</h3>
      <img
        className='profile'
        src={process.env.PUBLIC_URL + "/assets/images/profile.png"}
      ></img>
      <h1>Will Mondal</h1>
      <h2>@willmondal</h2>
      <p>
        Listens <span>145,000</span>
      </p>
      <p>
        My mixtapes <span>20</span>
      </p>
      <button className='edit'>Edit</button>
      <div className='tapes'>
        {[1, 1, 1].map((x, i) => (
          <ProfileTape
            index={i}
            selectedTape={selectedTape}
            setSelectedTape={setSelectedTape}
            setShowMain={setShowMain}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
