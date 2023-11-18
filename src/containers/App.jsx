import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Committe from "../pages/Committee.jsx";
import Evaluator from "../pages/Evaluator.jsx";
import Sections from "../pages/Sections.jsx";


//Contexts 
import SharedDataContext from '../contexts/SharedDataContext.js';
import UserContext from "../contexts/UserContext.js";
function App() {
  // const [isShareData, setIsShareData] = useState({})
  //!Student = 1   Commite = 2  Evaluators = 3
   const [isUser, setIsUser] = useState(
    {
       page: 1,
    }
   )
  const [isShareData, setIsShareData] = useState(
    []);


  return (
    <BrowserRouter>
    <SharedDataContext.Provider value={{ isShareData, setIsShareData }}>
    <UserContext.Provider value={{ isUser, setIsUser }}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Committe" element={<Committe/>}/>
        <Route path="/Evaluator" element={<Evaluator/>}/>
        <Route path="/Sections" element={<Sections/>}/>
        
      </Routes>
    </UserContext.Provider>
    </SharedDataContext.Provider>
    </BrowserRouter>
  );
}

export default App;

