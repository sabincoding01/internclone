import React from 'react'

import NavBar from './components/NavBar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import RegisterProfessional from './pages/RegisterProfessional';
import Help from './pages/Help';
import LoginSignup from './pages/LoginSignup';
import HeroSection from './components/HeroSection';
import WhyCompany from './components/WhyCompany';
import Services from './components/Services';

const App = () => {
  return (
    <div>
      <BrowserRouter>
<NavBar/>
 
<Routes>
<Route path="/RegisterProfessional" element={<RegisterProfessional/>}/>
<Route path="/Help" element={<Help/>}/>
<Route path="/LoginSignup" element={<LoginSignup/>}/>
</Routes>
</BrowserRouter>

<HeroSection/>
<div className='pl-16'>
<WhyCompany/>
<div className='pr-16'>
<Services/>
</div>
</div>

    </div>
  )
}

export default App