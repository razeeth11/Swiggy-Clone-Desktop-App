import { useState } from "react";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { AppStore } from "./AppStore";
import { useFormik } from "formik";
import { API } from "./API";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [value, setValue] = useState("");
  const [state, setState] = useState(false);
  const [logValue, setLogValue] = useState(false);
  const [signValue, setSignValue] = useState(false);

  const style = {
    fontSize: "14px",
  };

  const setLog = () => {
    setLogValue(true);
    setSignValue(false);
  };

  const setSign = () => {
    setSignValue(true);
    setLogValue(false);
  };

  return (
    <div className="log-in-page">
      <LogInCard logValue={logValue} setLogValue={setLogValue} />
      <SignUpCard signValue={signValue} setSignValue={setSignValue} />
      <div className="welcome-page">
        <div className="content">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
              alt="Swiggy-logo.png"
              width="200px"
            />
            <div className="log-sign">
              <button onClick={() => setLog()} className="log">
                Login
              </button>
              <button onClick={() => setSign()}>Sign up</button>
            </div>
          </div>

          <div className="quote">
            <h1>Late night at office ?</h1>
            <p>Order food from favourite restaurants near you.</p>
          </div>

          <div className="pincode">
            <div className="one">
              <input
                onChange={(ev) => setValue(ev.target.value)}
                type="number"
                placeholder="Enter your delivery location"
              />
            </div>
            <div className="two">
              <button onClick={() => setState(value == "")}>FIND FOOD</button>
            </div>
          </div>
          {state ? (
            <Alert sx={style} severity="error">
              <strong>Enter your delivery location</strong>
            </Alert>
          ) : null}

          <div className="city">
            <p>POPULAR CITIES IN INDIA</p>
            <p>
              <strong>
                Ahmedabad Bangalore Chennai Delhi,Gurgaon Hyderabad Kolkata
                Mumbai Pune& more.
              </strong>
            </p>
          </div>
        </div>

        <div className="image">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"
            alt="swiggy-dish-cover-image.jpeg"
            width="550px"
          />
        </div>
      </div>
      <Feature />
      <AppStore />
    </div>
  );
}

export function LogInCard({ logValue, setLogValue }) {
  const style = {
    display: logValue ? "block" : "none",
  };

  const navigate = useNavigate()

  const [state, setState] = useState(false);

  const alert = {
    width: "100%",
    boxSizing: "border-box",
    fontSize: "13px",
  };

  const formik = useFormik({
    initialValues: { PhoneNumber: 7397661088 },
    onSubmit: async (values) => {
      const data = await fetch(`${API}/LogIn`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await data.json();
      if(result.Token != undefined){
        localStorage.setItem('token' , result.Token)
        navigate("/")
      }
    },
  });

  return (
    <div style={style} className="login-card">
      <IconButton onClick={() => setLogValue(false)}>
        <CloseIcon />
      </IconButton>
      <div className="login-card-one">
        <h1>Login</h1>
        <p>or create an account </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="login-card-two">
          <input
            onChange={formik.handleChange}
            name="PhoneNumber"
            className="input"
            type="number"
            value={formik.values.PhoneNumber}
            placeholder="Phone number"
          />
          {state ? (
            <Alert sx={alert} severity="error">
              <strong>Enter your Phone number</strong>
            </Alert>
          ) : null}
        </div>
        <button className="but" type="submit">
          LOGIN
        </button>
      </form>
      <div className="login-card-three">
        <p>
          By clicking on Login, I accept the Terms & Conditions & Privacy Policy
        </p>
      </div>
    </div>
  );
}

function SignUpCard({ signValue, setSignValue }) {
  const style = {
    display: signValue ? "block" : "none",
  };

  return (
    <div style={style} className="sign-card">
      <IconButton onClick={() => setSignValue(false)}>
        <CloseIcon />
      </IconButton>
      <div className="sign-card-one">
        <h1>Sign Up</h1>
        <p>or log into your account </p>
      </div>
      <div className="sign-card-two">
        <input className="input" type="number" placeholder="Phone number" />
        <input className="input" type="text" placeholder="Name" />
        <input className="input" type="email" placeholder="Email" />
      </div>
      <h3>Have a referral code?</h3>
      <button className="but" type="submit">
        CONTINUE
      </button>
      <div className="sign-card-three">
        <p>
          By creating on account, I accept the Terms & Conditions & Privacy
          Policy
        </p>
      </div>
    </div>
  );
}

function Feature() {
  return (
    <div className="feature">
      <div className="feature-one">
        <img
          src="images\4x_-_No_min_order_x0bxuf.webp"
          alt="no-min-order.png"
          width="120px"
        />
        <h2>No Minimum Order</h2>
        <p>
          Order in for yourself or for the group, with no restrictions on order
          value
        </p>
      </div>
      <div className="feature-two">
        <img
          src="images\4x_Live_order_zzotwy.webp"
          alt="live-order.png"
          width="120px"
        />
        <h2>Live Order Tracking</h2>
        <p>
          Know where your order is at all times, from the restaurant to your
          doorstep
        </p>
      </div>
      <div className="feature-three">
        <img
          src="images\4x_-_Super_fast_delivery_awv7sn.webp"
          alt="super-fast-delivery.png"
          width="120px"
        />
        <h2>Lightning-Fast Delivery</h2>
        <p>
          Experience Swiggy's superfast delivery for food delivered fresh & on
          time
        </p>
      </div>
    </div>
  );
}
