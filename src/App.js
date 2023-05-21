import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import ContactUs from './components/ContactUs'
import WhyUs from './components/WhyUs'
import Header from './components/Header'
import Apointment from './components/Apointment'
import './App.css'

const App = () => {
  return (
    <div className='main-page'>
    <BrowserRouter>
        <Header />

    <Routes>
      <Route  path="/" exact element={<Home />}></Route>
      <Route  path="/Services"   exact element={<Services />} ></Route>
      <Route  path="/WhyUs" exact element={<WhyUs />} ></Route>
      <Route  path="/ContactUs"  exact element={<ContactUs />} ></Route>
      <Route  path="/apointment"  exact element={<Apointment />} ></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App