import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/navbar/Navbar';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Router>
      <LoadingScreen />
      <div>
        <Navbar isActive={isActive} setIsActive={setIsActive} />
        {!isActive ? (
          <AppRoutes />
        ) : (
          <div className='opacity-0 h-[1px] w-[full] overflow-hidden'>
            <AppRoutes />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
