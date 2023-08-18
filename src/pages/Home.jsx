import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <Link to="/play">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to PlayGround Page
        </button>
      </Link>
      <Link to="/seccion1">
        <button className="bg-green-900 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
          Ir a seccioncita 1
        </button>
      </Link>


      <Link to="/test">
        <button className="bg-green-900 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
          <h1>TESTSSSSSSSSSSSSS</h1>
        </button>
      </Link>
    </>
  );
}

export default Home;
