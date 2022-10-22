import "./App.css";
import Title from "./components/Title";
import Header from './components/Header'
import Login from "./components/Login";
import Sign from "./components/Sign";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/title" element={<Title />} />
          
        </Routes>
      </Router>
    </div>
  )
}

export default App;
