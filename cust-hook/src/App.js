import Random from "./components/Random";
import Random1 from "./components/Random1";
import Tag from "./components/Tag";
import Tag1 from "./components/Tag1";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Random GIF App</h1>
      <div className="box">
        <Random1 />
        <Tag1 />
      </div>
    </div>
  );
}
