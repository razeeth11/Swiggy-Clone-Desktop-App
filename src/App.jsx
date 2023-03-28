import "./App.css";
import "./styles/login.css";
import { Routes, Route, Link } from "react-router-dom";
import { ProductsPage } from "./ProductsPage";
import { OfferPage } from "./OfferPage";
import { TopNavBar } from "./TopNavBar";
import { Search } from "./Search";
import { Cart } from "./Cart";
import { VerticalTabs1 } from "./HelpPage";
import { About } from "./About";
import { CityData } from "./CityData";
import { ShopDetailsPage } from "./ShopDetailsPage";
import { Login } from "./Login";

export function App() {
  return (
    <div className="App">
      {location.pathname == "/login" ? "" : <TopNavBar />}
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offerPage" element={<OfferPage />} />
        <Route path="/helpPage" element={<VerticalTabs1 />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/shopDetails/:id" element={<ShopDetailsPage />} />
      </Routes>
      <About />
      <CityData />
    </div>
  );
}
