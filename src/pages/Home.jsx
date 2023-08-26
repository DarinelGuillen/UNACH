import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import RegistroProyectos from '../components/organism/RegistroProyectos';
import UserContext from '../contexts/UserContext';

function Home() {
  const {isUser, setIsUser}=useContext(UserContext)
  return (
    <>
    <RegistroProyectos/>
    </>
  );
}

export default Home;
