import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './styles/styles.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Blog from './components/Blog';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Events" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;