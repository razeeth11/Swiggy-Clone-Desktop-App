import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from '@mui/material/Badge';
import "./styles/topNavBar.css"

export function TopNavBar() {
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
