import Home from './Pages/Home'
import View from './Pages/View';
import Update from './Pages/Update';
import Create from './Pages/Create';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {

  return (
    <>
     <Router>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                  <Link className="navbar-brand" to={"/"}>REACT CRUD</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                      <Link className="nav-link" to={"/"}>Home</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link text-primary fw-bolder" to={"/Create"}>Create</Link>
                      </li>
                  </ul>
                  </div>
              </div>
            </nav>
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
