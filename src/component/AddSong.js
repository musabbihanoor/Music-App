import React from "react";

const AddSong = ({ setAddSong, setShow, setVersion }) => {
  return (
    <div className='absolute'>
      <div className='absolute-content add-song'>
        <button className='absolute-close' onClick={() => setAddSong(false)}>
          <i className='fas fa-times-circle'></i>
        </button>
        <h1>New mixtape</h1>
        <img src={process.env.PUBLIC_URL + "/assets/images/casset.png"}></img>
        <span>
          <button
            onClick={() => {
              setShow("playlist");
              setVersion("spotify");
              setAddSong(false);
            }}
          >
            Import from{" "}
            <img
              src={process.env.PUBLIC_URL + "/assets/images/spotify.png"}
            ></img>
          </button>
          <button
            onClick={() => {
              setShow("playlist");
              setVersion("apple");
              setAddSong(false);
            }}
          >
            Import from{" "}
            <img
              src={process.env.PUBLIC_URL + "/assets/images/music.jpg"}
            ></img>
          </button>
        </span>
        <p>or</p>
        <form>
          <input placeholder='Title' />
          <input placeholder='Description (optional)' />
          <button>Add songs</button>
        </form>
      </div>
    </div>
  );
};

export default AddSong;
