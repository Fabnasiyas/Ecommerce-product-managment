import React, { useEffect } from "react";
import axios from "./utils/axios.js";
import SignUp from './components/Signup.jsx'
import SignIn from './components/Signin.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";function App() {
  useEffect(() => {
    axios
      .get("/")
      .then((res) => {
        console.log(res.data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error); 
      });
  }, []); 

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
