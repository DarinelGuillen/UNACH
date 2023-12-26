import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getItem, setItem } from '../utils/storage';
import RegistroProyectosStudent from '../components/organism/RegistroProyectosStudent';
function Home() {

  const location = useLocation();
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id')||1;
    const idUnach = searchParams.get('id_unach')||"A";

    setItem('userData', { id, idUnach });
    console.log("🚀 ~ file: Home.jsx:17 ~ useEffect ~ id, idUnach :", id, idUnach )
  }, [location.search]);

  // useEffect(() => {
  //   const storedData = getItem('userData');
  //   console.log("🚀 ~ file: Home.jsx:27 ~ useEffect ~ storedData:", storedData)
      
  // }, []);

  return (
    <>
      {/* <div className=' '> */}

      <RegistroProyectosStudent />
      {/* </div> */}
    </>
  );
}

export default Home;
