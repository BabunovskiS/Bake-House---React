import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from "./components/layouts/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

// Router
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Menu from "./components/pages/Menu";
import OurStory from "./components/pages/OurStory";
import ThaiCurryPost from "./components/pages/ThaiCurryPost";



class App extends Component{
  render() {
    return (
        <div className="App">
            <Navbar/>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/aboutUs" element={<AboutUs />}/>
                    <Route path="/blog" element={<Blog />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="/menu" element={<Menu />}/>
                    <Route path="/our-story" element={<OurStory />}/>
                    <Route path="/thai-curry" element={<ThaiCurryPost />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </Router>
            <Footer/>
        </div>
    )
  }
}

export default App;
