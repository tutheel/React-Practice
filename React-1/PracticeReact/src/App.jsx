import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button count={count} setCount={setCount}></Button>
      <Button count={count * 10} setCount={setCount}></Button>
      <Button count={count * 100} setCount={setCount}></Button>
    </div>
  );
}

function Button(props) {
  function onclickHandler() {
    // eslint-disable-next-line react/prop-types
    props.setCount(props.count + 1);
  }
  // eslint-disable-next-line react/prop-types
  return <button onClick={onclickHandler}>Counter {props.count}</button>;
}

export default App;
