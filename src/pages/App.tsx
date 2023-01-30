import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Navigation from '../components/Navigation';
import Almanax from './Almanax';
import Error404 from './Error404';
import Forgemagie from './Forgemagie';
import Monsters from './Monsters';

export const App = () => {
  return (
    <HashRouter>
      <div className='min-h-screen bg-gray-800'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/almanax" element={<Almanax />} />
          <Route path="/monsters" element={<Monsters />} />
          <Route path="/forgemagie" element={<Forgemagie />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
