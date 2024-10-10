import logo from './logo.svg';
import './App.css';
import Header from "./component/header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import About from "./component/About";
import React, {useEffect, useState} from 'react';
import { HashRouter , Route, Routes} from "react-router-dom";
import Portfolio from "./component/Portfolio";

function App() {
  return (
    <div className="App">
        <div className={"body"}>
            <HashRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/portfolio" element={<Portfolio />}/>
                </Routes>
                <Footer/>
            </HashRouter>
        </div>
    </div>
  );
}

export default App;
