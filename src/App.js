import logo from "./logo.svg";
import "./App.css";
import Login from "./login";
import Profile from "./profile";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Register from "./Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="login" element={<Login></Login>} />
          <Route path="register" element={<Register></Register>} />
          <Route path="profile" element={<Profile></Profile>} />
        </Routes>
      </BrowserRouter>
      
      
    </>
  );
}

export default App;
