import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavigation from "./AdminNavigation";
import { TimeoutLogic } from "../../Logins/TimeoutLogic";

const AdminManagers = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const [employeeSearch, setEmployeeSearch] = useState("");

  const empsearch = (event) => {
    setEmployeeSearch(event.target.value);
    if (event.target.value == "") {
      axios.get("http://localhost:8085/managers").then((response) => {
        setEmployeeData(response.data);
      });
    } else {
      let newEmployeeData = employeeData.filter((e) => {
        return (
          e.managerName.substring(0, employeeSearch.length).toLowerCase() ==
          employeeSearch.toLowerCase()
        );
      });
      setEmployeeData(newEmployeeData);
    }
  };

  const employeeClick = () => {
    let newEmployeeData = employeeData.filter((e) => {
      return (
        e.managerName.substring(0, employeeSearch.length).toLowerCase() ==
        employeeSearch.toLowerCase()
      );
    });
    setEmployeeData(newEmployeeData);
  };

  useEffect(() => {
    axios.get("http://localhost:8085/managers").then((response) => {
      setEmployeeData(response.data);
    });
  }, []);

  //    console.log(empData)

  return (
    <>
      <AdminNavigation />
      <TimeoutLogic/>
      <div className="employeesearch">
        <div className="input-group">
          <div className="employeeinput">
            <input
              type="search"
              className="form-control"
              placeholder="Manager Name"
              onChange={empsearch}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary employeebtn"
            onClick={employeeClick}
          >
            <i className="fas fa-search"> Search </i>
          </button>
        </div>
      </div>
    
          <section class="table__body">
          <table class="table-fixed">
            <thead>
              <tr>
                <th> Manager Id</th>
                <th> Name</th>
                <th> Designation </th>
                <th> Email Id</th>
                <th> Mobile No</th>
              </tr>
            </thead>
            <tbody>
              {
                employeeData.map((ele) =>
                  <tr key= {ele.managerId}>
                    <td className="light-text"> {ele.managerId}</td>
                    
                    <td className="light-text">
                    <img src={ele.profile}
                       alt="Avatar"
                       className="my-2"
                       style={{
                         width: "70px",
                         height: "70px",
                        borderRadius: "50%",
                      }} />
                       {ele.managerName}</td>
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

export default AdminManagers;
