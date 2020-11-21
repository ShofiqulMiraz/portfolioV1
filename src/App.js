import React, { useEffect } from "react";
import Contact from "./components/main-components/contact/contact";
import Header from "./components/main-components/header/header";
import Nav from "./components/main-components/nav/nav";
import Portfolio from "./components/main-components/portfolio/portfolio";
import Services from "./components/main-components/services/services";
import Skills from "./components/main-components/skills/skills";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      <Nav />
      <Header />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
