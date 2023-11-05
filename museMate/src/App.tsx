
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { SELECTEDPAGE } from './types/selectedPageEnums';



function App() {
  const [selectedPage, setSelectedPage] = useState<string>(SELECTEDPAGE.HOME );

  return (
    <>
      <Navbar  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

    </>
  
  )
}

export default App
