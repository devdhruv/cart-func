import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";
import "./App.css";

function App() {
  const { isdarkMode } = useSelector((state) => state.darkMode);
  const productsArr = [
    { pName: "Toy Car", items: 10, id: 1001 },
    { pName: "Pencil", items: 10, id: 1002 },
    { pName: "Rubber", items: 10, id: 1003 },
    { pName: "Chococlate", items: 10, id: 1004 },
  ];

  /**
   * we can use this condition to get data from localStorage
   * 
   *if (!localStorage.getItem("productList")) {
    localStorage.setItem("productList", JSON.stringify(productsArr));
  }
   */

  localStorage.setItem("productList", JSON.stringify(productsArr));

  return (
    <>
      <div
        className={`app-container ${isdarkMode ? "darkMode" : "lightMode"} `}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="plp" element={<ProductListing />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
