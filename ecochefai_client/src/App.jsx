import './App.css';
import FeaturedRecipes from './components/FeaturedRecipes';
import HeroSection from './pages/homePage/HeroSection';
import Navbar from './components/navbar/Navbar';
import SearchOptions from './pages/homePage/SearchOptions';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SearchOptions />
      <Footer />
    </>
  );
}

export default App;
