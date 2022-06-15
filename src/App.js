import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/AuthProvider";
import AddService from "./Pages/AddService/AddService";
import Home from './Pages/Home/Home/Home';
import ServiceDetail from "./Pages/Home/ServiceDetail/ServiceDetail";
import Login from "./Pages/Login/Login/Login";
import ManageOrders from "./Pages/ManageOrders/ManageOrders/ManageOrders";
import MyOrders from "./Pages/MyOrders/MyOrders";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/addService" element={
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        }></Route>
        <Route path="/myOrders" element={
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        }></Route>
        <Route path="/manageOrder" element={
          <PrivateRoute>
            <ManageOrders></ManageOrders>
          </PrivateRoute>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/serviceDetail/:Id" element={
          <PrivateRoute>
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
    </AuthProvider>
  );
}

export default App;
