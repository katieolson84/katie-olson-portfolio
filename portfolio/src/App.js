import React from 'react';
// import Pages
import AboutMe from './Pages/AboutMe';
import Nav from './components/Nav';
// Global style
import GlobalStyle from './components/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutMe />
    </div>
  );
}

export default App;
