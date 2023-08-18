import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import { About, Home, Store } from "./components";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div style={{ background: "#fff" }}>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
