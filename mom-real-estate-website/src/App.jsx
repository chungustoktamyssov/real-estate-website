import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import BuyingProcess from './BuyingProcess.jsx'
import BuyingListings from './BuyingListings.jsx'
import SellingProcess from './SellingProcess.jsx'
import SellingEvaluation from './SellingEvaluation.jsx'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          {/* Each Route matches a URL path to a component */}
          <Route path="/home" element={<Home />} />
          <Route path="/buying/process" element={<BuyingProcess />} />
          <Route path="/buying/listings" element={<BuyingListings />} />
          <Route path="/selling/process" element={<SellingProcess />} />
          <Route path="/selling/evaluation" element={<SellingEvaluation />} />

          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;