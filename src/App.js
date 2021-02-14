import "./App.css";
import Sidebar from "./Twitter/Sidebar/Sidebar";
import Feed from "./Twitter/Feed/Feed";
import Widget from "./Twitter/Widget/Widget";
function App() {
  return (
    <>
      <div className="App">
        {" "}
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </>
  );
}

export default App;
