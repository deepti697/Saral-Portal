import React from "react";
import "./ProjectNavigation.css";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../Logins/EmployeeLogin/CheckLoginAxis";
import LogoutIcon from "@mui/icons-material/Logout";
import sarallogo from "../../images/SaralBankLogo.jpg";

function ProjectNavigation() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    logOut();
    navigate("/");
  };

  return (
    <>
      <div className="headerposition">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid" id="navid">
            <img
            onClick={() => {
              navigate("/employee-news-feed");
            }} 
            style={{
                height: "4rem",
                width: "18rem",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "30px",
              }} src={sarallogo}/>
       
            <div
              className="collapse navbar-collapse navb-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    onClick={() => {
                      navigate("/employee-project");
                    }}
                  >
                    Project
                  </a>{" "}{" "}{" "}{" "}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    onClick={() => {
                      navigate("/manager-details");
                    }}
                  >
                    Manager
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/employee-search");
                    }}
                  >
                    Colleagues
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/employee-module");
                    }}
                  >
                    Policies
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/employee-documents");
                    }}
                  >
                    Documents
                  </a>{" "}
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/myprofile-details");
                    }}
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/opportunities");
                    }}
                  >
                    OPPORTUNITIES
                  </a>
                </li>
               
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    <LogoutIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div></div>

     
    </>
  );
}

export default ProjectNavigation;
