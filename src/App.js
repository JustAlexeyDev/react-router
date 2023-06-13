import './css/style.css'

import { Link, Routes, Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import News from './components/News';
import About from './components/About';

export default function Appp() {
  return (
    <div>
      <div class='nav-bar'>
        <Link to="/Home"><button class='btn_nav'>Home</button></Link>
        <Link to="/News"><button class='btn_nav'>News</button></Link>
        <Link to="/About"><button class='btn_nav'>About</button></Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="News" element={<News />} />
        <Route path="About" element={<About />} />
      </Routes>
    </div>
  );
}