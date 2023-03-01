import React from "react";
import "./AdminNavigation.css";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../Logins/AdminLogin/CheckAdminLogin";
import LogoutIcon from "@mui/icons-material/Logout";
import sarallogo from "../../images/SaralBankLogo.jpg";

function AdminNavigation() {
  const navigate = useNavigate();
  const handleClick = () => {
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
              navigate("/admin-news-feed");
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    onClick={() => {
                      navigate("/admin-project");
                    }}
                  >
                    PROJECT
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/admin-managers");
                    }}
                  >
                    MANAGER
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/admin-employees");
                    }}
                  >
                    EMPLOYEE
                  </a>
                </li>

                {/* <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/admin-products");
                    }}
                  >
                    PRODUCT
                  </a>
                </li> */}
                 <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    onClick={() => {
                      navigate("/admin-document-add");
                    }}
                  >
                    DOCUMENTS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      navigate("/admin-notifications");
                    }}
                  >
                    NOTIFICATIONS
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      handleClick();
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
    </>
  );
}

export default AdminNavigation;
