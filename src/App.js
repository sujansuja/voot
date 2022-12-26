import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import axios from 'axios';
import { resolveMotionValue } from 'framer-motion';

function App() {

  // https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=Asia%2FBangkok

  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route strict exact path='/home' element={<Home />} />
          <Route strict exact path='/contact' element={<Contact />} />
          <Route strict exact path='/about' element={<About />} />
          <Route strict exact path='/' element={<h1>Hello</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
