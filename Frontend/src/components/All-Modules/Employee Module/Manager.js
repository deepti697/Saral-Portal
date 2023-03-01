import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectNavigation from "./ProjectNavigation";
import Card from "react-bootstrap/Card";
import "./Manager.css";
import {
  MDBProgress,
  MDBProgressBar,
  MDBCard,
  MDBCardText,
  MDBCardBody,

  MDBIcon,
} from "mdb-react-ui-kit";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Typography } from "@mui/material";
import { SessionLogic } from "../../Logins/SessionLogic";
import bgimg from '../../images/card-bg2.jpg';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import '../../Navigation/ManagerProfileCard.css';

const Manager = () => {
  const [manager, setManager] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8085/employees").then((response) => {
      setManager(response.data);
    });
  }, []);

  let empDetails = localStorage.getItem("LoginData");
  let empData = JSON.parse(empDetails);

  //    console.log(empData)

  return (
    <>
    <SessionLogic/>
      <ProjectNavigation />
      {manager.map((ele) => {
        if (ele.emailId == empData.emailId) {
          // console.log("Same Employee");
          return (
            <>
             <div class="magcarddetail-wrapper">
                   <div class="magcarddetail">
                        <img src={bgimg} alt="card background" class="magcarddetail-img"/>
                        <img src={ele.manager.profile} alt="profile image" class="magprofiledetail-img"/>
                        <h1 className="fontfamily">{ele.manager.managerName}</h1>
                        {/* <h4>{empData.projectId}</h4> */}<br/>
                        <p>
                            <ArrowCircleRightIcon/>{" "}{" "}{ele.manager.managerId}<br/>
                            <AccountBoxIcon/>{" "}{" "}{ele.manager.designation}<br/>
                            <EmailIcon />{" "}{" "}{ele.manager.emailId}<br/>
                            <LocalPhoneIcon/>{" "}{" "}{ele.manager.mobileNo}<br/>
                        </p><br/>
                        <div className="d-flex justify-content-start">
                              <a href="https://www.linkedin.com/">
                                <MDBIcon fab icon="linkedin-in me-3" size="2x" style={{color:"#0A66C2"}} />
                              </a>

                              <a href="https://twitter.com/?lang=en-in">
                                <MDBIcon  fab  icon="twitter me-3"  size="2x"  style={{color:"#1DA1F2"}}  />
                              </a>

                              <a href="https://www.instagram.com/">
                                <MDBIcon  fab  icon="instagram me-3"  size="2x"  style={{color:"#E4405F"}}  />
                              </a>

                              <a href="https://www.facebook.com/">
                                <MDBIcon  fab  icon="facebook me-3"  size="2x"  style={{color:"#1877f2"}}  />
                               </a>
                               <br/>
                               <br/>
                        </div>
                    </div>
                    </div>

            </>
          );
        }
      })}
    </>
  );
};

export default Manager;
