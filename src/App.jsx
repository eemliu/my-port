import { React, useState, useRef } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { Context, initial } from './context.js';
import Landing from './pages/Landing';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [activeTab, setActiveTab] = useState(initial.activeTab);
  const [isDarkMode, setIsDarkMode] = useState(initial.isDarkMode);

  const getters = {
    activeTab,
    isDarkMode,
  }

  const setters = {
    setActiveTab, 
    setIsDarkMode,
  }
  
  return (
   <div>
    <Context.Provider value={{ getters, setters }}>
    <BrowserRouter>
      <Landing></Landing>
    </BrowserRouter>
    </Context.Provider>
   </div>
  );
}

export default App;
