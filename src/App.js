// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Planets from './Components/Planets'
import People from './Components/People'


function App() {
  const [page, setPage ] = useState('planets')


  return (
    <>
    <div className="App">
      
        <h1>Stars wars info</h1>
        <Navbar setPage={setPage} />
        <div className='content'>
          { page === 'planets' ? <Planets/> : <People/> }
        </div>
        
    </div>

   
    </>
  );
}

export default App;
