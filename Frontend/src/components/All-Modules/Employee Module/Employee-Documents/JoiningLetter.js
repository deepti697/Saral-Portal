import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import axios from "axios";
import "./JoiningLetter.css";
import { SessionLogic } from "../../../Logins/SessionLogic";
import sarallogo from '../../../images/SaralBankLogo.jpg';

const JoiningLetter = () => {
  const navigate = useNavigate();
  const [joiningLetterData, setJoiningLetterData] = useState([]);

  let joiningdata1 = localStorage.getItem("LoginData");
  let joiningdata2 = JSON.parse(joiningdata1);
  console.log(joiningdata2);

  useEffect(() => {
    axios.get("http://localhost:8087/joiningLetters").then((response) => {
      setJoiningLetterData(response.data);
    });
  }, []);

  const joinletterdownload = () => {
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

      {joiningLetterData.map((ele) => {
        if (ele.employeeId == joiningdata2.employeeId) {
          return (
            <>
              <p className="main-heading1"> LETTER OF JOINING</p>
              <div className="address">
              <p><b>To,</b><br/>
                Name: {joiningdata2.employeeName}<br/>
                </p>
              </div>
              <div className="subject">
                <p>Subject: Joining Letter </p>
              </div>
              <div className="para1">
                <p>Dear {joiningdata2.employeeName},</p>
                <p>
                This has reference to the various discussions you had with us.
                </p>
                <p>
                We are pleased to make a provisional offer of appointment as {joiningdata2.designation}. 
                Your Annual earnings including salary, allowances, annual benefits and 
                statutory payments as applicable will total 8 LPA. 
                You will recieve a detailed appointment letter after you join.
                </p>
                <p>On reporting please bring two recent 
                  passort size photographs, 
                  photocopy of all educational certificates, 
                  proof of age certificate, IT Declaration/ 
                  Form 16 from last employer, last employer's salary certificate 
                  and relieving letter of the last employer.
                </p>
                <p>You are required to join the Company 
                  on or before {ele.dateOfJoining}. 
                  Please return a signed copy of this letter as a token of your 
                  acceptance of the offer, confirming your date of joining.
                We look forward to a mutually rewarding relationship.</p>
              </div>
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
               <p className="right-bottom">_______________________<br/>Accepted & Agreed</p>
              <div className="btn">
                <Button
                  type="submit"
                  halfWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 1 }}
                  id="btnlogin"
                  style={{ backgroundColor: "#002d64" }}
                  onClick={joinletterdownload}
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

export default JoiningLetter;
