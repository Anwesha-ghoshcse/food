import React from "react";
import {Routes,Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  Home  from "./pages/Home";
import  About from "./pages/About";
import  Contact from "./pages/Contact";
import  Menu from "./pages/Menu";
import  NotFound from "./pages/NotFound";

const App=()=> {
  return (
    <>
     
     <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/contact" Component={Contact} />
            <Route exact path="/menu" Component={Menu} />
            <Route exact path="/about" Component={ About} />
           
            <Route path="*" Component={NotFound}/>
         </Routes>
     
    </>
  );
}

export default App;
