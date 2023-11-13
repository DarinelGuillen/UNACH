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
      page:1,
    }
   )
  const [isShareData, setIsShareData] = useState(
    {
      work_team:[//Que las tablas de agregar + y - Rows define el key que tendran aqui
        {
          academic_degree:"Pedrossssss",
          full_name:"Pedro perez",
          affiliation_center_id:"",
          specialization_area:"",
          tasks:"",
          participation_level:"",
        },
        {
          academic_degree: "Grado 1",
          full_name: "Carlos Pedro",
          affiliation_center_id: "Centro 123",
          specialization_area: "Área A",
          tasks: "Tarea 1",
          participation_level: "Nivel Alto"
        },
        {
          academic_degree: "Grado 2",
          full_name: "Juanita López",
          affiliation_center_id: "Centro 456",
          specialization_area: "Área B",
          tasks: "Tarea 2",
          participation_level: "Nivel Medio"
        },
        
      ],
      test_table:[
        {
          id: "1",
          type: "Pedrossssss",
          expected_product: "Pedro perez",
          Especifique: "",
          
      },
      {
        id: "1",
        type: "dffff",
        expected_product: "f fffff",
        Especifique: "",
      },
      ],
      email: 'random_email@example.com',
      full_name: 'John Doe',
      academic_degree: 'Ph.D.',
      affiliation_center_id: 'University XYZ',
      office_phone: '123-456-7890',
      cellphone: '987-654-3210',
      employment_status: 'Professor',
      other: 'Random Information',
      end_date: '2023-12-31',
      specific_topic: 'Random Research Topic',
      textareaInput1: 'Random Text',
      executive_summary: 'Random Executive Summary',
      title: 'Random Project Title',
      start_date: '2023-01-01',
      name: 'Research Group Name',
      status: 'Active',
      research_group_name: 'Research Group Name',
      group_instance: 'University Department',
      collaboration_networks: 'Random Networks',
      network_name: 'Random Network',
      research_line: 'Random Research Line',
      funding_type: 'Grant',
      funding_source_institution: 'Funding Institution',
      program: 'Research Program',
      program_link: 'https://example.com/program',
      year: '2023',
      evaluating_instance: 'Evaluation Department',
      perspective: 'Random Perspective',
      scope: 'Random Scope',
      introduction: 'Random Introduction',
      main_contribution: 'Random Main Contribution',
      proposal_alignment: 'Random Proposal Alignment',
      theoretical_marco: 'Random Theoretical Marco',
      research_justification: 'Random Research Justification',
      specific_objectives: 'Random Specific Objectives',
      hypotheses_or_assumptions: 'Random Hypotheses or Assumptions',
      typeOfPay: 'Type of Funding',
      Institution: 'Funding Institution',
      Program: 'Funding Program',
      Url: 'https://example.com/funding',
      inst: 'Evaluation Department',
      consentimiento: 'Consent',
      codes: 'Random Codes',
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      infraestructura: 'Random Infrastructure',
      recursos: 'Random Resources'
    }
    
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

