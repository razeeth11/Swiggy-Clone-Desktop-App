import "./styles/App.css";
import "./styles/login.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
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
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ProductsPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/offerPage"
          element={
            <ProtectedRoute>
              <OfferPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/helpPage"
          element={
            <ProtectedRoute>
              <VerticalTabs1 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shopDetails/:shopName"
          element={
            <ProtectedRoute>
              <ShopDetailsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <About />
      <CityData />
    </div>
  );
}

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? <div>{children}</div> : <Navigate replace to="/login" />;
}
