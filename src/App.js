// import styles
import './css/style.css'
// import react router components
import { Link, Routes, Route } from 'react-router-dom';

// Components
import Home from './components/Home';
import News from './components/News';
import About from './components/About';

export default function App() {
  return (
    <div>
    // Visibly navigation
      <div class='nav-bar'>
        <Link to="/Home"><button class='btn_nav'>Home</button></Link>
        <Link to="/News"><button class='btn_nav'>News</button></Link>
        <Link to="/About"><button class='btn_nav'>About</button></Link>
      </div>
    
    // Pages that will be visible when switching
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="News" element={<News />} />
        <Route path="About" element={<About />} />
      </Routes>
    </div>
  );
}
