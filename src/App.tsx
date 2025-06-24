import { Sidebar } from './components/SideBar';
import { VisualArray } from './components/VisualArray';
import { Home } from './pages/Home';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/arrays/reverse' element={<VisualArray />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
