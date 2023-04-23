import { React, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
// import { Context, initial } from './context';
import Landing from './pages/Landing';
import About from './pages/About';

function App() {
  // const [tester, setTester] = useState(initial.tester);

  // const getters = {
  //   tester,
  // }

  // const setters = {
  //   setTester,
  // }

  return (
   <div>
    {/* <Context.Provider value={{ getters, setters }}> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/signup' element={<SignUp />}></Route> */}
      </Routes>
    </BrowserRouter>
    {/* </Context.Provider> */}
   </div>
  );
}

export default App;

