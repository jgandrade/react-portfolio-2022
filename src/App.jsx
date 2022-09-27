import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import SideLinks from "./components/SideLinks";

function App() {
  return (
    <div className="App">
      <SideLinks />
      <Nav />
      <Hero />
      <Intro />
    </div>
  )
}

export default App;
