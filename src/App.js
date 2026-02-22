import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArticleList from './pages/ArticleList';
import ArticleDetail from './pages/ArticleDetail';
import Contact from './pages/Contact';
import MaintenancePage from './pages/MaintenancePage';

// ========================================
// MAINTENANCE MODE TOGGLE
// Set true  = tampilkan halaman maintenance
// Set false = tampilkan halaman asli
// ========================================
const MAINTENANCE_MODE = true;

function App() {
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/article/:slug" element={<ArticleDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;