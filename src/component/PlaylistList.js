import React, { useState } from "react";

const PlaylistList = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div>
      {[1, 1, 1, 1, 1].map((x, i) => (
        <p
          onClick={() => setSelected(i + 1)}
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: selected === i + 1 && "700",
            cursor: "pointer",
          }}
          key={i}
        >
          Playlist #{i + 1}
        </p>
      ))}
    </div>
  );
};

export default PlaylistList;
