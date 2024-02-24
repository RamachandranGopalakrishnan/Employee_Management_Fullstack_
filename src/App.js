
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './Component/Navbar';
import AddEmployee from './Component/AddEmployee';
import EmployeeList from './Component/EmployeeList';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
       <Route index element={<EmployeeList/>}></Route>
      <Route path="/" element={<EmployeeList/>}></Route>
      <Route path="/employeeList" element={<EmployeeList/>}></Route>
      <Route path="/addEmployee" element={<AddEmployee/>}></Route>
    </Routes>
 </BrowserRouter>
 </>
  );
}

export default App;
