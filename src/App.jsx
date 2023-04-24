import { React, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Landing from './pages/Landing';
import About from './pages/About';
import { Context, initial } from './context.js';

function App() {
  const [activeTab, setActiveTab] = useState(initial.activeTab);

  const getters = {
    activeTab,
  }

  const setters = {
    setActiveTab
  }

  return (
   <div>
    <Context.Provider value={{ getters, setters }}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/signup' element={<SignUp />}></Route> */}
      </Routes>
    </BrowserRouter>
    </Context.Provider>
   </div>
  );
}

export default App;

