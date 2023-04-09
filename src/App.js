import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Notestate from './context/notes/NoteState';
import { Alert } from './components/Alter';

function App() {
  return (
    <>
      <Notestate>

        <Router>
          
          <Navbar />
          <Alert message="This is amazing React course" />
          
          <div className="container">
         
            <Routes>


              <Route path="/" element={<Home />}></Route>
              
              <Route path="/about" element={<About />}></Route>
            
            
            </Routes>
         
          </div>
        
        </Router>

      </Notestate>
    </>
  );
}

export default App;
