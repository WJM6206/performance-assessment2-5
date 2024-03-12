import './App.css';
import React from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from ".././Home/Home";
import Images from ".././Images/Images";
import Places from ".././Places/Places";
import Contact from ".././contact/Contact";


function App() {
  return (
    <HashRouter>
      <div className='container'>
        <h1>William's Navy Days</h1>
        <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/places">Places</NavLink></li>
          <li><NavLink to="/images">Images</NavLink></li>          
          <li><NavLink to="/contact">Contact Me</NavLink></li>
        </ul>
        <div className="content"> 
          <Routes>           
            <Route exact path="/" Component={Home}/>
            <Route path="/places" Component={Places}/>
            <Route path="/images" Component={Images}/>            
            <Route path="/contact" Component={Contact}/>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}


export default App;
