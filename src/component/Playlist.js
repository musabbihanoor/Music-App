import React from "react";

const Playlist = () => {
  return (
    <div className='playlist'>
      <div className='details'>
        <img
          src='https://i.pinimg.com/474x/6d/30/e0/6d30e0df42859050ee053e68489465ae.jpg'
          alt='playlist'
        />
        <div className='info'>
          <h2>playlist</h2>
          <h1>My Playlist #1</h1>
          <span>
            <img
              src='https://upload.wikimedia.org/wikipedia/en/d/da/Alan_Walker_-_Faded.png'
              alt='user'
            />
            <p>
              Wasif Khan. 9 songs, <span> 26 min 34 sec</span>
            </p>
          </span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>album</th>
            <th>date added</th>
            <th>
              <i className='fas fa-clock'></i>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {[0, 0, 0, 0, 0].map((x) => (
            <tr>
              <td>1</td>
              <td>
                <span>
                  <img
                    src='https://m.media-amazon.com/images/I/515JslrYkjL._AC_.jpg'
                    alt='song'
                  />
                  <div>
                    <h3>Faded</h3>
                    <h4>Alan Walker</h4>
                  </div>
                </span>
              </td>
              <td>Different World</td>
              <td>10 days ago</td>
              <td>3:32</td>
              <td>
                <button>ADD</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Playlist;
