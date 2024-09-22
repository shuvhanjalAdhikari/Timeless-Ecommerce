import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/login-bg.png'
import Navbar from './components/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import Signin from './components/Signin';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from './components/Footer';

function App() {

const Router = createBrowserRouter([
  {
    path:"/",
    element:<><Navbar /><Home/><Footer/></>
  },
 
  {
    path:"/login",
    element:<><Login/></>
  },
  {
    path:"/Signin",
    element:<><Signin/></>
  },
  {
    path:"/About",
    element:<><Navbar /><About/></>
  },
  {
    path:"/Contact",
    element:<><Navbar /><Contact/></>
  },
 
  {
    path:"/User/:username",
    element:<><Navbar /><User/></>
  },
  
])
 

  return (
    
      <>
      
      <RouterProvider router={Router}/>
      </>
    
  );
}

export default App
