import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Premium from './components/Premium';
import Sports from './components/Sports';
import Shows from './components/Shows';
import Movies from './components/Movies'
import Kids from './components/Kids'
import Channels from './components/Channels'
import Login from './components/Login';
import Footer from './components/Footer'
// import { resolveMotionValue } from 'framer-motion';

function App() {

  // https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=Asia%2FBangkok


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/voot/contact' element={<Contact />} />
          <Route path='/voot/about' element={<About />} />
          <Route path='/voot/premium' element={<Premium />} />
          <Route path='/voot/sports' element={<Sports />} />
          <Route path='/voot/shows' element={<Shows />} />
          <Route path='/voot/movies' element={<Movies />} />
          <Route path='/voot/kids' element={<Kids />} />
          <Route path='/voot/channels' element={<Channels />} />
          <Route path='/voot/login' element={<Login />} />
          <Route path='/voot/' element={<Home />} />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
