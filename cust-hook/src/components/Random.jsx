import React, { useState, useEffect } from "react";
import "../styles.css";
import axios from "axios";
const API_KEY = "6O8j4Uhh25pyeYKGriIVHgjMad3SZys8";

export default function Random() {
  const [gif, setGif] = useState("");
  // console.log(API_KEY);
  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    console.log(data);
    const imgSrc = data.data.images.downsized_medium.url;
    console.log(imgSrc);
    setGif(imgSrc);
  };
  useEffect(() => {
    fetchGif();
  }, []);
  const handleClick = () => {
    fetchGif();
  };
  return (
    <div className="random">
      <h1>Random</h1>
      <img width="500" src={gif} alt="random-gif" />
      <button onClick={handleClick}>Click to new</button>
    </div>
  );
}
