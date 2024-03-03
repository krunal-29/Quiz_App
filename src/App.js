import Navbar from './Navbar'

import { useState } from 'react';
import Raoutpage from './Raoutpage';



function App() {

  const [page,setpage]=useState(1)

  const handleButton = ()=>{
    setpage(page+1)
  }

  const [mode,setMode]=useState('Light')
  const [textclr,setTextclr]=useState('black')
  const [navbg,setNavbg]=useState('#2196f3')
  const [pagebg,setPagebg]=useState('#fafafa')
  
  


const handleMode = ()=>{
  if (mode === 'Light') {
    setTextclr('#ffffff')
    setNavbg('#6d1b7b')
    setPagebg('#262626')
    setMode('Dark')
  }
  else if (mode === 'Dark'){
    setTextclr('#262626')
    setNavbg('#2196f3')
    setPagebg('#fafafa')
    setMode('Light')
  }
}
  

  return (
    <div>

      <Navbar mode={mode} textclr={textclr} navbg={navbg} handleMode={handleMode}/>
     
      <Raoutpage page={page} handleButton={handleButton} pagebg={pagebg} textclr={textclr} mode={mode}/>

    </div>
  );
}

export default App;
