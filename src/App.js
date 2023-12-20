import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Loginform from './components/Loginform';
function App() {
  return (
    <div className="App">
            <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Loginform" element={<Loginform />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
