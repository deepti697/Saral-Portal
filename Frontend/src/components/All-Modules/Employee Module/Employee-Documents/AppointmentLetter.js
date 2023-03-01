import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import { useNavigate } from "react-router-dom";
import "./AppointmentLetter.css";
import axios from "axios";
import { SessionLogic } from "../../../Logins/SessionLogic";
import sarallogo from '../../../images/SaralBankLogo.jpg';

const AppointmentLetter = () => {
  const navigate = useNavigate();

  const [apptletter, setApptLetter] = useState([]);

  let appointmentdata1 = localStorage.getItem("LoginData");
  let appointmentdata2 = JSON.parse(appointmentdata1);
  console.log(appointmentdata2);

  useEffect(() => {
    axios.get("http://localhost:8087/appointments").then((response) => {
      setApptLetter(response.data);
    });
  }, []);

  const apptletterdownload = () => {
    window.print();
  };

  return (
    <>
    <SessionLogic/>
      <Button
        type="submit"
        halfWidth
        variant="contained"
        sx={{ mt: 1, mb: 1 }}
        id="btnlogin"
        style={{ backgroundColor: "#002d64" }}
        onClick={() => {
          navigate("/employee-documents");
        }}
      >
        <ArrowBackIosNewTwoToneIcon /> Back
      </Button>
      {apptletter.map((ele) => {
        if (ele.employeeId == appointmentdata2.employeeId) {
          return (
            <>
              <p className="main-heading"> LETTER OF APPOINTMENT</p>

              <div className="leftSide">
                <p className="title">Date: {ele.appointmentDate}</p>
              </div>
              <div className="letter-area">
                <p className="name"> Dear {appointmentdata2.employeeName},</p>
                <p className="name">
                  {" "}
                  Appointed as {appointmentdata2.designation}
                </p>
                <p className="para">
                We are pleased to inform you that you have been selected for the position of {appointmentdata2.designation}
                 at Saral Bank! We had many qualified candidates,
                 but you seemed to be best fit for our growing organization.
                </p>

                <p className="para">
                Your job appointment will begin on {ele.appointmentDate}. 
                You will recieve the Eight Lakh per annum, along with any possible bonuses. 
                You will be given one month of paid leave per year, 
                and will have the facility of a company cab.
                </p>
                <p className="para">
                We look forward to hearing back from you to accept this position.
                </p>
                <p className="left-bottom">Sincerely,<br/>Saral Bank.
                <br/>
              
                <img style={{
                height: "2rem",
                width: "8rem",
                color: "white",
                alignItems: "center",
                justifyContent: "center",
              }} src={sarallogo}/>
               </p>
                <br />
               
              </div>
              <div className="btn">
                <Button
                  type="submit"
                  halfWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 1 }}
                  id="btnlogin"
                  style={{ backgroundColor: "#002d64" }}
                  onClick={apptletterdownload}
                >
                  DOWNLOAD
                </Button>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default AppointmentLetter;
