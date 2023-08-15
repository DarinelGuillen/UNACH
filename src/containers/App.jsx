import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import Home from '../pages/Home'
import Home from '../pages/Home.jsx'
import PlayGround from '../pages/playground.jsx';
function App() {




  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<PlayGround />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;

