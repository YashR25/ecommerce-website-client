import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Collections from "./pages/Collections/Collections";
import Home from "./pages/home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "./redux/categorySlice";
import Payments from "./components/payments/Payments";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/category/:categoryId?" element={<Collections />} />
        <Route path="/payments/:status" element={<Payments />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
