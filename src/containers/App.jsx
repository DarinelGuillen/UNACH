import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import Home from '../pages/Home'
import Home from '../pages/Home.jsx';
import PlayGround from '../pages/PlayGround.jsx';
import Seccion1 from '../pages/Seccion1.jsx';
function App() {


  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<PlayGround/>} />
            <Route path='/seccion1' element={<Seccion1/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;

