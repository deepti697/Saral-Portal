import Card from "react-bootstrap/Card";
import "./AdminProject.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminNavigation from "./AdminNavigation";
import { TimeoutLogic } from "../../Logins/TimeoutLogic";

function AdminProject() {
  const [projectData, setProjectData] = useState([]);
  const navigate = useNavigate();

  const projectSubmit = (ele1) => {
    console.log(ele1);
    //  let eleState = Array.from(...ele)
    localStorage.setItem("AdminProject", JSON.stringify(ele1));
    navigate("/admin-project-details");
  };

  useEffect(() => {
    axios.get("http://localhost:8085/projects").then((response) => {
      setProjectData(response.data);
    });
  }, []);

  return (
    <>
      <div>
      <AdminNavigation />
      <TimeoutLogic/>
      
      <button
        className="adminproadd"
        onClick={() => {
          navigate("/admin-project-add");
        }}
        style={{fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}
      >
        Manage Projects
      </button>
      <div className="divflex">
        {projectData.map((ele) => {
          return (
            <>
              <div className="projectCard">
                <Card >
                  <Card.Header className="cardHeader">
                     {ele.projectName}
                  </Card.Header>
                  <Card.Body>
                    <h6 className="font">P.ID: {ele.projectId}</h6>
                    <h6 className="font">M.ID: {ele.managerId}</h6>
                    <br/>
                    <Card.Text className="italic">
                      For more detailed description, Click below.
                    </Card.Text>
                    <button
                      className="projectButton"
                      onClick={() => {
                        projectSubmit(ele);
                      }}
                      style={{fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"}}
                    >
                      {" "}
                      Go To Details{" "}
                    </button>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </div>
      </div>
    </>
  );
}

export default AdminProject;
