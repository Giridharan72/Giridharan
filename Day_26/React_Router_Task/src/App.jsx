import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Full_stack_Development from './Full_stack_Development';
import Data_Science from './Data_Science';
import Career from './Career';
import './Home.css';
import Cyber_Security from './Cyber_Security';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="extra-column"></div>
        <div className="flex-row">
          <div className="column"></div>
          <nav>
            <Link to="/">All</Link>
            <Link to="/Full_stack_Development">Full stack Development</Link>
            <Link to="/Data_Science">Data Science</Link>
            <Link to="/Cyber_Security">Cyber Security</Link>
            <Link to="/Career">Career</Link>
          </nav>
          <div className="column"></div>
        </div>
        <div className="extra-column"></div>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Full_stack_Development" element={<Full_stack_Development />} />
          <Route path="/Data_Science" element={<Data_Science />} />
          <Route path="/Cyber_Security" element={<Cyber_Security />} />
          <Route path="/Career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
