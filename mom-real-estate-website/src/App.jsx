import Header from './Header.jsx'
import Footer from './Footer.jsx'
import BuyAndSell from './BuyAndSell.jsx'
import MeetAssel from './MeetAssel.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import BuyingProcess from './BuyingProcess';
// ...other imports

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/buying/process" element={<BuyingProcess />} />
        {/* Add more routes for your pages */}
      </Routes>
    </Router>
  );
}
export default App;