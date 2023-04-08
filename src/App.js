import React from 'react'
import './Style/App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


const App = () => {
    return (
        <>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="*" element={<div><h1>Page not found 404</h1></div>}/>
            </Routes>
        </Router>
        </>
    )
}

export default App
