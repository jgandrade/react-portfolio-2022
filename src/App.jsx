import React, { useState, useEffect } from 'react';
import Projects from './components/Projects';
import About from "./components/About";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import SideLinks from "./components/SideLinks";
import Loading from './components/Loading';
import OtherProjects from './components/OtherProjects';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true);
  console.log(import.meta.env.VITE_APP_SECRET_MESSAGE);

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
        <OtherProjects />
        <Tools />
        <Contact />
        <Footer />
      </div>
  )
}

export default App;
