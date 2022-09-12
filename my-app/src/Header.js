import "./App.css";
// pass in the state "response parameter" so we can use it in the function.
function Header({ response }) {
  return (
    <div className="TheHeader">
      {/* "resoponse"" is whatever we set it to in the App function! */}
      <h1>{response}</h1>
    </div>
  );
}

export default Header;
