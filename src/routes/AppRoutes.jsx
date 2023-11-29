import { Route, Routes } from 'react-router-dom';
import { Home, Projects, About, Skills } from '../views';

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
    </Routes>
  );
}

export default AppRoutes;
