import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>

          <Route
            path="/Checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          ></Route>

          <Route
            path="/"
            element={
              <div>
                <Header /> <Home />
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
