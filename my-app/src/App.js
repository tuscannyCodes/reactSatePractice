import "./App.css";
import Header from "./Header.js";
import Button from "./TheButton.js";

// importing state from the react library
import { useState } from "react";

// Main function for the app component
function App() {
  // setting up state here
  const [response, setResponse] = useState("Click my button!");

  return (
    <div className="App">
      {/* Passing state variables to components*/}
      <Header response={response} />
      <Button setResponse={setResponse} />
    </div>
  );
}

export default App;
