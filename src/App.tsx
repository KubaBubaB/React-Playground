import Header from "./Header";
import Propos from "./Trash/Propos";
import Placeholder from "./Trash/Placeholder";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WheelNumberPicker from "./Wheel/WheelNumberPicker";
import ButtonRun from "./RunningButton/ButtonRun";
import FunnySlider from "./FunnySlider/FunnySlider";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="button" element={<ButtonRun />} />
            <Route path="wheelpicker" element={<WheelNumberPicker />} />
            <Route path="slider" element={<FunnySlider />} />
            <Route path="*" element={<Placeholder />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p className="mb-0">©React Playground Inc. </p>
        </div>
      </footer>
    </>
  );
}

export default App;
