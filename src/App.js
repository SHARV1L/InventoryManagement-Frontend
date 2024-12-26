import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ItemList from './components/ItemList';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Landing Page*/}
        <Route path = '/' element={<LandingPage/>} />

        {/* Route for Landing Page*/}
        <Route path = '/items' element={<ItemList/>} />
      </Routes>
    </Router>
  );
}

export default App;