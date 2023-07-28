import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Error from './error/Error';
import Home from "./home/Home";
import About from "./about/About";
import Location from "./location/Location";
import locationsData from "./data.json";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location/:id/*" element={<LocationWrapper />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function LocationWrapper() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  if (validateId(id)) {
    return <Location id={id} />;
  } else {
    return <Navigate to="/404" replace />;
  }
}

function validateId(id) {
  // Loop through the locations in the JSON file
  for (let i = 0; i < locationsData.length; i++) {
    if (locationsData[i].id === id) {
      return true; // ID is valid
    }
  }

  return false; // ID is invalid
}

export default App;
