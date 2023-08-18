import React, { createContext, useState, useContext } from 'react';

// Creating a context named SessionContext
const SessionContext = createContext();

// Creating a SessionProvider component using the context
export const SessionProvider = ({ children }) => {
  // Defining state to hold session data
  const [sessionData, setSessionData] = useState([]);

  // Providing the sessionData and setSessionData to the children components
  return (
    <SessionContext.Provider value={{ sessionData, setSessionData }}>
      {children}
    </SessionContext.Provider>
  );
};

// Custom hook to easily access the SessionContext
export const useSessionContext = () => {
  return useContext(SessionContext);
};

export default SessionContext;
