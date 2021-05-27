import React from 'react';
// Global style
import GlobalStyle from './components/GlobalStyles';
// import Pages
import Nav from './components/Nav';
import AboutMe from './pages/AboutMe';
import MyWork from './pages/MyWork';
import ContactMe from './pages/ContactMe';
import ProjectDetails from './pages/ProjectDetails';
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
          <Route exact path="/work/:id">
            <ProjectDetails />
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
