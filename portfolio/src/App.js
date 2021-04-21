import React from 'react';
// import Pages
import AboutMe from './Pages/AboutMe';
import Nav from './components/Nav';
import ContactMe from './Pages/ContactMe';
import MyWork from './Pages/MyWork';
// Global style
import GlobalStyle from './components/GlobalStyles';
// Router
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Switch>
        <Route path="/work">
          <MyWork />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
        <Route exact path="/">
          <AboutMe />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
