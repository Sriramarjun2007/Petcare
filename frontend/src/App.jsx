import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Food from "./pages/Food";
import Groom from "./pages/Groom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/food" element={<Food />} />
        <Route path="/groom" element={<Groom />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;