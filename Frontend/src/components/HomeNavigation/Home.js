import React from "react";
import "./Home.css";
import { FooterContainer } from "./footer1";
import { useNavigate } from "react-router-dom";
import ImageChange from "./HomeFeed";
import Card from "react-bootstrap/Card";
import CardM from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MapsHomeWorkSharpIcon from '@mui/icons-material/MapsHomeWorkSharp';
import TimeToLeaveSharpIcon from '@mui/icons-material/TimeToLeaveSharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import HealthAndSafetySharpIcon from '@mui/icons-material/HealthAndSafetySharp';
import LatestOffers from "./LatestOffers";
import GoogleTranslate from "./GoogleTranslate";
import sarallogo from '../images/SaralBankLogo.jpg';
import rates from "../images/rates.jpeg";
//import Diversity2Icon from '@mui/icons-material/Diversity2';

function Home() {
  const navigate = useNavigate();

    return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" id="navid">
          <img style={{
                height: "4rem",
                width: "18rem",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "30px",
              }} src={sarallogo}/>
       
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navb-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    navigate("/services");
                  }}
                >
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    navigate("/contact");
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/employee-login");
                      }}
                    >
                      Employee
                    </a>
                  </li>
                  {/* <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/manager-login");
                      }}
                    >
                      Manager
                    </a>
                  </li> */}
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/admin-login");
                      }}
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                <GoogleTranslate/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ImageChange />
      <div class="breakingcontainer">
      <div class="ticker">
      <div class="update">
          <marquee>
            <p><b>
            Mandatory Profile password change after 365 days introduced for added security. &nbsp;&nbsp;| &nbsp;&nbsp;
            For added security, new functionality to maintain per day and per transaction limit for general merchant payment transactions has been implemented.
             Please visit Define Limit under profile section. &nbsp;&nbsp;| &nbsp;&nbsp;
            Customers who have installed “SARAL Secure OTP App” on their mobile and completed registration process will now receive 
            Login OTP for OnlineSARAL.com on the app instead of SMS OTP &nbsp;&nbsp;| &nbsp;&nbsp;
            Call us toll free on 1800 12345 and 1800 21006 and get a wide range of services through SARAL Contact Centre &nbsp;&nbsp;| &nbsp;&nbsp;
            SARAL never asks for your Card/PIN/OTP/CVV details on phone, message or email. Please do not click on links received on your email or mobile asking your Bank/Card details.
            </b>
          </p>
          </marquee>
        </div>
      </div>
    </div>
  <br/>
  <br/>
  <LatestOffers/>
  <Typography sx={{ textAlign: "center", justifyContent: "center", fontSize: "30px",
   fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
    <b>Rates & Charges</b>
  </Typography>
      <CardM sx={{ maxWidth: 900, maxheight: 400, borderTopRightRadius: "150px", marginLeft: "300px", marginRight:"120px",boxShadow: "3px 3px 3px 5px #9DADDF" }} >
        <Card.Img
          src={rates}
          style={{maxHeight:120}}
        />
        <br />
        <br />
        <div className="flex-container">
          <div className="credit">
            <Card>
              <MapsHomeWorkSharpIcon
                style={{
                  height: "5rem",
                  width: "5rem",
                  color: "#002d64",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <Card.Title className="title">
                <Typography gutterBottom variant="h5" component="div"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                  8.40% P.A.*
                </Typography>
                <Typography gutterBottom variant="h6" component="div"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                  Saral Home Loan
                </Typography>
              </Card.Title>
            </Card>
          </div>
          <div className="car-loan">
            <Card>
              <TimeToLeaveSharpIcon
                style={{
                  height: "5rem",
                  width: "5rem",
                  color: "#002d64",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <Card.Title className="title">
                <Typography gutterBottom variant="h5" component="div"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                  8.60% P.A.*
                </Typography>
                <Typography gutterBottom variant="h6" component="div"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                  Saral Car Loan
                </Typography>
              </Card.Title>
            </Card>
          </div>
          <div className="car-loan">
            <Card>
              <SchoolSharpIcon
                style={{
                  height: "5rem",
                  width: "5rem",
                  color: "#002d64",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <Card.Title className="title">

                <Typography gutterBottom variant="h5" component="div"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                  8.85% P.A.*
                </Typography>
                <Typography gutterBottom variant="h6" component="div"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                  Saral Education Loan
                </Typography>
              </Card.Title>
            </Card>
          </div>
          <div className="health">
            <Card>
              <HealthAndSafetySharpIcon
                style={{
                  height: "5rem",
                  width: "5rem",
                  color: "#002d64",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
              <Card.Title className="title">
                <Typography gutterBottom variant="h5" component="div"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                  10.60% P.A.*
                </Typography>
                <Typography gutterBottom variant="h6" component="div"
                fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
                  Saral Personal Loan
                </Typography>
              </Card.Title>
            </Card>
          </div>
        </div>
      </CardM>
      <br />
      <br />
      <Typography sx={{ textAlign: "center", justifyContent: "center", fontSize: "30px",
      fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}>
        <b>Official Blog of Saral</b>
      </Typography>
      <Typography sx={{ textAlign: "center", justifyContent: "center", fontSize: "17px" ,
      fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}>
        From banking services to the latest financial news, get all the useful information here.
      </Typography>
      <br />
      <div className="cards-container">
        <div className="prod1">
          <CardM sx={{ maxWidth: 345, maxHeight: 400, borderRadius: "25px"  }} className="img-card">
            <Card.Img
              src="https://www.axisbank.com/images/default-source/progress-with-us_new/equity-or-hybrid-funds-b.jpg"
              className="homeImage"
            />
            <CardContent className="homeimg1">
              <Typography gutterBottom variant="h6" component="div" 
              fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
              Equity or Hybrid Funds
              </Typography>
              <Typography variant="body2" color="text.secondary">
              These funds invest in a mix of different asset classes to diversify the portfolio with an aim to minimise the risk involved.
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="button" size="small">
                Know More
              </Button>
            </CardActions>
          </CardM>
        </div>
        <div className="prod1">
          <CardM sx={{ maxWidth: 345, maxHeight: 400, borderRadius: "25px" }} className="img-card">
            <Card.Img
              src="https://www.axisbank.com/images/default-source/progress-with-us_new/guide-to-opening-a-current-account.jpg"
              className="homeImage"
            />
            <CardContent className="homeimg1">
              <Typography gutterBottom variant="h6" component="div"
              fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
              Opening Current Account
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Banks offer different types of accounts. A savings account is a popular account for individuals.
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="button" size="small">
                Know More
              </Button>
            </CardActions>
          </CardM>
        </div>
        <div className="prod1">
          <CardM sx={{ maxWidth: 345, maxHeight: 400, borderRadius: "25px" }} className="img-card">
            <Card.Img
              src="https://www.axisbank.com/images/default-source/progress-with-us_new/otps-help-with-credit-card-transactions.jpg"
              className="homeImage"
            />
            <CardContent className="homeimg1">
              <Typography gutterBottom variant="h6" component="div"
              fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
              How do OTPs help?
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OTPs are used to authenticate your purchase and ensure that the cardholder is the one using the card. 
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="button" size="small">
                Know More
              </Button>
            </CardActions>
          </CardM>
        </div>
        <div className="prod1">
          <CardM sx={{ maxWidth: 345, maxHeight: 400 , borderRadius: "25px"}} className="img-card">
            <Card.Img
              src="https://www.axisbank.com/images/default-source/progress-with-us_new/about-virtual-credit-card.jpg"
              className="homeImage"
            />
            <CardContent className="homeimg1">
              <Typography gutterBottom variant="h6" component="div"
              fontFamily="'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif">
              Virtual Credit Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Virtual credit cards offer convenience along with security and enhance your online purchase experience.
              </Typography>
            </CardContent>
            <CardActions>
              <Button className="button" size="small">
                Know More
              </Button>
            </CardActions>
          </CardM>
        </div>
      </div>
      
      <FooterContainer />
  </>
  );
}

export default Home;
