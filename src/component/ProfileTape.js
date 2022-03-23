import React, { useState } from "react";

const ProfileTape = ({ index, selectedTape, setSelectedTape, setShow }) => {
  return (
    <div
      className={`item ${selectedTape === index && "selected"}`}
      onClick={() => {
        setSelectedTape(index);
        setShow("search");
      }}
    >
      <hr />
      <img src={process.env.PUBLIC_URL + "/assets/images/single-caset.png"} />
    </div>
  );
};

export default ProfileTape;
