import { Push } from './components/Methods/Push';
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
          <Route path='/methods/push' element={<Push />} />
          {/* <Route path='/methods/pop' element={<Pop />} />
          <Route path='/methods/shift' element={<Shift />} />
          <Route path='/methods/unshift' element={<Unshift />} />  */}
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
