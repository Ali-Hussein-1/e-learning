import "./App.css";
import SignIn from "./components/SignIn";
import AdminPage from "./components/AdminPage";
import InstructorPage from "./components/InstructorPage";
import AddUser from "./components/AddUser";
import EditPage from "./components/EditPage";


function App() {
  return (
    <>
      {" "}
      <div className="App">
        <SignIn/>
      </div>
      <div className="App">
        <AdminPage/>
      </div>
      {/* <div className="App">
        <AddPage/>
      </div> */} 
      {/* <div className="App">
        <AddUser/>
      </div> */}
      <div className="App">
        <InstructorPage/>
      </div>
    </>
  );
}

export default App;