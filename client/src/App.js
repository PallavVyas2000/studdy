import './App.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
        </Routes>
      </Router>
    </>
  );
}

export default App;
