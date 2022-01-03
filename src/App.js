import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Registation from "./Components/Pages/Registation/Registation";
import Service from "./Components/Pages/Service/Service";
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
        <Route
          path="/services"
          element={
            <PrivateRoute>
              <Service />
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
