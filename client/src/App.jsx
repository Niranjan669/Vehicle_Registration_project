import {Routes,Route} from "react-router-dom"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Register from "./pages/Register";
import UserList from "./pages/UserList";
import Login from "./pages/Login";
import Vehicle from "./pages/Vehicle";
import Update from "./pages/Update"
import Detail from "./pages/Detail";
import ImageUploader from "./pages/Image";

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/vehicle" element={<Vehicle/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/users" element={<UserList />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/update/:id" element={<Update/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/image" element={<ImageUploader/>}/>
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
