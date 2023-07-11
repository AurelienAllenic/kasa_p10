import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './error/Error';
import Home from "./home/Home";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="*" element={<Error/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
