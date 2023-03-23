import "./App.css";
import "./styles/login.css";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import { ProductsPage } from "./ProductsPage";
import { OfferPage } from "./OfferPage";
import { TopNavBar } from "./TopNavBar";
import { VerticalTabs1 } from "./HelpPage"


export function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offerPage" element={<OfferPage />} />
        <Route path="/helpPage" element={<VerticalTabs1 />} />
      </Routes>
    </div>
  );
}

function Login() {
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
      <CityData />
    </div>
  );
}

function LogInCard({ logValue, setLogValue }) {
  const style = {
    display: logValue ? "block" : "none",
  };
  const alert = {
    width: "100%",
    boxSizing: "border-box",
    fontSize: "13px",
  };

  const [login, setLogin] = useState("");
  const [state, setState] = useState(false);

  return (
    <div style={style} className="login-card">
      <IconButton onClick={() => setLogValue(false)}>
        <CloseIcon />
      </IconButton>
      <div className="login-card-one">
        <h1>Login</h1>
        <p>or create an account </p>
      </div>
      <div className="login-card-two">
        <input
          onChange={(ev) => setLogin(ev.target.value)}
          className="input"
          type="number"
          placeholder="Phone number"
        />
        {state ? (
          <Alert sx={alert} severity="error">
            <strong>Enter your Phone number</strong>
          </Alert>
        ) : null}
      </div>
      <button
        onClick={() => setState(login == "")}
        className="but"
        type="submit"
      >
        LOGIN
      </button>
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

function AppStore() {
  return (
    <div className="AppStore">
      <div className="AppStore-one">
        <h1>Restaurants in your pocket</h1>
        <p>
          Order from your favorite restaurants & track on the go, with the
          all-new Swiggy app.
        </p>
        <img src="images\play.webp" alt="playstore-link.jpeg" width="180px" />
        <img
          src="images\iOS_ajgrty.webp"
          alt="Appstore-link.jpeg"
          width="180px"
        />
      </div>
      <div className="AppStore-two">
        <a href="https://play.google.com/store/apps/details?id=in.swiggy.android">
          <img
            src="images\firxt.jpeg"
            alt="swiggy-online-app.jpeg"
            width="300px"
          />
        </a>
        <a href="https://play.google.com/store/apps/details?id=in.swiggy.android">
          <img
            src="images\second.jpeg"
            alt="swiggy-online-app.jpeg"
            width="300px"
          />
        </a>
      </div>
    </div>
  );
}

function CityData() {
  const city = [
    "abohar",
    "adilabad",
    "adityapur",
    "adoni",
    "agartala",
    "agra",
    "ahmedabad",
    "ahmednagar",
    "aizawl",
    "ajmer",
    "akola",
    "alappuzha",
    "aligarh",
    "alipurduar",
    "allahabad",
    "almora",
    "alwar",
    "ambajogai",
    "ambala",
    "ambikapur",
    "ambur",
    "amravati",
    "amreli",
    "amritsar",
    "anand",
    "anantapur",
    "ankleshwar",
    "arakkonam",
    "arambagh",
    "araria",
    "arrah",
    "asansol",
    "aurangabad",
    "aurangabadbihar",
    "azamgarh",
    "baddi",
    "bagalkot",
    "bagdogra",
    "bahadurgarh",
    "bahraich",
    "balaghat",
    "balangir",
    "balasore",
    "ballari",
    "ballia",
    "balrampur",
    "balurghat",
    "banda",
    "bangalore",
    "bankura",
    "baramati",
    "baran",
    "bardhaman",
    "bardoli",
    "bareilly",
    "barh",
    "baripada",
    "barmer",
    "barnala",
    "barshi",
    "basirhat",
    "basti",
    "batala",
    "bathinda",
    "beawar",
    "beed",
    "begusarai",
    "bela-pratapgarh",
    "belgaum",
    "berhampore",
    "berhampur",
    "bettiah",
    "betul",
    "bhadohi",
    "bhadrachalam",
    "bhadrak",
    "bhadravati",
    "bhagalpur",
    "bhandara",
    "bharabanki",
    "bharatpur",
    "bharuch",
    "bhatkal",
    "bhavnagar",
    "bhawanipatna",
    "bhilai",
    "bhilwara",
    "bhimavaram",
    "bhind",
    "bhiwadi",
    "bhiwani",
    "bhopal",
    "bhubaneswar",
    "bhuj",
    "bhusawal",
    "bidar",
    "biharsharif",
    "bijapur",
    "bijnor",
    "bikaner",
    "bilaspur",
    "bilimora",
    "biswanath-chariali",
    "bodhan-rural",
    "bodinayakanur",
    "boisar",
    "bokaro",
    "bolpur",
    "bongaigaon",
    "bongaon",
    "budaun",
    "budhwal",
    "bulandshahr",
    "buldana",
    "bundi",
    "burhanpur",
    "buxar",
    "central-goa",
    "chaibasa",
    "chakdaha",
    "chalisgaon",
    "chandausi",
    "chandigarh",
    "chandrapur",
    "chennai",
    "chhapra",
    "chhatarpur",
    "chhindwara",
    "chidambaram",
    "chikhli",
    "chikkaballapur",
    "chikmagalur",
    "chiplun",
    "chitradurga",
    "chittoor",
    "chittorgarh",
    "churu",
    "coimbatore",
    "cooch-behar",
    "cuddalore",
    "cuttack",
    "dahanu",
    "dahod",
    "daltonganj",
    "daman",
    "darbhanga",
    "darjeeling",
    "dasuya",
    "dausa",
    "davanagere",
    "dehradun",
    "dehri",
    "delhi",
    "deoghar",
    "deoria-city",
    "dewas",
    "dhanbad",
    "dhar",
    "dharamshala",
    "dharapuram",
    "dharmapuri",
    "dharwad",
    "dholpur",
    "dhule",
    "dibrugarh",
    "digboi",
    "dimapur",
    "dindigul",
    "diu",
    "doddaballapura",
    "duliajan",
    "dumka",
    "dungarpur",
    "durgapur",
    "eluru",
    "erode",
    "etah",
    "etawah",
    "faizabad",
    "faridabad",
    "faridkot",
    "farrukhabad",
    "fatehabad",
    "fatehgarh-sahib",
    "fatehpur",
    "fazilka",
    "firozabad",
    "firozpur",
    "gadag-betigeri",
    "gadwal",
    "gandhidham",
    "gangapur-city",
    "gangarampur",
    "gangtok",
    "gauriganj",
    "gaya",
    "ghazipur",
    "giridih",
    "godhra",
    "gokak",
    "golaghat",
    "gonda",
    "gondia",
    "gopalganj",
    "gorakhpur",
    "gudivada",
    "gudur",
    "guna",
    "guntakal",
    "guntur",
    "gurdaspur",
    "gurgaon",
    "gwalior",
    "habra",
    "hajipur",
    "haldia",
    "haldwani",
    "halol",
    "hamirpur",
    "hampi",
    "hansi",
    "hanumangarh",
    "hapur",
    "hardoi",
    "haridwar",
    "hassan",
    "hathras",
    "haveri",
    "himmatnagar",
    "hisar",
    "hojai",
    "hoshangabad",
    "hoshiarpur",
    "hospet",
    "hosur",
    "hubli",
    "hyderabad",
    "ichalkaranji",
    "imphal",
    "indore",
    "itanagar",
    "itarsi",
    "jabalpur",
    "jagdalpur",
    "jagraon",
    "jagtial",
    "jahanabad",
    "jaipur",
    "jalandhar",
    "jalgaon",
    "jalna",
    "jalpaiguri",
    "jammu",
    "jamnagar",
    "jamshedpur",
    "jamui",
    "jangipur",
    "jaunpur",
    "jhalawar",
    "jhansi",
    "jhargram",
    "jharsuguda",
    "jhunjhunu",
    "jind",
    "jjajjar",
    "jodhpur",
    "jorhat",
    "junagadh",
    "kadapa",
    "kadayanallur",
    "kadiri",
    "kaithal",
    "kakinada",
    "kalaburagi",
    "kamareddy",
    "kanchrapara",
    "kannauj",
    "kanpur",
    "kanyakumari",
    "kapurthala",
    "karad",
    "karaikal",
    "karaikkudi",
    "karimnagar",
    "karnal",
    "karur",
    "karwar",
    "kashipur",
    "katihar",
    "katni",
    "kavali",
    "kayamkulam",
    "kendrapada",
    "kendujhar",
    "khagaria",
    "khalilabad",
    "khamgaon",
    "khammam",
    "khandwa",
    "khanna",
    "kharagpur",
    "kishanganj",
    "kishangarh",
    "kochi",
    "kodaikanal",
    "kohima",
    "kokrajhar",
    "kolar",
    "kolhapur",
    "kolkata",
    "kollam",
    "koppal",
    "korba",
    "kota",
    "kotdwar",
    "kothagudem",
    "kottayam",
    "kovilpatti",
    "kozhikode",
    "krishnagiri",
    "krishnanagar",
    "kullu",
    "kumbakonam",
    "kurnool",
    "kurukshetra",
    "kushalnagar",
    "lakhimpur",
    "lalitpur",
    "latur",
    "lonavla",
    "lpu-phagwara",
    "lucknow",
    "ludhiana",
    "machilipatnam",
    "madanapalle",
    "madhubani",
    "madikeri",
    "madurai",
    "mahbubnagar",
    "mahoba",
    "mainpuri",
    "malappuram",
    "malda",
    "malegaon",
    "malout",
    "manali",
    "mancherial",
    "mandapeta",
    "mandi-dabwali",
    "mandi-gobindgarh",
    "mandsaur",
    "mandya",
    "mangaluru",
    "manipal",
    "mansa",
    "markapur",
    "mathura",
    "maunath-bhanjan",
    "mayiladuthurai",
    "medinipur",
    "meerut",
    "mehsana",
    "mettupalayam",
    "miryalaguda",
    "mirzapur",
    "modinagar",
    "moga",
    "moradabad",
    "morbi",
    "morena",
    "motihari",
    "mount-abu",
    "mughalsarai",
    "mukerian",
    "muktsar",
    "mumbai",
    "munger",
    "mussoorie",
    "muzaffarnagar",
    "muzaffarpur",
    "mysore",
    "nabadwip",
    "nabha",
    "nadiad",
    "nagaon",
    "nagapattinam",
    "nagda",
    "nagercoil",
    "nagpur",
    "naharlagun",
    "nainital",
    "nakodar",
    "nalbari",
    "nalgonda",
    "namakkal",
    "nanded",
    "nandurbar",
    "nandyal",
    "nangal",
    "naraingarh",
    "narasaraopet",
    "narnaul",
    "narsinghpur",
    "nashik",
    "navsari",
    "neemuch",
    "nellore",
    "neyveli",
    "nirmal",
    "nizamabad",
    "noida",
    "noida-1",
    "north-lakhimpur",
    "ongole",
    "ooty",
    "orai",
    "osmanabad",
    "palakkad",
    "palakollu",
    "palampur",
    "palani",
    "palanpur",
    "palghar",
    "pali",
    "palwal",
    "panipat",
    "paradeep",
    "paramakudi",
    "parbhani",
    "parvathipuram",
    "pathankot",
    "patiala",
    "patna",
    "pattukkottai",
    "perambalur",
    "phagwara",
    "piler",
    "pilibhit",
    "pilkhuwa",
    "pinjore-city",
    "pondicherry",
    "porbandar",
    "port-blair",
    "pratapgarh",
    "proddatur",
    "pudukkottai",
    "pune",
    "puri",
    "purnea",
    "purulia",
    "pusad",
    "puttur",
    "rae-bareli",
    "raghunathpur",
    "raichur",
    "raiganj",
    "raigarh",
    "raipur",
    "rajahmundry",
    "rajampet",
    "rajapalayam",
    "rajgarh",
    "rajkot",
    "rajnandgaon",
    "rajsamand",
    "ramagundam",
    "ramanagara",
    "ramanathapuram",
    "ramgarh",
    "rampur",
    "ranaghat-wb",
    "ranchi",
    "rangia",
    "rangpo",
    "ranibennur",
    "raniganj",
    "ratlam",
    "ratnagiri",
    "ravulapalem",
    "rayachoty",
    "rayagada",
    "rewa",
    "rewari",
    "rishikesh",
    "roha",
    "rohtak",
    "roorkee",
    "ropar",
    "rourkela",
    "rudrapur",
    "sagar",
    "saharanpur",
    "saharsa",
    "salem",
    "samastipur",
    "sambalpur",
    "sangamner",
    "sangli",
    "sangrur",
    "sankarankoil",
    "santipur",
    "sasaram",
    "satara",
    "satna",
    "sawai-madhopur",
    "sehore",
    "shahjahanpur",
    "shamli",
    "shikohabad",
    "shillong",
    "shimla",
    "shirdi-city",
    "shivamogga",
    "shivpuri",
    "siddipet",
    "sikar",
    "silchar",
    "siliguri",
    "silvassa",
    "sindhanur",
    "singrauli",
    "sirkali",
    "sirsa",
    "sirsi",
    "sitamarhi",
    "sitapur",
    "sivakasi",
    "sivasagar",
    "siwan",
    "solan",
    "solapur",
    "sonipat",
    "sri-ganganagar",
    "srikakulam",
    "srinagar",
    "srivilliputhur",
    "sullurpeta",
    "sultanpur",
    "sulthan-bathery",
    "surat",
    "suratgarh",
    "surendranagar-dudhrej",
    "suri",
    "suryapet",
    "tadepalligudem",
    "tadpatri",
    "tanuku",
    "tarn-taran-sahib",
    "tenkasi",
    "tezpur",
    "thanjavur",
    "theni",
    "thiruvalla",
    "thiruvallur",
    "thiruvananthapuram",
    "thiruvarur",
    "thoothukudi",
    "thrissur",
    "tindivanam",
    "tinsukia",
    "tiptur",
    "tirunelveli",
    "tirupati",
    "tirupattur",
    "tirupur",
    "tiruttani",
    "tiruvannamalai",
    "tohana",
    "trichy",
    "tumakuru",
    "tuni",
    "udaipur",
    "udgir",
    "udumalaipettai",
    "ujjain",
    "uluberia",
    "una",
    "unnao",
    "vadodara",
    "valsad",
    "vapi",
    "varanasi",
    "vellore",
    "veraval",
    "vidisha",
    "vijayawada",
    "viluppuram",
    "virudhunagar",
    "vizag",
    "vizianagaram",
    "vyara",
    "waidhan",
    "warangal",
    "wardha",
    "washim",
    "wayanad",
    "yamuna-nagar",
    "yavatmal",
  ];

  return (
    <div className="divv">
      <div className="div">
        <div>
          <p>
            <strong>WE DELIVER TO</strong>
          </p>
          <hr />
        </div>
        <div className="cityData">
          {city.map((ev, index) => (
            <CityLinks city={ev} key={index} />
          ))}
        </div>
      </div>
      <div className="final">
        <div>
          <a href="https://www.swiggy.com">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
              alt="Swiggy-logo.png"
              width="200px"
            />
          </a>
        </div>
        <div>
          <p>&#169; 2023 SWIGGY</p>
        </div>
        <div className="final-contact">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
            alt="facebook=logo.png"
            width="25px"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
            alt="pinterest-logo.png"
            width="25px"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
            alt="instsagram-logo.png"
            width="25px"
          />
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
            alt="twitter-logo.png"
            width="25px"
          />
        </div>
      </div>
    </div>
  );
}

function CityLinks({ city }) {
  const dt = `https://www.swiggy.com/city/${city}`;

  return (
    <div className="City-links">
      <a href={dt}>
        <li>{city}</li>
      </a>
    </div>
  );
}
