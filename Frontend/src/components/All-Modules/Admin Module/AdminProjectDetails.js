import React, { useEffect } from "react";
import AdminNavigation from "./AdminNavigation";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import axios from "axios";
import "./AdminProjectDetails.css";
import { Typography } from "@mui/material";
import { MDBCardImage } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { TimeoutLogic } from "../../Logins/TimeoutLogic";
import "../Employee Module/Card.css";
import bgimg from "../../images/card-bg.jpg";
import {MDBIcon} from "mdb-react-ui-kit";
import '@fortawesome/fontawesome-free/css/all.min.css';

const AdminProjectDetails = () => {
  const navigate = useNavigate();
  let projectdata = localStorage.getItem("AdminProject");
  let projectData1 = JSON.parse(projectdata);
  console.log(projectData1);
  let id = projectData1.projectId;
  function deleteProject() {
    // console.log(typeof id);
    // employeeData.map((ele12) => {
    //   element = ele;
    //   console.log(element);
    // });
    axios
      .delete(`http://localhost:8085/project/delete/${id}`)
      .then((res) => console.log(res));
    localStorage.removeItem("AdminProject");
    navigate("/admin-project");
  }
  // console.log( JSON.parse(projectdata))

  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8085/employees").then((response) => {
      setEmployeeData(response.data);
    });
  }, []);

  const [projectDetailsChange, setprojectDetailsChange] = useState(true);
  const [managerDetailsChange, setmanagerDetailsChange] = useState(false);
  const [employeeDetailsChange, setemployeeDetailsChange] = useState(false);
  const [supportTeamDetails, setsupportTeamDetails] = useState(false);
  const [stakeHolderDetailsChange, setstakeHolderDetailsChange] = useState(false);

  const projectDetails = () => {
    setprojectDetailsChange(true);
    setmanagerDetailsChange(false);
    setemployeeDetailsChange(false);
    setstakeHolderDetailsChange(false);
    setsupportTeamDetails(false);
  };

  const managerDetails = () => {
    setprojectDetailsChange(false);
    setmanagerDetailsChange(true);
    setemployeeDetailsChange(false);
    setstakeHolderDetailsChange(false);
    setsupportTeamDetails(false);
  };

  const employeeDetails = () => {
    setprojectDetailsChange(false);
    setmanagerDetailsChange(false);
    setemployeeDetailsChange(true);
    setstakeHolderDetailsChange(false);
    setsupportTeamDetails(false);
  };

  const stakeDetails = () => {
    setprojectDetailsChange(false);
    setmanagerDetailsChange(false);
    setemployeeDetailsChange(false);
    setstakeHolderDetailsChange(true);
    setsupportTeamDetails(false);
  };

  const supportteamDetails = () => {
    setsupportTeamDetails(true);
    setprojectDetailsChange(false);
    setmanagerDetailsChange(false);
    setemployeeDetailsChange(false);
    setstakeHolderDetailsChange(false);
  };

  return (
    <>
      <AdminNavigation />
      <TimeoutLogic/>
      <div>
        <Card>
          <Card.Header>
            <Nav variant="tabs" className="project-nav">
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={projectDetails}>
                  PROJECT DETAILS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={managerDetails}>
                  MANAGER DETAILS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={employeeDetails}>
                  {" "}
                  EMPLOYEE DETAILS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={supportteamDetails}>
                  SUPPORT TEAM
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="projectclass" onClick={stakeDetails}>
                  STAKEHOLDER DETAILS
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>

          <Card.Body
            className="projectdetailnav"
            style={{ display: projectDetailsChange ? "block" : "none",borderRadius:"15px" }}
          >
            <Typography variant="h6"><b>Name: </b> {projectData1.projectName}</Typography> <br/>
            <Typography variant="h6"><b>ID: </b> {projectData1.projectId}</Typography><br/>
            <Typography variant="h6"><b>Description: </b>{projectData1.projectDescription}</Typography><br/>
            <Typography variant="h6"><b>Flowchart: </b></Typography>
            <img
              src={projectData1.flowchartUrl}
              alt="Project Flow Chart"
              className="proj-flow-url"
            />
          </Card.Body>

          {projectData1.managerList.map((ele) => {
            return (
              <>
              <Card.Body
                  style={{ display: managerDetailsChange ? "block" : "none" }}
                >
                <div class="carddetail-wrapper">
                   <div class="carddetail">
                        <img src={bgimg} alt="card background" class="carddetail-img"/>
                        <img src={ele.profile} alt="profile image" class="profiledetail-img"/>
                        <h1 className="font">{ele.managerName}</h1>
                        <p class="jobdetail-title">{ele.designation}</p>
                        <p class="aboutdetail">
                        {ele.managerId}<br/>
                        {ele.emailId}<br/>
                        {ele.mobileNo}
                        </p>
                      
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
                 </Card.Body>
                 
              </>
            );
          })}
        

          <div class="carddetail-wrapper">
          {employeeData.map((ele) => {
            if (ele.projectId == projectData1.projectId) {
              console.log("This is Employee Id");
              return (
                <>
                  <Card.Body style={{ display: employeeDetailsChange ? "block" : "none"  }}>
                     <div class="carddetail">
                        <img src={bgimg} alt="card background" class="carddetail-img"/>
                        <img src={ele.profile} alt="profile image" class="profiledetail-img"/>
                        <h1 className="font">{ele.employeeName}</h1>
                        <p class="jobdetail-title">{ele.designation}</p>
                        <p class="aboutdetail">
                        {ele.employeeId}<br/>
                        {ele.emailId}<br/>
                        {ele.mobileNo}
                        </p>
                      
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
                 </Card.Body>
                </>
              );
            }
          })}
        </div>

      <div class="carddetail-wrapper">
          {projectData1.supportTeamList.map((ele) => {
            return (
              <>
                <Card.Body style={{display: supportTeamDetails ? "block" : "none"}}>
                   <div class="carddetail">
                        <img src={bgimg} alt="card background" class="carddetail-img"/>
                        <img src={ele.profile} alt="profile image" class="profiledetail-img"/>
                        <h1 className="font">{ele.employeeName}</h1>
                        <p class="jobdetail-title">{ele.designation}</p>
                        <p class="aboutdetail">
                        {ele.employeeId}<br/>
                        {ele.emailId}<br/>
                        {ele.mobileNo}
                        </p>
                      
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
              </Card.Body>
              </>
            );
          })}
        </div>

        <div class="carddetail-wrapper">
          {projectData1.stakeholder.map((ele) => {
            return (
              <>
                   <Card.Body  style={{display: stakeHolderDetailsChange ? "block" : "none"}} >
                    
                    <div class="carddetail">
                        <img src={bgimg} alt="card background" class="carddetail-img"/>
                        <img src={ele.stakeholderprofile} alt="profile image" class="profiledetail-img"/>
                        <h1 className="font">{ele.stakeholderName}</h1>
                        <p class="jobdetail-title">{ele.stakeholderPosition}</p>
                        <p class="aboutdetail">
                        {ele.stakeholderId}<br/>
                        {ele.stakeholderEmail}<br/>
                        {ele.stakeholderMobileNo}
                        </p>
                      
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
                </Card.Body>       
            </>
            );
          })}
        </div>
       </Card>
      </div>
    </>
  );
};

export default AdminProjectDetails;
