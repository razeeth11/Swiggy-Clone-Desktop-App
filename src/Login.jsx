import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { API } from "./API";
import { AppStore } from "./AppStore";
import {
  alertBox,
  content,
  feature,
  featureOne,
  loginButton,
  loginCard,
  logo,
  logSignButton,
  marketHead,
  pincode,
  pincodeButton,
  signCard,
  welcomePage
} from "./styles/loginStyles";

export function Login() {
  const [value, setValue] = useState("");
  const [state, setState] = useState(false);
  const [logValue, setLogValue] = useState(false);
  const [signValue, setSignValue] = useState(false);

  const setLog = () => {
    setLogValue(true);
    setSignValue(false);
  };

  const setSign = () => {
    setSignValue(true);
    setLogValue(false);
  };

  return (
    <div>
      <LogInCard logValue={logValue} setLogValue={setLogValue} />
      <SignUpCard
        signValue={signValue}
        setSignValue={setSignValue}
        setLogValue={setLogValue}
      />
      <div style={welcomePage}>
        <div style={content}>
          <div style={logo}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
              alt="Swiggy-logo.png"
              width="200px"
            />
            <div>
              <button
                style={logSignButton}
                onClick={() => setLog()}
                className="log"
              >
                Login
              </button>
              <button style={logSignButton} onClick={() => setSign()}>
                Sign up
              </button>
            </div>
          </div>

          <div style={marketHead}>
            <h1 style={{ marginBottom: "15px" }}>Late night at office ?</h1>
            <p style={{ fontSize: "22px" }}>
              Order food from favourite restaurants near you.
            </p>
          </div>

          <div style={pincode}>
            <div>
              <input
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  fontSize: "16px",
                  marginLeft: "10px",
                }}
                onChange={(ev) => setValue(ev.target.value)}
                type="number"
                placeholder="Enter your delivery location"
              />
            </div>
            <div style={{ backgroundColor: "#fc8019", cursor: "pointer" }}>
              <button
                style={pincodeButton}
                onClick={() => setState(value == "")}
              >
                FIND FOOD
              </button>
            </div>
          </div>
          {state ? (
            <Alert
              sx={alertBox}
              severity="error"
            >
              <strong>Enter your delivery location</strong>
            </Alert>
          ) : (
            <Alert
              sx={alertBox}
              severity="success"
            >
              <strong>Log In to continue</strong>
            </Alert>
          )}

          <div style={{ color: "grey", marginTop: "40px", fontSize: "16px" }}>
            <p style={{ marginTop: "10px" }}>POPULAR CITIES IN INDIA</p>
            <p
              style={{
                marginTop: "15px",
                maxWidth: "600px",
                wordSpacing: "10px",
              }}
            >
              <strong>
                Ahmedabad Bangalore Chennai Delhi,Gurgaon Hyderabad Kolkata
                Mumbai Pune& more.
              </strong>
            </p>
          </div>
        </div>

        <div>
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
  const navigate = useNavigate();

  const logValidation = yup.object({
    PhoneNumber: yup
      .string()
      .required("Enter the phone number")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Enter the valid number")
      .max(10, "Enter the valid number"),
  });

  const [formState, setFormState] = useState(false);

  const alert = {
    width: "100%",
    boxSizing: "border-box",
    fontSize: "13px",
  };

  const loginFormik = useFormik({
    initialValues: { PhoneNumber: "" },
    validationSchema: logValidation,
    onSubmit: async (values) => {
      const data = await fetch(`${API}/LogIn`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await data.json();
      if (data.status == 400) {
        setFormState(true);
      } else {
        localStorage.setItem("token", result.Token);
        navigate("/");
      }
    },
  });

  const inputStyle = {
    boxSizing: "border-box",
    width: "100%",
    fontSize: "16px",
    outline: "none",
    "&:focus" : {
      outline: 'none',
      border :' none',
      display : 'none'
    }
  };

  return (
    <>
      {logValue ? (
        <div style={loginCard}>
          <IconButton
            sx={{ fontSize: "30px", marginBottom: "20px" }}
            onClick={() => setLogValue(false)}
          >
            <CloseIcon />
          </IconButton>
          <div className="login-card-one">
            <h1 style={{ fontSize: "32px", padding: "5px 0" }}>Login</h1>
            <p style={{ fontSize: "14px", padding: "10px 0" }}>
              or create an account{" "}
            </p>
          </div>
          <form onSubmit={loginFormik.handleSubmit}>
            <div style={{ padding: "15px 0" }}>
              <TextField
                onChange={loginFormik.handleChange}
                name="PhoneNumber"
                style={inputStyle}
                type="number"
                value={loginFormik.values.PhoneNumber}
                placeholder="Phone number"
                error={
                  loginFormik.touched.PhoneNumber &&
                  loginFormik.errors.PhoneNumber
                    ? loginFormik.errors.PhoneNumber
                    : null
                }
                helperText={
                  loginFormik.touched.PhoneNumber &&
                  loginFormik.errors.PhoneNumber
                    ? loginFormik.errors.PhoneNumber
                    : null
                }
              />
              {formState ? (
                <Alert
                  sx={alert}
                  style={{
                    "&:hover": {
                      border: "none !important",
                      boxShadow: "none !important",
                    },
                  }}
                  severity="error"
                >
                  <strong>Invalid Credentials or Sign Up to continue</strong>
                </Alert>
              ) : null}
            </div>
            <button style={loginButton} type="submit">
              LOGIN
            </button>
          </form>
          <div>
            <p>
              By clicking on Login, I accept the Terms & Conditions & Privacy
              Policy
            </p>
          </div>
        </div>
      ) : (
        <SignUpCard inputStyle={inputStyle} />
      )}
    </>
  );
}

function SignUpCard({ signValue, setSignValue, setLogValue, inputStyle }) {
  const signValidation = yup.object({
    name: yup.string().required("Enter Your Name"),
    phoneNumber: yup
      .string()
      .required("Required Field")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Enter the valid number")
      .max(10, "Enter the valid number"),
    email: yup.string().email().required("Enter Your Email"),
  });

  const signUpFormik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      email: "",
    },
    validationSchema: signValidation,
    onSubmit: async (values) => {
      const data = await fetch(`${API}/signUp`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(values),
      });
      setSignValue(false);
      setLogValue(true);
    },
  });

  return (
    <>
      {signValue ? (
        <div style={signCard}>
          <IconButton
            sx={{ fontSize: "30px", marginBottom: "20px" }}
            onClick={() => setSignValue(false)}
          >
            <CloseIcon />
          </IconButton>
          <div>
            <h1 style={{ fontSize: "32px", padding: "5px 0" }}>Sign Up</h1>
            <p style={{ fontSize: "14px", padding: "10px 0" }}>
              or log into your account{" "}
            </p>
          </div>
          <form onSubmit={signUpFormik.handleSubmit}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                padding: "15px 0",
              }}
            >
              <TextField
                onChange={signUpFormik.handleChange}
                onBlur={signUpFormik.handleBlur}
                name="phoneNumber"
                sx={inputStyle}
                type="number"
                placeholder="Phone number"
                error={
                  signUpFormik.touched.phoneNumber &&
                  signUpFormik.errors.phoneNumber
                    ? signUpFormik.errors.phoneNumber
                    : null
                }
                helperText={
                  signUpFormik.touched.phoneNumber &&
                  signUpFormik.errors.phoneNumber
                    ? signUpFormik.errors.phoneNumber
                    : null
                }
              />
              <TextField
                onChange={signUpFormik.handleChange}
                onBlur={signUpFormik.handleBlur}
                name="name"
                sx={inputStyle}
                type="text"
                placeholder="Name"
                error={
                  signUpFormik.touched.name && signUpFormik.errors.name
                    ? signUpFormik.errors.name
                    : null
                }
                helperText={
                  signUpFormik.touched.name && signUpFormik.errors.name
                    ? signUpFormik.errors.name
                    : null
                }
              />
              <TextField
                onChange={signUpFormik.handleChange}
                onBlur={signUpFormik.handleBlur}
                name="email"
                sx={inputStyle}
                type="email"
                placeholder="Email"
                error={
                  signUpFormik.touched.email && signUpFormik.errors.email
                    ? signUpFormik.errors.email
                    : null
                }
                helperText={
                  signUpFormik.touched.email && signUpFormik.errors.email
                    ? signUpFormik.errors.email
                    : null
                }
              />
            </div>
            <h3>Have a referral code?</h3>
            <button style={loginButton} type="submit">
              CONTINUE
            </button>
            <div className="sign-card-three">
              <p>
                By creating on account, I accept the Terms & Conditions &
                Privacy Policy
              </p>
            </div>
          </form>
        </div>
      ) : (
        <loginCard />
      )}
    </>
  );
}

function Feature() {
  return (
    <div style={feature}>
      <div style={featureOne}>
        <img
          src="images\4x_-_No_min_order_x0bxuf.webp"
          alt="no-min-order.png"
          width="120px"
        />
        <h2 style={{ marginTop: "10px" }}>No Minimum Order</h2>
        <p>
          Order in for yourself or for the group, with no restrictions on order
          value
        </p>
      </div>
      <div style={featureOne}>
        <img
          src="images\4x_Live_order_zzotwy.webp"
          alt="live-order.png"
          width="120px"
        />
        <h2 style={{ marginTop: "10px" }}>Live Order Tracking</h2>
        <p>
          Know where your order is at all times, from the restaurant to your
          doorstep
        </p>
      </div>
      <div style={featureOne}>
        <img
          src="images\4x_-_Super_fast_delivery_awv7sn.webp"
          alt="super-fast-delivery.png"
          width="120px"
        />
        <h2 style={{ marginTop: "10px" }}>Lightning-Fast Delivery</h2>
        <p>
          Experience Swiggy's superfast delivery for food delivered fresh & on
          time
        </p>
      </div>
    </div>
  );
}
