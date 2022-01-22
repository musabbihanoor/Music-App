import React from "react";

const DashboardSearch = ({ showProfile, setShowMain }) => {
  return (
    <div className={`dashboard-search ${showProfile && "slide-left"} `}>
      <button onClick={() => setShowMain(true)}>
        <i className='fas fa-long-arrow-alt-left'></i>
      </button>
      <h1>Mixtapes</h1>
      <div className='tapes'>
        <img src={process.env.PUBLIC_URL + "/assets/images/singleCaset.png"} />
        <img src={process.env.PUBLIC_URL + "/assets/images/singleCaset.png"} />
        <img src={process.env.PUBLIC_URL + "/assets/images/singleCaset.png"} />
        <img src={process.env.PUBLIC_URL + "/assets/images/singleCaset.png"} />
        <img src={process.env.PUBLIC_URL + "/assets/images/singleCaset.png"} />
        <img src={process.env.PUBLIC_URL + "/assets/images/singleCaset.png"} />
        <img src={process.env.PUBLIC_URL + "/assets/images/singleCaset.png"} />
        <img src={process.env.PUBLIC_URL + "/assets/images/singleCaset.png"} />
      </div>
      <h1>Profile</h1>
      <div className='profiles'>
        <div className='item'>
          <img src={process.env.PUBLIC_URL + "/assets/images/profile.png"} />
          <p>RAF</p>
        </div>
        <div className='item'>
          <img src={process.env.PUBLIC_URL + "/assets/images/profile.png"} />
          <p>Malex Lange</p>
        </div>
        <div className='item'>
          <img src={process.env.PUBLIC_URL + "/assets/images/profile.png"} />
          <p>Mooch</p>
        </div>
        <div className='item'>
          <img src={process.env.PUBLIC_URL + "/assets/images/profile.png"} />
          <p>Cameron</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSearch;
