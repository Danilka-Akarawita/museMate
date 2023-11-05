
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';


function App() {
  const [selectedPage, setSelectedPage] = useState<string>('home' );

  return (
    <>
      <Navbar  selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

    </>
  
  )
}

export default App
