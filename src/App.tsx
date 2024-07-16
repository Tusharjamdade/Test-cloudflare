import { BrowserRouter, Route, Routes } from "react-router-dom";
import Herosection from "../Component/Herosection";
import Navbar from "../Component/Navbar";
import LoginPage from "../Component/LoginPage";
import SignUp from "../Component/SignUp";
import CreateProfile from "../Component/CreateProfile";
import Footer from "../Component/Footer";

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/createprofile" element={<CreateProfile />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
