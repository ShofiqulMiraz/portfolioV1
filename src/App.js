import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/main-components/contact/contact";
import Header from "./components/main-components/header/header";
import Nav from "./components/main-components/nav/nav";
import Portfolio from "./components/main-components/portfolio/portfolio";
import Services from "./components/main-components/services/services";
import Skills from "./components/main-components/skills/skills";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Header}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/skills" component={Skills}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
