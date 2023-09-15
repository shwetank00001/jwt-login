import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" component={<Signup/>} />
        <Route path="/login" component={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
