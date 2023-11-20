
import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { SELECTEDPAGE } from './types/selectedPageEnums';
import Home from './pages/homePage/home';
import Benefits from './pages/benefitPage/Benefits';
import Studio from './pages/studioPage/Studio';
import Footer from './pages/footer/Footer';
import DetailedForm from './pages/bookingPage/DetailedForm';



function App() {
  const [selectedPage, setSelectedPage] = useState<SELECTEDPAGE>(SELECTEDPAGE.HOME );
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
      {/* <Navbar  isTopOfPage={true} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <Studio setSelectedPage={setSelectedPage}/>
      <Footer/> */}
      <DetailedForm/>
    </>
  
  )
}

export default App
