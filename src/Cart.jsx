import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./styles/topNavBar.css";
import { TopNavBar } from "./TopNavBar";

export function Cart() {
  const navigate = useNavigate();

  return (
    <div>
      <TopNavBar/>
      <div className="Cart">
      <img
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        alt="Empty-cart-image.png"
        width="350px"
      />
      <h2>Your Cart is Empty</h2>
      <p>You can go to home page to view more restaurants</p>
      <Button
        onClick={() => navigate("/")}
        sx={{ borderRadius: 0, backgroundColor: "orange" }}
        variant="contained"
      >
        SEE RESTAURANTS NEAR YOU
      </Button>
    </div>
    </div>
  );
}
