import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";
import ArrowBackIosNewTwoToneIcon from "@mui/icons-material/ArrowBackIosNewTwoTone";
import { useNavigate } from "react-router-dom";
import "./SalarySlip.css";
import { SessionLogic } from "../../../Logins/SessionLogic";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const SalarySlip = () => {
  const [salaryEmployeeData, setSalaryEmployeeData] = useState([]);

  const navigate = useNavigate();

  // getting the data from the localstorage...

  let salarySlip1 = localStorage.getItem("SalarySlip");
  let salarySlip2 = JSON.parse(salarySlip1);

  const [month, setMonth] = useState('');
    const handlemonth = (event) => {
        const month1 = event.target.value;
        setMonth(month1);
    }

    const [year, setYear] = useState('');
    const handleYear = (event) => {
        const year1 = event.target.value;
        setYear(year1);
    }
  // console.log(salarySlip2);

  useEffect(() => {
    axios.get("http://localhost:8085/employees").then((response) => {
      setSalaryEmployeeData(response.data);
    });
  }, []);

  const salarydownload = () => {
    window.print();
  };

  return (
    <>
      <SessionLogic />
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
      <Box display="flex" justifyContent='flex-end' mt={2} >
      <Typography ml={16} variant="body3" color="black" fontWeight="bold" pr={3}>
        Enter month and year to download:</Typography>

      <Box pr={3}>
        <select onChange={handlemonth} style={{ width: "150px", height: "40px" }}>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
      </Box>
      <Box pr={3}>
        <select onChange={handleYear} style={{ width: "150px", height: "40px" }}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </Box>
      </Box>
      <br/>
      {
        // let found = salaryEmployeeData.find((element) => element.employeeId == salarySlip2.employeeId)

        salaryEmployeeData.map((ele) => {
          if (ele.employeeId == salarySlip2.employeeId) {
            return (
              <>
                <div className="centerSalarySlip">
                  <Card>
                    <Card.Header
                      className="managercard"
                      style={{ fontWeight: "bold", fontSize: "25px" }}
                    >
                      Salary Slip
                    </Card.Header>

                    <Card.Header
                      className="managercard"
                      style={{ fontWeight: "bold", fontSize: "20px" }}
                    >
                      {ele.employeeName}
                    </Card.Header>

                    <Card.Body> </Card.Body>
                  </Card>

                  <div className="content" style={{ backgroundColor: "white" }}>
                    <table className="tableContainer">
                      <thead>
                      <tr
                          className="empFields"
                          style={{ backgroundColor: "white" }}
                        >
                          <th style={{ backgroundColor: "white" }}>
                            Date: {month} {year}
                          </th>
                        </tr>
                        <tr
                          className="empFields"
                          style={{ backgroundColor: "white" }}
                        >
                          <th style={{ backgroundColor: "white" }}>
                            Employee ID: {salarySlip2.employeeId}
                          </th>
                        </tr>

                        <tr
                          className="empFields"
                          style={{ backgroundColor: "white" }}
                        >
                          <th style={{ backgroundColor: "white" }}>
                            Designation: {ele.designation}
                          </th>
                        </tr>

                        <br />

                        <tr
                          className="heading"
                          style={{ backgroundColor: "white" }}
                        >
                          <th style={{ backgroundColor: "white" }}>
                            Standard Monthly Salary
                          </th>
                        </tr>

                        <tr>
                          <th
                            className="dataFields"
                            style={{ backgroundColor: "white" }}
                          >
                            Basic Pay
                          </th>

                          <td>{salarySlip2.basicPay}</td>
                        </tr>

                        <tr>
                          <th
                            className="dataFields"
                            style={{ backgroundColor: "white" }}
                          >
                            Allowance
                          </th>

                          <td>{salarySlip2.allowance}</td>
                        </tr>

                        <tr>
                          <th
                            className="dataFields"
                            style={{ backgroundColor: "white" }}
                          >
                            Location Pay
                          </th>

                          <td>{salarySlip2.locationPay}</td>
                        </tr>

                        <tr>
                          <th
                            className="dataFields"
                            style={{ backgroundColor: "white" }}
                          >
                            Benefits Pay
                          </th>

                          <td>{salarySlip2.benefitsPay}</td>
                        </tr>

                        <tr>
                          <th
                            className="dataFields"
                            style={{ backgroundColor: "white" }}
                          >
                            PF Contribution
                          </th>

                          <td>{salarySlip2.pfContribution}</td>
                        </tr>

                        <tr className="salary">
                          <th
                            className="dataFields"
                            style={{ backgroundColor: "white" }}
                          >
                            Net Pay
                          </th>

                          <td>{salarySlip2.salaryAmount}</td>
                        </tr>
                      </thead>
                    </table>
                  </div>

                  <Button
                    type="submit"
                    halfWidth
                    variant="contained"
                    sx={{ mt: 1, mb: 1 }}
                    id="btnlogin"
                    style={{
                      backgroundColor: "#002d64",
                    }}
                    onClick={salarydownload}
                  >
                    DOWNLOAD
                  </Button>
                </div>
              </>
            );
          }
        })
      }
    </>
  );
};

export default SalarySlip;
