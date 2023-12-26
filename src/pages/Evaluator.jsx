import React, { useEffect } from 'react';

import RegistroProyectosEvaluator from "../components/organism/RegistroProyectosEvaluator";
import  { getItem, setItem } from '../utils/storage';

function Evaluator() {
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get('id')||1;
        const idUnach = searchParams.get('id_unach')||"P";
    
        setItem('userData', { id, idUnach });
        console.log("🚀 ~ file: Home.jsx:17 ~ useEffect ~ id, idUnach, userType :", id, idUnach )
      }, [location.search]);
    return ( 
        <>
        <RegistroProyectosEvaluator/>

        </>
     );
}

export default Evaluator;