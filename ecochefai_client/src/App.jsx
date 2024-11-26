import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import RecipesPage from './pages/RecipesPage/RecipesPage';
import LoginSignupPage from './pages/signupPage/LoginSignupPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recipes' element={<RecipesPage />} />
        <Route path='/login' element={<LoginSignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
