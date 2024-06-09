import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles.css'
import Home from './pages/Home';
import Services from './pages/Services';
import NotFound from './pages/NotFound';
import Team from './pages/Team';
import Confirmation from './pages/Confirmation';
import ConfirmationFollowup from './pages/ConfirmationFollowUp';
import Booking1 from './pages/Booking1';
import Booking2 from './pages/Booking2';
import CurrentPatients from './pages/CurrentPatients';
import BookingFollowUp from './pages/BookingFollowUp';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
const basename = import.meta.env.BASE_URL;

function App() {
  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/curr" element={<CurrentPatients />} />
        <Route path="/booking1" element={<Booking1 />} />
        <Route path="/booking2" element={<Booking2 />} />
        <Route path="/follow-up" element={<BookingFollowUp />} />
        <Route path="/thank-you" element={<Confirmation/>} />
        <Route path="/thank-you-followup" element={<ConfirmationFollowup/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
