import React, { useEffect, useState } from "react";
import ProjectNavigation from "./ProjectNavigation";
import axios from "axios";
import "./Opportunity.css";
import { SessionLogic } from "../../Logins/SessionLogic";

const Opportunity = () => {
  const [opportunity, setOpportunity] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8085/opportunities").then((response) => {
      setOpportunity(response.data);
    });
  }, []);

  return (
    <>
      <ProjectNavigation />
      <SessionLogic/>
      <h2 className="oppHead"> Opportunities </h2>
      <div className="opportunityEmp">
        {opportunity.map((ele) => {
          return (
            <>
              <div className="opp-card">
                <div className="card-container">
                  <table>
                    <thead>
                      <tr>
                        <th className="bold-text">Project ID </th>
                        <th className="bold-text">{ele.projectId}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="light-text">Designation</td>
                        <td className="light-text">{ele.projectDesignation}</td>
                      </tr>
                      <tr>
                        <td className="light-text">Domain</td>
                        <td className="light-text">{ele.projectDomain}</td>
                      </tr>
                      <tr>
                        <td className="light-text"> Duration</td>
                        <td className="light-text">{ele.projectDuration}</td>
                      </tr>
                      <tr>
                        <td className="light-text">Manager ID</td>
                        <td className="light-text">{ele.projectManagerId}</td>
                      </tr>
                      <tr>
                        <td className="light-text">Salary</td>
                        <td className="light-text">{ele.salary}</td>
                      </tr>
                      <tr>
                        <td className="light-text">Location</td>
                        <td className="light-text">{ele.location}</td>
                      </tr>
                      <tr>
                        <td className="light-text">Description</td>
                        <td className="light-text">{ele.description}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Opportunity;
