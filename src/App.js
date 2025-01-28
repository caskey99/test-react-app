import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Article from './components/pages/Article/Article';
import Blog from './components/Blog/Blog';

const App = () => (
  <Router>
    <Header />
    <div style={contentStyle}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

const contentStyle = {
  width: '80%',
  margin: '20px auto',
};


export default App;
