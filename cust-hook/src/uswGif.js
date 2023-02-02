import { useState, useEffect } from "react";

import axios from "axios";
const API_KEY = "6O8j4Uhh25pyeYKGriIVHgjMad3SZys8";

export default function useGif(tag) {
  const [gif, setGif] = useState("");
  // console.log(API_KEY);
  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    console.log(data);
    const imgSrc = data.data.images.downsized_medium.url;
    console.log(imgSrc);
    setGif(imgSrc);
  };
  useEffect(() => {
    fetchGif(tag);
  }, [tag]);

  return { gif, fetchGif };
}
