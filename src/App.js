import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Collections from "./pages/Collections/Collections";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/category/:categoryId" element={<Collections />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
