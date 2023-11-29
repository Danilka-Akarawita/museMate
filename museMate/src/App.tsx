
import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { SELECTEDPAGE } from './types/selectedPageEnums';

import Benefits from './pages/benefitPage/Benefits';
import Studio from './pages/studioPage/Studio';
import Footer from './pages/footer/Footer';
import DetailedForm from './pages/bookingPage/DetailedForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/homePage/Home';
import StudioContent from './pages/studioPage/StudioContent';
import StudioCards from './pages/studioPage/StudioCards';



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
      <Navbar  isTopOfPage={true} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <Studio/>
      <Footer/>
      
      {/* <DetailedForm/> */}

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/details/:id" element={<StudioDetailPage/>} />
        <Route path="/book" element={<Booking />} /> */}
       <Route  path="/details/:id" element={<StudioContent/>} />
        {/* <Route path="/studioDetails/:id" element={<StudioDetailPage/>}/> */}
      </Routes>
    </>
  
  )
}

export default App
