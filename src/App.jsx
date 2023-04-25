import { React, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { Context, initial } from './context.js';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects.jsx';

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
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
    </Context.Provider>
   </div>
  );
}

export default App;
