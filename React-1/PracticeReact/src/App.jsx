import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function onclickbutton() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={onclickbutton}>count={count}</button>
    </div>
  );
}

export default App;
