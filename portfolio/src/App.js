import React from 'react';
// Global style
import GlobalStyle from './components/GlobalStyles';
// import Pages
import Nav from './components/Nav';
import AboutMe from './Pages/AboutMe';
import MyWork from './Pages/MyWork';
import ContactMe from './Pages/ContactMe';
// Router
import {Switch, Route} from 'react-router-dom';

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
