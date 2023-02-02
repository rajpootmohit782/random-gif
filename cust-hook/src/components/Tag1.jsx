import React, { useState } from "react";
import "../styles.css";
import useGif from "../uswGif";

export default function Tag1() {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGif } = useGif(tag);
  // console.log(API_KEY);

  const handleClick = (tag) => {
    fetchGif(tag);
  };
  return (
    <div className="random">
      <h1>Random {tag}</h1>
      <h1>Tag search</h1>
      <img width="500" src={gif} alt="random-gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={handleClick}>Click to new</button>
    </div>
  );
}
