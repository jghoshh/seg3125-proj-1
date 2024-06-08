import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/styles.css'
import Home from './pages/Home';
import Services from './pages/Services';
import NotFound from './pages/NotFound';
import Team from './pages/Team';
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
