import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './error/Error';
import Home from "./home/Home";
import About from "./about/About";
import Location from "./location/Location";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/location/:id" element={<Location/>}></Route>
      <Route path="*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
