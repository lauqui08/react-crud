import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Home from './Pages/Home'
import View from './Pages/View';
import Update from './Pages/Update';
import Create from './Pages/Create';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/View/:id" element={<View />}></Route>
          <Route path="/Update/:id" element={<Update/>}></Route>
          <Route path="/Create/" element={<Create/>}></Route>
        </Routes>
     </Router>
        
    </>
  )
}

export default App
