export function CityData() {
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
