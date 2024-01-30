import './App.css';
import Menu from './components/Football/Menu';
import Table from './components/Football/Table';
import Clubs from './components/Football/Clubs';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Table",
    element: <Table />,
  },
  {
    path: "/Clubs",
    element: <Clubs />,
  },
]);


function App() {
  return (
    <div className='bg-[#2B3434]'>
      <Router>
        <Menu />
        <Routes>
          <Route path="/Table" element={<Table />} />
          <Route path="/Clubs" element={<Clubs />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
