import React, { useState } from "react";

const ProfileTape = ({ index, selectedTape, setSelectedTape, setShowMain }) => {
  return (
    <div
      className={`item ${selectedTape === index && "selected"}`}
      onClick={() => {
        setSelectedTape(index);
        setShowMain(false);
      }}
    >
      <hr />
      <img src={process.env.PUBLIC_URL + "/assets/images/singleCaset.png"} />
    </div>
  );
};

export default ProfileTape;
