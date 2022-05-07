import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/'></Route>
      </Routes>

    </div>
  );
}

export default App;
