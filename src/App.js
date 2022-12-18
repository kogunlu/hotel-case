import Home from "./pages/home-page/Home";
import "./index.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import BuildingPhase from "./pages/building/BuildingPhase";




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route  path="*" element={ <BuildingPhase />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
