import "./styles/productsCard.css";
import "./styles/carousal.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from '@mui/material/Badge';

export function ProductsPage() {
  return (
    <div className="products-page">
      <TopNavBar />
      <ProductCard />
    </div>
  );
}

export function ProductCard() {
  const style = {
    width: "100%",
    fontWeight: 900,
  };

  return (
    <div className="product-card">
      <Card sx={{ minWidth: 235, padding: "15px", borderRadius: 0 }}>
        <div className="product-img">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ab979bffbd658e74de650a15ca0092a3"
            alt="pizza-image"
            width="235px"
          />
        </div>
        <div className="product-details">
          <h2>Oven Story Pizza</h2>
          <p>Pizzas,italian</p>
        </div>
        <div className="product-rating">
          <p>⭐4.0</p> |<p>25 MINS</p> |<p>400 FOR TWO</p>
        </div>
        <hr />
        <div className="product-offer">
          <p>60% off | Use TRYNEW</p>
        </div>
        <div className="product-view">
          <hr />
          <Button className="view-button" sx={style}>
            QUICKVIEW
          </Button>
        </div>
      </Card>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="top-nav-bar">
      <div className="top-one">
        <img
          src="https://i.pinimg.com/originals/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.png"
          alt="swiggy-logo.png"
          width="80px"
        />
        <p>
          {" "}
          <span className="other">Other</span> Tamil Nadu 627005, India
        </p>
      </div>
      <div className="top-two">
        <div className="search">
          <Button>
            <SearchIcon />
            Search
          </Button>
        </div>
        <div className="offers">
        <Badge badgeContent="NEW" color="primary">
          <Button>
            <LocalOfferIcon />
            Offers
          </Button>
          </Badge>
        </div>
        <div className="help">
          <Button>
            <HelpIcon />
            Help
          </Button>
        </div>
        <div className="person">
          <Button>
            <PersonIcon />
            Sign In
          </Button>
        </div>
        <div className="cart">
          <Button>
            <ShoppingBagIcon />
            Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
