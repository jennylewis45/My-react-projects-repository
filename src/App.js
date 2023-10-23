import React from 'react'
// import Calculator from './Components/Calculator'
// import Calculators from'./Components/Calculators'
// import Counter from './Components/Counter';
// import Passgenerator from './Components/Passgenerator';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Shop from './Components/Shop';
import{BrowserRouter as Main,Routes,Route}from "react-router-dom"




function App() {
  return (

    <>

   
    {/* <Calculator title="Change your background color with your own choice"/> */}
    {/* <Calculators title="My Calculator"/> */}
    {/* <Counter/> */}

    {/* <Passgenerator/> */}
    <Main>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
<Route path='/about'element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>   
<Route path='/shop' element={<Shop/>}/>
    </Routes>


    </Main>
 


    </>

  )
}

export default App;
