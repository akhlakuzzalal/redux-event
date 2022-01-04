import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddService from "./Components/Pages/Dashboard/Admin/AddService/AddService";
import ManageService from "./Components/Pages/Dashboard/Admin/ManageService/ManageService";
import OrderList from "./Components/Pages/Dashboard/Admin/OrderList/OrderList";
import UserList from "./Components/Pages/Dashboard/Admin/UserList/UserList";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Home from "./Components/Pages/Home/Home";
import AdminRote from "./Components/Pages/Dashboard/AdminRoute/AdminRote";
import Login from "./Components/Pages/Login/Login";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Registation from "./Components/Pages/Registation/Registation";
import Services from "./Components/Pages/Services/Services";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Footer from "./Components/Section/Footer/Footer";
import Header from "./Components/Section/Header/Header";
import Profile from "./Components/Pages/Dashboard/Customer/Profile/Profile";
import MyOrder from "./Components/Pages/Dashboard/Customer/MyOrder/OrderList";
import ServiceDetails from "./Components/Pages/ServiceDetails/ServiceDetails";
import Order from "./Components/Pages/Order/Order";
import Pay from "./Components/Pages/Payment/Pay";
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registation />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/service/:id" element={<ServiceDetails />}></Route>
        <Route path="/pay" element={<Pay />}></Route>
        <Route
          path="/order/:id"
            element={
              <PrivateRoute>
                <Order></Order>
              </PrivateRoute>
            }
          ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }
        >
          <Route
            path="/dashboard/userlist"
            element={
              <AdminRote>
                <UserList></UserList>
              </AdminRote>
            }
          ></Route>
          <Route
            path="/dashboard/orderlist"
            element={
              <AdminRote>
                <OrderList></OrderList>
              </AdminRote>
            }
          ></Route>
          <Route
            path="/dashboard/addservice"
            element={
              <AdminRote>
                <AddService></AddService>
              </AdminRote>
            }
          ></Route>
          <Route
            path="/dashboard/manageservice"
            element={
              <AdminRote>
                <ManageService></ManageService>
              </AdminRote>
            }
          ></Route>
          <Route
            path="/dashboard/profilemanage"
            element={<Profile></Profile>}
          ></Route>
          <Route
            path="/dashboard/myorder"
            element={<MyOrder></MyOrder>}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
