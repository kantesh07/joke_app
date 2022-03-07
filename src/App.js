import './App.css';
import Home from './components/home';
import Joke from './components/joke';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="joke/:type" element={<Joke/>} />
      </Routes>
    </div>
  );
}

export default App;
