import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homePage/HomePage';
import Footer from './components/footer/Footer';
import RecipesPage from './pages/RecipesPage/RecipesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recipes' element={<RecipesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
