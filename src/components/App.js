import React from "react";
import Main from "./Main";
import Header from "./Header";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Episode from "./Episode";
import Character from "./Character";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/main" />} />
        <Route path="/main" element={<Main />} />
        <Route exact path="main/:s/:e" element={<Episode />} />
        <Route exact path="main/:s/:e/:c" element={<Character />} />
        <Route path="*" component={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
