import "./App.css";

let counter = 0;
// pass in the state "setResponse parameter" so we can use it in the function.
function TheButton({ setResponse }) {
  // This is an array we are using to setResponse to.
  var HeaderResponse = [
    "WOW!!!",
    "Do that again!",
    "One More Time",
    "Another...",
    "Ok, one last time.",
    "CLICK AGAIN!!!",
    "Im a Webpage!",
    "Buttons are fun arnt they?",
    "Sweet!",
    "Once more then...",
    "Ok last time seriously.",
  ];
// main fucntion to run when button is clicked.
  function textHanldler() {
    // set response to the above array with a "counter" index.
    setResponse(HeaderResponse[counter]);
    // after some time, set response back to default.
    setTimeout(() => {
      setResponse("Please Click Again!");
    }, 1000);

    counter++;
    // reset counter if it gets too high
    if (counter > HeaderResponse.length) {
      counter = 0;
    }
  }

  return (
    <div className="TheButtonDiv">
      <button onClick={textHanldler} className="TheButton">
        Click Me!
      </button>
    </div>
  );
}

export default TheButton;
