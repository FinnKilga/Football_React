import './App.css';
import './components/Images/Alex.jpg';
import Menu from './components/Football/Menu';
import Table from './components/Football/Table';
import Clubs from './components/Football/Clubs';
import Home from './components/Football/Home';
import {
  createBrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SmallMenu from './components/Football/SmallMenu';


function App() {
  return (
    <div className='bg-[#2B3434]'>
      <Router>
        <div className="hidden md:block"><Menu /></div>
        <div className=" md:hidden"><SmallMenu /></div>
        
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/Table" element={<Table />} />
          <Route path="/Clubs" element={<Clubs />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
