import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { SELECTEDPAGE } from './types/selectedPageEnums';

import Benefits from './pages/benefitPage/Benefits';
import Studio from './pages/studioPage/Studio';
import Footer from './pages/footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/homePage/Home';
import DetailedPage from './pages/studioPage/DetailedPage';

function App() {
  const [selectedPage, setSelectedPage] = useState<SELECTEDPAGE>(SELECTEDPAGE.HOME);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SELECTEDPAGE.HOME);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  
      <>
        <Navbar isTopOfPage={true}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/details/:id" element={<DetailedPage />} />
        </Routes>

        <Footer />
      </>
    
  );
}

export default App;
