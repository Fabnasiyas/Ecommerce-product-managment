import React, { useEffect } from "react";
import axios from "./utils/axios.js";
import SignUp from './components/Signup.jsx'
import SignIn from './components/Signin.jsx'
import Home from './components/Home.jsx'
import ViewProduct from './components/ViewProducetDetails.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
 

  return (
    <>
    <Provider store={store}>
    <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/home/viewproductdetails/:productId" element={<ViewProduct />} />


        </Routes>
      </Router>
      <ToastContainer position="top-center" />
      </Provider>
    </>
  );
}

export default App;
