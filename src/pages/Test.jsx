import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from '../atoms/Header';
import Footer from '../atoms/Footer';
import CustomButton from '../components/atoms/CustomButtom';

import VerticalText from '../atoms/VerticalText';
import ClaveDeAcceso from '../atoms/ClaveDeAcceso';
import logoSinNadita from "../assets/img/Icon/checkSinNada.svg";
import SessionContext, { useSessionContext } from '../containers/SessionContext'; // Import useSessionContext from the context file
import SimpleInput from '../components/atoms/SimpleInput';
// Creating a local context named Session
const loading = createContext();

function Test() {

    const projects = [
        {
            "projects": {
              "id": "123",
              "title": "Research on Renewable Energy Sources",
              "created_at": "2023-07-15",
              "updated_at": "2023-08-10"
            },
            "project_proposals": {
              "id": "456",
              "project_id": "123",
              "registration_key": "PR12345",
              "creation_date": "2023-06-20",
              "location": "City A",
              "status_id": "2",
              "created_at": "2023-06-21",
              "updated_at": "2023-07-10"
            },
            "project_proposal_execution_periods": {
              "id": "789",
              "project_proposal_id": "456",
              "project_start_date": "2023-07-01",
              "project_end_date": "2023-12-31",
              "weekly_hours": "30",
              "created_at": "2023-06-22",
              "updated_at": ""
            }
          }
        
      ];
      
  // State to store session data
  const { sessionData, setSessionData } = useSessionContext();
  const [loading, setLoading] = useState(true);

  
  // useEffect to simulate fetching session data
  useEffect(() => {

    // Simulating fetching session data from an API
    setSessionData(projects);
    setTimeout(() => {
      console.log("🚀 ~ file: test.jsx:112 ~ useEffect ~ projects:", projects)
    }, 2000);
  }, []);
  useEffect(() => {

    setTimeout(() => {
        setLoading(false)
        console.log("🚀 ~ file: test.jsx:120 ~ setTimeout ~ false:", false)
    }, 2000);
  }, [sessionData]);

  return (
    <div>
    <Header />
    {/* Rest of your component code */}
    {loading ? (
      <p>Loading...</p>
    ) : (
      Array.isArray(sessionData) && sessionData.length > 0 ? (
        sessionData.map((project, index) => (
          <div key={index}>
            { console.log("🚀 ~ file: test.jsx:132 ~ project ~ length:", JSON.stringify(project), project.length)}
            {Object.keys(project).map((key, index) => (
              <div key={index}>
                { console.log("🚀 ~ file: test.jsx:136 ~ Test ~ key:", key)}
            <h1>{key}</h1>
    <title-header content={key} width="100%" height="50%"/>


                {Object.keys(project[key]).map((key2, index) => (
            <div key={index}>
              <SimpleInput
  placeholder={project[key][key2] !== "" ? project[key][key2] : key2}
  values={project[key][key2] !== "" ? `[${project[key][key2]}]` : ""}
/>

<SimpleInput
  type="text"
  placeholder={project[key][key2] !== "" ? project[key][key2] : key2}
  id={key2}
  width="20%"
/>

              
              { console.log("🚀 ~ file: test.jsx:142 ~ Test ~ key2:", key,"==", key2,"-:-", project[key][key2])}
            </div>
          ))}
              </div>
            ))}
          </div>
        ))
      ) : (
        <p>No data available</p>
      )
    )}
    {/* Rest of your component code */}
    <Footer />
  </div>
);
  
}

// Custom hook to access the Session context

export default Test;

