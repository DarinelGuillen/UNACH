import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import Home from '../pages/Home'
import Home from '../pages/Home.jsx';
import PlayGround from '../pages/PlayGround.jsx';
import Login from '../pages/Login.jsx';
import Registro from '../pages/Registro.jsx';
import Seccion1Pag1 from '../pages/Seccion1Pag1.jsx';
import Seccion1Pag2 from '../pages/Seccion1Pag2.jsx';
import Seccion1Pag3 from '../pages/Seccion1Pag3.jsx';
import Seccion1Pag4 from '../pages/Seccion1Pag4.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/play" element={<PlayGround/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/seccion1Pag1' element={<Seccion1Pag1/>}/>
        <Route path='/seccion1Pag2' element={<Seccion1Pag2/>}/>
        <Route path='/seccion1Pag3' element={<Seccion1Pag3/>}/>
        <Route path='/seccion1Pag4' element={<Seccion1Pag4/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

