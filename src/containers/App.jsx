import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import PlayGround from '../pages/PlayGround';
import Seccion1 from '../pages/Seccion1';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import Seccion1Pag1 from '../pages/Seccion1Pag1';
import Test from '../pages/Test';
import { SessionProvider } from './SessionContext';

function App() {
  return (
    <BrowserRouter>
      <SessionProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Test" element={<Test />} />
          <Route path="/play" element={<PlayGround />} />
          <Route path='/seccion1' element={<Seccion1 />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/seccion1Pag1' element={<Seccion1Pag1 />} />
        </Routes>
      </SessionProvider>
    </BrowserRouter>
  );
}

export default App;
