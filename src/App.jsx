import React, { useState, useEffect } from 'react';
import Projects from './components/Projects';
import About from "./components/About";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import SideLinks from "./components/SideLinks";
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.getItem("loadingDone") ?
      setTimeout(() => {
        setLoading(false);
      }, 500)
      :
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem("loadingDone", true);
      }, 1500)

  }, []);

  return (
    loading
      ?
      <Loading />
      :
      <div className="App">
        <SideLinks />
        <Nav />
        <Hero />
        <Intro />
        <About />
        <Projects />
      </div>
  )
}

export default App;
