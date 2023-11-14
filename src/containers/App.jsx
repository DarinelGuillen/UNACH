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
  const [isShareData, setIsShareData] = useState([]
  //   {
  //   work_group: [//Que las tablas de agregar + y - Rows define el key que tendran aqui
  //     {
  //       degree: "Pedrossssss",
  //       full_name: "Pedro perez",
  //       affiliation: "",
  //       specialization_area: "",
  //       specific_tasks: "",
  //       participation_level: "",
  //     },
  //     {
  //       degree: "Grado 1",
  //       full_name: "Carlos Pedro",
  //       affiliation: "Centro 123",
  //       specialization_area: "Área A",
  //       specific_tasks: "Tarea 1",
  //       participation_level: "Nivel Alto"
  //     },
  //     {
  //       degree: "Grado 2",
  //       full_name: "Juanita López",
  //       affiliation: "Centro 456",
  //       specialization_area: "Área B",
  //       specific_tasks: "Tarea 2",
  //       participation_level: "Nivel Medio"
  //     },

  //   ],
  //   degree: "Pedrossssss",
  //   full_name: "Pedro perez",
  //   affiliation: "",
  //   specialization_area: "",
  // }
  );


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

