import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AddService from "./Pages/AddService/AddService";
import Home from './Pages/Home/Home/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/addService" element={<AddService></AddService>}></Route>

    </Routes>
  );
}

export default App;
