import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";
import AppBar from '@mui/material/AppBar';
import "./styles/topNavBar.css";
import { useNavigate } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';

export function TopNavBar() {

  const style = {
    padding : 0
  }

  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar className="toolbar" sx={style}>
    <div className="top-nav-bar"> 
      <div className="top-one">
        <img onClick={()=> navigate("/")}
          src="https://i.pinimg.com/originals/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.png"
          alt="swiggy-logo.png"
          width="80px"
        />
        <p>
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
            <Button onClick={()=> navigate("/offerPage")}>
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
    </Toolbar>
    </AppBar>
  );
}
