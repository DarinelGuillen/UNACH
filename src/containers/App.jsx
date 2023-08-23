import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import PlayGround from '../pages/PlayGround.jsx';
import Login from '../pages/Login.jsx';
import Registro from '../pages/Registro.jsx';
import Seccion1Pag1 from '../pages/Seccion1Pag1.jsx';
import Seccion1Pag2 from '../pages/Seccion1Pag2.jsx';
import Seccion1Pag3 from '../pages/Seccion1Pag3.jsx';
import Seccion1Pag4 from '../pages/Seccion1Pag4.jsx';
import Seccion1Pag5 from '../pages/Seccion1Pag5.jsx';
import Seccion2Pag1 from '../pages/Seccion2Pag1.jsx';
import Seccion2Pag2 from '../pages/Seccion2Pag2.jsx';
import Seccion2Pag3 from '../pages/Seccion2Pag3.jsx';
import Seccion2Pag4 from '../pages/Seccion2Pag4.jsx';
import Seccion2Pag5 from '../pages/Seccion2Pag5.jsx';
import Seccion2Pag6 from '../pages/Seccion2Pag6.jsx';
import Seccion2Pag7 from '../pages/Seccion2Pag7.jsx';
import Seccion2Pag8 from '../pages/Seccion2Pag8.jsx';
import Seccion2Pag9 from '../pages/Seccion2Pag9.jsx';
import Seccion2Pag10 from '../pages/Seccion2Pag10.jsx';
import RegistroProyectos from "../pages/RegistroProyectos.jsx";

//Contexts 
import SharedDataContext from '../contexts/SharedDataContext.js';
function App() {
  const [isShareData, setIsShareData] = useState("");


  return (
    <BrowserRouter>
    <SharedDataContext.Provider value={{ isShareData, setIsShareData }}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/play" element={<PlayGround/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/seccion1Pag1' element={<Seccion1Pag1/>}/>
        <Route path='/seccion1Pag2' element={<Seccion1Pag2/>}/>
        <Route path='/seccion1Pag3' element={<Seccion1Pag3/>}/>
        <Route path='/seccion1Pag4' element={<Seccion1Pag4/>}/>
        <Route path='/seccion1Pag5' element={<Seccion1Pag5/>}/>
        <Route path='/seccion2Pag1' element={<Seccion2Pag1/>}/>
        <Route path='/seccion2Pag2' element={<Seccion2Pag2/>}/>
        <Route path='/seccion2Pag3' element={<Seccion2Pag3/>}/>
        <Route path='/seccion2Pag4' element={<Seccion2Pag4/>}/>
        <Route path='/seccion2Pag5' element={<Seccion2Pag5/>}/>
        <Route path='/seccion2Pag6' element={<Seccion2Pag6/>}/>
        <Route path='/seccion2Pag7' element={<Seccion2Pag7/>}/>
        <Route path='/seccion2Pag8' element={<Seccion2Pag8/>}/>
        <Route path='/seccion2Pag9' element={<Seccion2Pag9/>}/>
        <Route path='/seccion2Pag10' element={<Seccion2Pag10/>}/>
        <Route path='/registroProyectos' element={<RegistroProyectos/>}/>

      </Routes>
    </SharedDataContext.Provider>
    </BrowserRouter>
  );
}

export default App;

