import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles.css'
import Home from './pages/Home';
import Services from './pages/Services';
import NotFound from './pages/NotFound';
import Team from './pages/Team';
import Confirmation from './pages/Confirmation';
import Booking1 from './pages/Booking1';
import Booking2 from './pages/Booking2';
import Header from './components/Header';
const basename = import.meta.env.BASE_URL;

function App() {
  return (
    <Router basename={basename}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/booking1" element={<Booking1 />} />
        <Route path="/booking2" element={<Booking2 />} />
        <Route path="/thank-you" element={<Confirmation/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
