
import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import NavbarComponent from './Components/NavbarComponent';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <NavbarComponent></NavbarComponent>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/AboutMe' element ={<AboutMe></AboutMe>}></Route>
        <Route path='Skills' element={<Skills></Skills>}></Route>
        <Route path='Projects' element={<Projects></Projects>}></Route>
        <Route path='Contact' element={<Contact></Contact>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
