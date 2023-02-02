import React, { useState, useEffect } from "react";
import "../styles.css";
import axios from "axios";
const API_KEY = "6O8j4Uhh25pyeYKGriIVHgjMad3SZys8";

export default function Tag() {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("dogs");
  // console.log(API_KEY);
  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    console.log(data);
    const imgSrc = data.data.images.downsized_medium.url;
    console.log(imgSrc);
    setGif(imgSrc);
  };
  useEffect(() => {
    fetchGif(tag);
  }, []);
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
