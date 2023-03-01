import React, { useState } from "react";
import axios from "axios";
import {MDBCard,MDBCardBody,MDBCardTitle,MDBCardText,MDBCardHeader,MDBCardFooter,MDBBtn,} from "mdb-react-ui-kit";
import AdminNavigation from "../AdminNavigation";
import Button from "@mui/material/Button";
import "./AdminUpload.css";
import { TimeoutLogic } from "../../../Logins/TimeoutLogic";

export default function AdminUpload() {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadsopFile = (event) => {
    event.preventDefault();
    // document.getElementById("inputfile").click();

    const formData = new FormData();
    formData.append("file", file);

    // fetch("http://localhost:9191/api/pdf", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   });
    axios.post(`http://localhost:9191/api/sop`, formData).then((response) => {
      alert("File uploaded", window.location.reload());
    });
  };

  const uploadscdFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    axios.post(`http://localhost:9191/api/scd`, formData).then((response) => {
      alert("File uploaded", window.location.reload());
    });
  };

  const uploadpolicyFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    axios.post(`http://localhost:9191/api/policies`, formData).then((response) => {
      alert("File uploaded", window.location.reload());
    });
  };
  return (
    <>
      <AdminNavigation />
      <TimeoutLogic/>
      <div className="adminUploadMain">
        <div className="adminUpload">
          <MDBCard alignment="center">
            <MDBCardHeader>Featured</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle className="font">SOP</MDBCardTitle>
              <MDBCardText className="italic">
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>

              <input type="file" name="" onChange={handleChange}  className="text-muted"/>
              <Button
                type="submit"
                halfWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                id="btnlogin"
                style={{ backgroundColor: "#002d64" , fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                onClick={uploadsopFile}
              >
                Upload File
              </Button>
            </MDBCardBody>
            <MDBCardFooter className="text-muted font">Saral Bank</MDBCardFooter>
          </MDBCard>
        </div>
        <div className="adminUpload">
          <MDBCard alignment="center">
            <MDBCardHeader>Featured</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>SCD</MDBCardTitle>
              <MDBCardText className="italic">
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>
              <input type="file" name="" onChange={handleChange} />
              <Button
                type="submit"
                halfWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                id="btnlogin"
                style={{ backgroundColor: "#002d64" , fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                onClick={uploadscdFile}
              >
                Upload File
              </Button>
            </MDBCardBody>
            <MDBCardFooter className="text-muted">Saral Bank</MDBCardFooter>
          </MDBCard>
        </div>
        <div className="adminUpload">
          <MDBCard alignment="center">
            <MDBCardHeader>Featured</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Policies</MDBCardTitle>
              <MDBCardText className="italic">
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>
              <input type="file" name="" onChange={handleChange} />
              <Button
                type="submit"
                halfWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                id="btnlogin"
                style={{ backgroundColor: "#002d64" , fontFamily:"'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }}
                onClick={uploadpolicyFile}
              >
                Upload File
              </Button>
            </MDBCardBody>
            <MDBCardFooter className="text-muted">Saral Bank</MDBCardFooter>
          </MDBCard>
        </div>
        {/* <div className="adminUpload">
          <MDBCard alignment="center">
            <MDBCardHeader>Featured</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Code of Conduct & Ethics</MDBCardTitle>
              <MDBCardText>
                With supporting text below as a natural lead-in to additional
                content.
              </MDBCardText>
              <input type="file" name="" onChange={handleChange} />
              <Button
                type="submit"
                halfWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                id="btnlogin"
                style={{ backgroundColor: "#002d64" }}
                onClick={uploadFile}
              >
                Upload File
              </Button>
            </MDBCardBody>
            <MDBCardFooter className="text-muted">Saral Bank</MDBCardFooter>
          </MDBCard>
        </div> */}
      </div>
    </>
  );
}
