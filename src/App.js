import logo from './logo.svg';
import './App.css';
import Header from "./component/header";
import Footer from "./component/Footer";
import Home from "./component/Home";
import About from "./component/About";
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div className={"body"}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
