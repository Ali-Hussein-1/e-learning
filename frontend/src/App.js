import "./App.css";
import SignIn from "./components/SignIn";
import Button from "./components/Button";
import SidePanel from "./components/SidePanel";


function App() {
  return (
    <>
      {/* {" "}
      <div className="App">
        <SignIn/>
      </div> */}
      <div className="App">
        <SidePanel/>
      </div>
    </>
  );
}

export default App;