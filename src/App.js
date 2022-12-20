import Home from "./pages/home-page/Home";
import "./index.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import BuildingPhase from "./pages/building/BuildingPhase";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";




const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route  path="*" element={ <BuildingPhase />}/>
        </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
