import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import "./styles/Helppage.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";


export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export function VerticalTabs1() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="help-page-box"> 
      <div className="div1">
      <h1 className="h1">Help & Support</h1>
      <p className="p">Let's take a step ahead and help you better.</p>
      </div>
    <div className="help-box">
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          minHeight: "510px",
        }}
      >
        <Tabs
          className="tabs"
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Partner Onboarding" {...a11yProps(0)} />
          <Tab label="Legal" {...a11yProps(1)} />
          <Tab label="FAQ's" {...a11yProps(2)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <HelpPage1 />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <HelpPage2 />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <HelpPage3 />
        </TabPanel>
      </Box>
    </div>
    </div>  
  );
}


export function HelpPage1() {
  return (
    <div className="help-page">
      <h1>Partner Onboarding</h1>
      <Accordion>
        <AccordionSummary className="help-typo"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>
            I want to partner my restaurant with Swiggy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="inner-typo">
            <span>Partner with us </span> <br />
            <Button variant="outlined">
              <a href="mailto:partnersupport@swiggy.in?subject=I want to partner my restaurant with Swiggy">
                SEND AN EMAIL
              </a>
            </Button>
            <br />
            <small>We will revert within 24-46 hrs</small>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary className="help-typo"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>
            What are the mandatory documents needed to list my restaurant on
            Swiggy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="inner-typo">
            <span>
              <li> Copies of the below documents are mandatory </li>
              <li> FSSAI Licence OR FSSAI Acknowledgement </li>
              <li> Pan Card </li>
              <li> GSTIN Certificate </li>
              <li> Cancelled Cheque OR bank Passbook </li>
              <li> Menu </li>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary className="help-typo"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>
            After I submit all documents, how long will it take for my
            restaurant to go live on Swiggy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="inner-typo">
            After all mandatory documents have been received and verified it
            takes upto 7-10 working days for the onboarding to be completed and
            make your restaurant live on the platform.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary className="help-typo"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>
            What is this one time Onboarding fees? Do I have to pay for it while
            registering?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="inner-typo">
            This is a one-time fee charged towards the system & admin costs
            incurred during the onboarding process. It is deducted from the
            weekly payouts after you start receiving orders from Swiggy.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary className="help-typo"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>
            Who should I contact if I need help & support in getting onboarded?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="inner-typo">
            <span>Partner with us </span>
            <Button variant="outlined">
              <a href="mailto:partnersupport@swiggy.in?subject=I want to partner my restaurant with Swiggy">
                SEND AN EMAIL
              </a>
            </Button>
            <br />
            <small>We will revert within 24-46 hrs</small>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary className="help-typo"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>
            How much commission will I be charged by Swiggy?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="inner-typo">
            The commission charges vary for different cities. You will be able
            to see the commission applicable for you once the preliminary
            onboarding details have been filled.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary className="help-typo"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>
            I don’t have an FSSAI licence for my restaurant. Can it still be
            onboarded?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="inner-typo">
            FSSAI licence is a mandatory requirement according to the
            government’s policies. However, if you are yet to receive the
            licence at the time of onboarding, you can proceed with the
            acknowledgement number which you will have received from FSSAI for
            your registration.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export function HelpPage2() {
  return (
    <div className="help-page">
      <h1>Legal</h1>
      <Accordion>
        <AccordionSummary className="help-typo"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>
            Terms of Use
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="inner-typo">
            These terms of use (the "Terms of Use") govern your use of our
            website www.swiggy.in (the "Website") and our "Swiggy" application
            for mobile and handheld devices (the "App"). The Website and the App
            are jointly referred to as the "Services"). Please read these Terms
            of Use carefully before you download, install or use the Services.
            If you do not agree to these Terms of Use, you may not install,
            download or use the Services. By installing, downloading or using
            the Services, you signify your acceptance to the Terms of Use and
            Privacy Policy (being hereby incorporated by reference herein) which
            takes effect on the date on which you download, install or use the
            Services, and create a legally binding arrangement to abide by the
            same.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary className="help-typo"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>
            Privacy Policy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="inner-typo">
            We ( Bundl Technologies Private Limited, alias "Swiggy" ) are fully
            committed to respecting your privacy and shall ensure that your
            personal information is safe with us. This privacy policy sets out
            the information practices of www.swiggy.com ("Website") including
            the type of information is collected, how the information is
            collected, how the information is used and with whom it is shared.
            Reference to "you" in this Privacy Policy refers to the users of
            this Website whether or not you access the services available on the
            Website or consummate a transaction on the Website. By using or
            accessing this Website, you agree to the terms and conditions of
            this Privacy Policy. You also expressly consent to our use and
            disclosure of your Personal Information (as defined below) in any
            manner as described in this Privacy Policy and further signify your
            agreement to this Privacy Policy and the Terms of Use (being
            incorporated by reference herein). If you do not agree with the
            terms and conditions of this Privacy Policy, please do not proceed
            further or use or access this Website.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary className="help-typo"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>
            Cancellations and Refund
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="inner-typo">
            a) As a general rule you shall not be entitled to cancel your order
            once placed. You may choose to cancel your order only within
            one-minute of the order being placed by you. However, subject to
            your previous cancellation history, Swiggy reserves the right to
            deny any refund to you pursuant to a cancellation initiated by you
            even if the same is within one-minute. b)If you cancel your order
            after one minute of placing it, Swiggy shall have a right to charge
            you 100% of the order amount as the cancellation fee , with a right
            to either not to refund the order value in case your order is
            prepaid or recover from your subsequent order in case your order is
            postpaid, to compensate our restaurant/merchants and delivery
            partners. c)Swiggy reserves the right to charge you cancellation fee
            for the orders constrained to be cancelled by Swiggy for reasons not
            attributable to Swiggy, including but not limited to: i)in the event
            if the address provided by you is either wrong or falls outside the
            delivery zone; ii) failure to contact you by phone or email at the
            time of delivering the order booking; iii) failure to deliver your
            order due to lack of information, direction or authorization from
            you at the time of delivery; or iv) unavailability of all the items
            ordered by you at the time of booking the order. However, in the
            unlikely event of an item on your order being unavailable, Swiggy
            will contact you on the phone number provided to us at the time of
            placing the order and inform you of such unavailability. In such an
            event you will be entitled to cancel the entire order and shall be
            entitled to a refund to an amount upto 100% of the order value. d)In
            case of cancellations for the reasons attributable to Swiggy or the
            restaurant partner or delivery partners, Swiggy shall not charge you
            any cancellation fee.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary className="help-typo"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>
            Terms of Use for SwiggyON-TIME / Assured
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="inner-typo">
            These terms of use (the "Terms of Use") that govern your use of our
            service Swiggy ON-TIME / Assured ("ON-TIME" / "Assured") on our
            website www.swiggy.in (the "Website") and our Swiggy application for
            mobile and handheld devices (the "App"). The services on ON-TIME /
            Assured available on our Website and the App are jointly referred to
            as the "On-Time Delivery". Please read these Terms of Use carefully
            before you use the Services. If you do not agree to these Terms of
            Use, you may not use the Services. By using the Services, you
            signify your acceptance to the Terms of Use and Privacy Policy
            (incorporated by reference herein) and creates a legally binding
            arrangement to abide by the same.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export function HelpPage3() {
  return (
    <div className="help-page">
      <h1>FAQ's</h1>
      <Accordion>
        <AccordionSummary className="help-typo"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>
            What is Swiggy Customer Care Number ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="inner-typo">
            We value our customer’s time and hence moved away from a single
            customer care number to a comprehensive chat-based support system
            for quick and easy resolution. You no longer have to go through the
            maze of an IVRS call support. Just search for your issue in the help
            section on this page and initiate a chat with us. A customer care
            executive will be assigned to you shortly. You can also email us
            your issue on support@swiggy.in Note: We value your privacy and your
            information is safe with us. Please do not reveal any personal
            information, bank account number, OTP etc. to another person. A
            Swiggy representative will never ask you for these details. Please
            do not reveal these details to fraudsters and imposters claiming to
            be calling on our behalf. Be vigilant and do not entertain phishing
            calls or emails. <br />
            <Button variant="outlined">
              <a href="mailto:partnersupport@swiggy.in?subject=I want to partner my restaurant with Swiggy">
                SEND AN EMAIL
              </a>
            </Button>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary className="help-typo"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>
            I Want to Explore Career Opportunities with Swiggy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="inner-typo-2">
          <span>Partner with us </span> <br />
            <Button variant="outlined">
              <a href="mailto:partnersupport@swiggy.in?subject=I want to partner my restaurant with Swiggy">
                SEND AN EMAIL
              </a>
            </Button>
            <br />
            <small>We will revert within 24-46 hrs</small>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary className="help-typo"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>
            I want to provide feedback
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="inner-typo">
          <Button variant="outlined">
              <a href="mailto:partnersupport@swiggy.in?subject=I want to partner my restaurant with Swiggy">
                SEND AN EMAIL
              </a>
            </Button>
            <br />
            <small>We will revert within 24-46 hrs</small>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary className="help-typo"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontSize: "16px" }}>
            Can I edit my Order ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="inner-typo-2">
          Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}