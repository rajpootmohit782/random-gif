import "../styles.css";
import useGif from "../uswGif";

export default function Random1() {
  const { gif, fetchGif } = useGif();
  // console.log(API_KEY);

  const handleClick = () => {
    fetchGif();
  };
  return (
    <div className="random">
      <h1>Tag search</h1>
      <img width="500" src={gif} alt="random-gif" />

      <button onClick={handleClick}>Click to new</button>
    </div>
  );
}
