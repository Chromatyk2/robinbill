import logo from './logo.svg';
import './App.css';
import Header from "./component/header";
import Footer from "./component/Footer";
import Project from "./component/Project";
import Home from "./component/Home";
import About from "./component/About";
import React, {useEffect, useState} from 'react';
import { HashRouter as Router , Route, Routes} from "react-router-dom";
import Portfolio from "./component/Portfolio";
import { useLocation } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <div className={"body"}>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/portfolio" element={<Portfolio />}/>
                    <Route path="/projet" element={<Project />}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    </div>
  );
}

export default App;
