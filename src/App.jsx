import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/layout';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

function App() {


  return (
  
    <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  </Router>

   );

}

export default App;

