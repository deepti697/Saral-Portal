import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import axios from "axios";
import "./IncrementLetter.css";
import { SessionLogic } from "../../../Logins/SessionLogic";
import sarallogo from '../../../images/SaralBankLogo.jpg';

const IncrementLetter = () => {
  const navigate = useNavigate();
  const [incrementLetterData, setIncrementLetterData] = useState([]);

  let incrementdata1 = localStorage.getItem("LoginData");
  let incrementdata2 = JSON.parse(incrementdata1);
  //console.log(incrementdata2);

  useEffect(() => {
    axios.get("http://localhost:8087/increments").then((response) => {
      setIncrementLetterData(response.data);
    });
  }, []);

  const incrementDownload = () => {
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

      {incrementLetterData.map((ele) => {
        if (ele.employeeId == incrementdata2.employeeId) {
          return (
            <>
              <p className="main-heading2">LETTER OF INCREMENT</p>
              <div className="address1">
                <p><b>To,</b><br/>
                Name: {incrementdata2.employeeName}<br/>
                ID: {ele.employeeId}<br/>
                Designation: {incrementdata2.designation}<br/>
                Saral Bank<br/>
                </p>
              </div>

              <p className="subject1">Subject: Increment Letter</p>

              <div className="para1">
                <p>Dear, {incrementdata2.employeeName}</p>
                <p>
                We would like to covey our heartly congratulations for your hard work and dedication towards organization objectives and it is our pleasure to announce 
                an increment of {ele.incrementPercent}% to your current CTC and the revised salary will be effective from next month.
              </p>
                <p>
                For remaining salary breakup details and other terms and 
                conditions please contact the HR department.
                </p>
                <p>
                We look forward to your valuable contributions
                 to the organization and wishing you a great career ahead.
                </p>
                <p>Please sign the copy of 
                  this letter as a token of acceptance of the same.</p>
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
              <div className="btn">
                <Button
                  type="submit"
                  halfWidth
                  variant="contained"
                  sx={{ mt: 1, mb: 1 }}
                  id="btnlogin"
                  style={{ backgroundColor: "#002d64" }}
                  onClick={incrementDownload}
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

export default IncrementLetter;
