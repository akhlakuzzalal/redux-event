import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Registation from "./Components/Pages/Registation/Registation";
import Services from "./Components/Pages/Services/Services";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Footer from "./Components/Section/Footer/Footer";
import Header from "./Components/Section/Header/Header";

function App() {
  return (
    // <AuthProvider>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Registation />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard></Dashboard>
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;
