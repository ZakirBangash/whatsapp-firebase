import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Routes>
          <Route path="/" element={<Sidebar />} />

          <Route
            path=":slug"
            element={
              <>
                <Sidebar />
                <Chat />
              </>
            }
          />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
