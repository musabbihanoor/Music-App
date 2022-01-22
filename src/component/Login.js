import React from "react";

const Login = () => {
  return (
    <div className='login'>
      <h1>MIXT</h1>
      <h2>SignUp</h2>
      <button>
        <a href='/dashboard'>Connect</a>
        <img src={process.env.PUBLIC_URL + "/assets/images/spotify.png"} />
      </button>
      <button>
        <a href='/dashboard'>Connect</a>
        <img src={process.env.PUBLIC_URL + "/assets/images/music.jpg"} />
      </button>
      <div className='bottom-img'>
        <img src={process.env.PUBLIC_URL + "/assets/images/cassets.png"} />
      </div>
    </div>
  );
};

export default Login;
