import axios from "axios";
import React, { useEffect, useState } from "react";
import "reactjs-popup/dist/index.css";
import ProjectNavigation from "./ProjectNavigation";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import LockIcon from "@mui/icons-material/Lock";
import { SessionLogic } from "../../Logins/SessionLogic";
import PerformanceCard from "../Employee Module/PerformanceCard";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

const MyProfile = () => {
  const [myProfile, setMyProfile] = useState([]);
  const [pageset, setPageSet] = useState(true);
  const [oldpassword, setoldpassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  
  useEffect(() => {
    axios.get("http://localhost:8085/employees").then((response) => {
      setMyProfile(response.data);
    });
  }, []);

  let empDetails = localStorage.getItem("LoginData");
  let empData = JSON.parse(empDetails);
  function passwoordreset() {
    setPageSet(false);
  }

  function close() {
    setPageSet(true);
  }

  function pass(e) {
    setnewPassword(e.target.value);
  }
  function pass1(e) {
    setconfirmPassword(e.target.value);
  }

  function pass2(e) {
    setoldpassword(e.target.value);
  }

  function submit(event) {
    event.preventDefault();
    myProfile.map((ele) => {
      if (ele.emailId == empData.emailId) {
        if (ele.password == oldpassword) {
          if (newPassword == confirmPassword) {
            let element = ele;
            element = { ...element, password: newPassword };
            axios
              .put(
                `http://localhost:8085/employee/update/${element.employeeId}`,
                element
              )
              .then((res) => {
                console.log(res);
                alert("Password Changed", window.location.reload());
              });
          } else {
            alert("Password and Confirm Password Should be same");
          }
        } else {
          alert("Wrong old password");
        }
      }
    });
  }
  return (
    <>
      <ProjectNavigation />
      <SessionLogic />
      {pageset == true ? (
        myProfile.map((ele) => {
          if (ele.emailId == empData.emailId) {
            // console.log("Same Employee");
            return (
              <>
                <section style={{ backgroundColor: '#eee' }}>
                <SettingsSuggestIcon
                    // type="submit"
                    // halfWidth
                    // variant="contained"
                    // sx={{ mt: 3, mb: 2 }}
                    // id="btnlogin"
                    style={{ color: "#002d64", float:"right", marginRight:"50px", width:"50px", height:"50px"}}
                    onClick={passwoordreset}
                  />
                    {/* Change Password
                  </KeyIcon> */}
                  <MDBContainer className="py-5">
                    <MDBRow>
                      <MDBCol lg="4">
                        <MDBCard className="mb-4">
                          <MDBCardBody className="text-center">
                            <MDBCardImage
                              src={ele.profile}
                              alt="avatar"
                              className="rounded-circle"
                              style={{ width: '200px', height: '180px' }}
                              fluid />
                            <h3  className="mb-1 fontfamily ">{ele.employeeName}</h3>
                            <p className="text-muted mb-1">{ele.designation}</p>
                          </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4 mb-lg-0">
                          <MDBCardBody className="p-0">
                            <MDBListGroup flush className="rounded-3">
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                <a href="https://www.linkedin.com/">
                                  <MDBIcon fab icon="linkedin fa-lg" style={{ color: "#0A66C2" }} /></a>
                                <MDBCardText>https://www.linkedin.com/</MDBCardText>
                              </MDBListGroupItem>

                              <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                <a href="https://twitter.com/?lang=en-in">
                                  <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} /></a>
                                <MDBCardText>https://twitter.com/?lang=en-in</MDBCardText>
                              </MDBListGroupItem>
                              <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                <a href="https://www.instagram.com/">
                                  <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} /></a>
                                <MDBCardText>https://www.instagram.com/</MDBCardText>
                              </MDBListGroupItem>

                            </MDBListGroup>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>

                      <MDBCol lg="8">
                        <MDBRow>
                          <MDBCol md="6">
                            <MDBCard className="mb-4 ">
                              <MDBCardBody>
                              <MDBRow>
                              <MDBCol sm="4">
                                <MDBCardText style={{ fontSize: '1.2rem' }}>ID</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="8">
                                <MDBCardText className="text-muted" style={{ fontSize: '1rem' }}>{ele.employeeId}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol sm="4">
                                <MDBCardText style={{ fontSize: '1.2rem' }}>Email</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="8">
                                <MDBCardText className="text-muted" style={{ fontSize: '1rem' }}>{ele.emailId}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol sm="4">
                                <MDBCardText style={{ fontSize: '1.2rem' }}>Mobile</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="8">
                                <MDBCardText className="text-muted" style={{ fontSize: '1rem' }}>{ele.mobileNo}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>

                          <MDBCol md="6">
                          <MDBCard className="mb-4 mb-md-0">
                          <MDBCardBody>
                          <MDBRow>
                          <MDBCardText className="mb-1" style={{ fontSize: '1.5rem' }}>Project Details</MDBCardText>
                          <hr/>
                              <MDBCol sm="4">
                             
                                <MDBCardText style={{ fontSize: '1.2rem' }}>Project ID</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="7">
                                <MDBCardText className="text-muted" style={{ fontSize: '1rem' }}>{ele.projectId}</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                              <MDBCol sm="4">
                                <MDBCardText style={{ fontSize: '1.2rem' }}>Name</MDBCardText>
                              </MDBCol>
                              <MDBCol sm="7">
                                <MDBCardText className="text-muted" style={{ fontSize: '1rem' }}>Treasury Management</MDBCardText>
                              </MDBCol>
                            </MDBRow>
                          </MDBCardBody>
                          </MDBCard>   
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol md="5">
                            <MDBCard className="mb-4 mb-md-0">
                              <MDBCardBody>
                                <MDBCardText className="mb-1" style={{ fontSize: '1.5rem' }}>Skills</MDBCardText>
                                <MDBCardText className="mb-1" style={{ fontSize: '1rem' }}>Frontend (HTML, React, JavaScript, CSS)</MDBCardText>
                                <MDBProgress className="rounded" >
                                  <MDBProgressBar width={80} valuemin={0} valuemax={100} style={{ backgroundColor:'#043b80' }}/>
                                </MDBProgress>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1rem' }}>Backend (Java, Python, C++)</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={72} valuemin={0} valuemax={100} style={{ backgroundColor:'#043b80' }}/>
                                </MDBProgress>

                                <MDBCardText className="mt-4 mb-1" style={{ fontSize: '1rem' }}>Database (MySQL, MongoDB)</MDBCardText>
                                <MDBProgress className="rounded">
                                  <MDBProgressBar width={89} valuemin={0} valuemax={100} style={{ backgroundColor:'#043b80' }}/>
                                </MDBProgress>
                              </MDBCardBody>
                            </MDBCard>
                          </MDBCol>

                          <MDBCol md="7">
                          <MDBCard className="mb-4 mb-md-0">
                          <MDBCardBody>
                          <MDBCardText className="mb-1" style={{ fontSize: '1.5rem' }}>Performance Analysis</MDBCardText>
                             <PerformanceCard/>
                          </MDBCardBody>
                          </MDBCard>   
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBContainer>
                  
                </section>
              </>
            );
          }
        })
      ) : (
        <>
          <div
            style={{
              border: "1px solid black",
              width: "400px",
              marginLeft: "40%",
              textAlign: "center",
              marginTop: "80px",
              padding: "20px",
            }}
          >
            <div style={{ textAlign: "right" }} onClick={close}>
              <CloseIcon />
            </div>
            <LockIcon />
            <label>Old Password</label>
            <input type="password" onChange={pass2} />
            <LockIcon />
            <label>Enter New Password</label>
            <input type="password" onChange={pass} />
            <LockIcon />
            <label>Renter Password</label>
            <input type="password" onChange={pass1} />

            <button
              style={{
                borderRadius: "5px",
                backgroundColor: "#002d64",
                color: "white",
                width: "200px",
              }}
              onClick={submit}
            >
              Reset Password
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default MyProfile;
