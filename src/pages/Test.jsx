import React, { useState, useEffect } from 'react';
import Header from '../atoms/Header';
import Footer from '../atoms/Footer';
import SimpleInput from '../components/atoms/SimpleInput';
import { useSessionContext } from '../containers/SessionContext';
import styled from 'styled-components';
import projects from './TestData/projectsData'
const TestWrapper = styled.div`
  /* Add your styling for the Test component wrapper here */
`;

const Test = () => {
  

  const { sessionData, setSessionData } = useSessionContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSessionData(projects);
    setTimeout(() => {
      console.log("🚀 ~ file: test.jsx:112 ~ useEffect ~ projects:", projects);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      console.log("🚀 ~ file: test.jsx:120 ~ setTimeout ~ false:", false);
    }, 2000);
  }, [sessionData]);

  return (
    <TestWrapper>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        Array.isArray(sessionData) && sessionData.length > 0 ? (
          sessionData.map((project, index) => (
            <div key={index}>
              {Object.keys(project).map((key, index) => (
                <div key={index}>
                  <h1>{key}</h1>
                  <title-header content={key} width="100%" height="50%" />
                  {Object.keys(project[key]).map((key2, index) => (
                    <div key={index}>
                      <SimpleInput
                        type="text"
                        placeholder={project[key][key2] !== "" ? project[key][key2] : key2}
                        id={key2}
                        width="20%"
                      />
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
      <Footer />
    </TestWrapper>
  );
};

export default Test;
