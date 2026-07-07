import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Practices from './pages/Practices';
import AttorneysPage from './pages/AttorneysPage';
import ContactPage from './pages/ContactPage';
import PracticeDetail from './pages/PracticeDetail';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<Practices />} />
            <Route path="/practice-areas/:slug" element={<PracticeDetail />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/attorneys" element={<AttorneysPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
