import { useEffect, useState } from "react";
import './App.css';
import { Switch, Route, useNavigate, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import ScrollButton from "./component/ScrollButton";
import Landing from "./pages/Landing";

function App() {

  const navigate = useNavigate();

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Landing/>} />
      </Routes>
      <ScrollButton/>
      <Footer/>

    </>

  );
}

export default App;
