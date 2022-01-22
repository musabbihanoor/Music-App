import React from "react";

const Login = () => {
  return (
    <div className='login'>
      <h1>MIXT</h1>
      <h2>SignUp</h2>
      <button>
        <a href='/dashboard'>
          Connect{" "}
          <img src={process.env.PUBLIC_URL + "/assets/images/spotify.png"} />
        </a>
      </button>
      <button>
        <a href='/dashboard'>
          Connect
          <img src={process.env.PUBLIC_URL + "/assets/images/music.jpg"} />
        </a>
      </button>
      <div className='bottom-img'>
        <img src={process.env.PUBLIC_URL + "/assets/images/casset.png"} />
      </div>
    </div>
  );
};

export default Login;
