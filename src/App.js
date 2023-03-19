import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useImperativeHandle, useState } from 'react';
import axios, { Axios } from 'axios';
import { Navbar } from './Components/Navbar';
import { SearchBar } from './Components/Search';
import { BookCard } from './Components/BookCard';
import React from "react";
import BookState from './Context/BookDetails';
import { Login } from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegisterForm } from './Components/RegisterForm';


function App() {

  return (
    <BookState>
    <div className="App">
    
    <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
            <Route path="/store" element={<><SearchBar/><BookCard/></>} />
            <Route path="/register" element={<RegisterForm/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
    </BookState>
    
  );
}

export default App;
