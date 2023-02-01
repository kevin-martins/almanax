import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation';
import Almanax from '../pages/Almanax';
import Error404 from '../pages/Error404';
import Forgemagie from '../pages/Forgemagie';
import Monsters from '../pages/Monsters';
import MonsterInformation from '../pages/monster/[id]';

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
          <Route path="/monster/:id" element={<MonsterInformation />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
