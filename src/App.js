
import './App.css';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

import NavbarComponent from './Components/NavbarComponent';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
