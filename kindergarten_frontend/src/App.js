import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import DienstUrlaub from './components/DienstUrlaub';
import Logout from './components/Logout';
import Stammdaten from './components/Stammdaten';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/dienstplaene" exact element={<DienstUrlaub />} />
        <Route path="/Stammdaten" exact element={<Stammdaten />} />
        <Route path="/logout" exact element={<Logout />} />
      </Routes>
    </Router>
  )
}

export default App
