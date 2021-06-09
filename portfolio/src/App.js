import React from 'react';
// Global style
import GlobalStyle from './components/GlobalStyles';
// import Pages
import Nav from './components/Nav';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
// Router
import {Switch, Route, useLocation } from 'react-router-dom';
// Animation
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/work">
            <MyWork />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
          <Route exact path="/">
            <AboutMe />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
