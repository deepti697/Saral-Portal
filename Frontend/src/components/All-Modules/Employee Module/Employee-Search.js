import React from "react";
import ProjecNavigation from "./ProjectNavigation";
import { useEffect, useState } from "react";
// import ManagerProjectNav from "./ManagerProjectNav";
import axios from "axios";
import './empsearch.css';
import { SessionLogic } from "../../Logins/SessionLogic";

const EmployeeSearch = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [employeeSearch, setEmployeeSearch] = useState("");

  const empsearch = (event) => {
    setEmployeeSearch(event.target.value);
    if (event.target.value == "") {
      axios.get("http://localhost:8085/employees").then((response) => {
        setEmployeeData(response.data);
      });
    } else {
      let newEmployeeData = employeeData.filter((e) => {
        return (
          e.employeeName.substring(0, employeeSearch.length).toLowerCase() ==
          employeeSearch.toLowerCase()
        );
      });
      setEmployeeData(newEmployeeData);
    }
  };

  const employeeClick = () => {
    let newEmployeeData = employeeData.filter((e) => {
      return (
        e.employeeName.substring(0, employeeSearch.length).toLowerCase() ==
        employeeSearch.toLowerCase()
      );
    });
    setEmployeeData(newEmployeeData);
  };

  useEffect(() => {
    axios.get("http://localhost:8085/employees").then((response) => {
      setEmployeeData(response.data);
    });
  }, []);
  return (
    <>
      <ProjecNavigation />
      <SessionLogic />
      <div className="employeesearch">
        <div className="input-group">
          <div className="employeeinput">
            <input type="search" className="form-control" placeholder="Employee name" onChange={empsearch} />
          </div>
          <button type="button" className="btn btn-primary employeebtn" onClick={employeeClick}>
            <i className="fas fa-search"> Search </i>
          </button>
        </div>
      </div>

      <section class="table__body">
        <table class="table-fixed">
          <thead>
            <tr>
              <th> Employee Id</th>
              <th> Name</th>
              <th> Designation </th>
              <th> Email Id</th>
              <th> Mobile No</th>
            </tr>
          </thead>
          <tbody>
            {
              employeeData.map((ele) =>
                <tr key={ele.employeeId}>
                  <td className="light-text">{ele.employeeId}</td>
                  <td className="light-text">
                    <img src={ele.profile}
                      alt="Avatar"
                      className="my-2"
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                      }} />{ele.employeeName}</td>
                  <td className="light-text">{ele.designation}</td>
                  <td className="light-text">{ele.emailId}</td>
                  <td className="light-text">{ele.mobileNo}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </section>
    </>
  );
};

export default EmployeeSearch;
