import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getItem, setItem } from '../utils/storage';
import RegistroProyectosStudent from '../components/organism/RegistroProyectosStudent';

function Home() {
  const location = useLocation();
  
  useEffect(() => {
    // Obtén los parámetros de la URL
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const idUnach = searchParams.get('id_unach');
    const userType = searchParams.get('userType');
    
    // Guarda los datos en el localStorage
    setItem('userData', { id, idUnach, userType });
  }, [location.search]);

  // useEffect(() => {
  //   const storedData = getItem('userData');
  //   console.log("🚀 ~ file: Home.jsx:27 ~ useEffect ~ storedData:", storedData)
      
  // }, []);

  return (
    <>
      <RegistroProyectosStudent />
    </>
  );
}

export default Home;
