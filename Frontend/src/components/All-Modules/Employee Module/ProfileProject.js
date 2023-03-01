import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCol,
  MDBRow,
  MDBCardText,
} from "mdb-react-ui-kit";

function ProfileProject() {
    const [projectData, setProjectData] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8085/projects").then((response) => {
            setProjectData(response.data);
        });
    }, []);

    return (
        <>

            {projectData.map((ele) => {
                return (
                    <>

                        <Card>
                            <MDBRow>
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
                                    <MDBCardText className="text-muted" style={{ fontSize: '1rem' }}>{ele.projectName}</MDBCardText>
                                </MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow>
                                <MDBCol sm="4">
                                    <MDBCardText style={{ fontSize: '1.2rem' }}>Description</MDBCardText>
                                </MDBCol>
                                <MDBCol sm="7">
                                    <MDBCardText className="text-muted" style={{ fontSize: '1rem' }}>{ele.projectDescription}</MDBCardText>
                                </MDBCol>
                            </MDBRow>
                        </Card>

                    </>
                );
            })}
        </>
    );
}

export default ProfileProject;
