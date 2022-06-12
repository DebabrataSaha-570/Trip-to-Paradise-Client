import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AddService from "./Pages/AddService/AddService";
import Home from './Pages/Home/Home/Home';
import ServiceDetail from "./Pages/Home/ServiceDetail/ServiceDetail";
import ManageOrders from "./Pages/ManageOrders/ManageOrders/ManageOrders";
import MyOrders from "./Pages/MyOrders/MyOrders";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/addService" element={<AddService></AddService>}></Route>
      <Route path="/myOrders" element={<MyOrders></MyOrders>}></Route>
      <Route path="/manageOrder" element={<ManageOrders></ManageOrders>}></Route>
      <Route path="/serviceDetail/:Id" element={<ServiceDetail></ServiceDetail>}></Route>

    </Routes>
  );
}

export default App;
