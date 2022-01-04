import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages';
import Posts from './pages/posts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/post' element={<Posts/>} />
      </Routes>
          
    </Router>
  );
}

export default App;
